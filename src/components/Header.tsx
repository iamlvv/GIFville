import React from "react";
import logo2 from "../assets/logo2.png";
import Image from "./icons/Image";
import { useNavigate } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div id="header" className="shadow-lg">
      <div
        onClick={() => {
          navigate(0);
        }}
      >
        <Image
          width={89}
          height={67}
          src={logo2}
          alt={"logo"}
          className="cursor-pointer select-none"
        />
      </div>
    </div>
  );
};

export default Header;
