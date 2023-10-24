import React, { useContext } from "react";
import logo2 from "../assets/logo2.png";
import Image from "./icons/Image";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { AppContext } from "../context/AppContext";
type Props = {};

// Component for displaying header with logo and favourite list button
const Header = (props: Props) => {
  const navigate = useNavigate(); // navigate to different page

  const { setKeyword } = useContext(AppContext); // state to store keyword
  return (
    <div id="header" className="shadow-lg">
      <div className="flex items-center justify-between">
        <Image
          width={89}
          height={67}
          src={logo2}
          alt={"logo"}
          className="cursor-pointer select-none"
          onClick={() => {
            // If current page is not homepage, navigate to homepage
            // else reload the page
            if (window.location.pathname !== "/") {
              setKeyword("");
              navigate("/");
            }
          }}
        />
        <div
          className="flex gap-x-5 items-center hover:bg-red-500 transition ease-in-out p-2 rounded-md cursor-pointer select-none"
          onClick={() => {
            navigate("/favourite");
          }}
        >
          <AiFillHeart />
          <h1 className="font-bold text-center text-2xl">Your Favourites</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
