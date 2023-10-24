import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGifDetail } from "../../api/trending";
import Header from "../../components/Header";
import Image from "../../components/icons/Image";
import { AiFillHeart } from "react-icons/ai";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import Button from "../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import Banner from "../Homepage/components/Banner";
import { AiOutlineExpand } from "react-icons/ai";
import { AppContext } from "../../context/AppContext";
type Props = {};

// Component to show gif detail page
const GifDetailPage = (props: Props) => {
  const { id } = useParams(); // get id from url

  const [gifDetail, setGifDetail] = React.useState<any>({}); // state to store gif detail

  const [show, setShow] = useState(false); // state to show overlay

  const { setFavouriteList } = useContext(AppContext); // state to store favourite list

  // show overlay
  const showOverlay = () => {
    setShow(true);
  };

  // hide overlay
  const hideOverlay = () => {
    setShow(false);
  };

  // handle add gif to favourite list
  const handleAddToFavourite = (gifDetails: any) => {
    // 1. get favourite list from local storage
    // 2. Check if the item is already in the list
    // 3. If yes, do not add
    // 4. If no, add to the list
    const favouriteList = JSON.parse(
      localStorage.getItem("favouriteList") || "[]"
    );
    const isExist = favouriteList.some(
      (item: any) => item.id === gifDetails.id
    );
    if (isExist) {
      // if already exist in favourite list, show toast
      toast.error("Already added to favourite", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        progress: undefined,
      });
      return;
    }
    favouriteList.push(gifDetails);
    localStorage.setItem("favouriteList", JSON.stringify(favouriteList));
    setFavouriteList(favouriteList);

    // show toast if added to favourite list
    toast.success("Added to favourite successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // handle share gif by copying gif url to clipboard
  const handleShare = async () => {
    await navigator.clipboard.writeText(gifDetail.images?.original.url); // copy gif url to clipboard
    // show toast if copied to clipboard
    toast.success("Copied to clipboard successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // get gif detail by id from api when component mounted
  useEffect(() => {
    getGifDetail({ id, setState: setGifDetail });
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <div className="mb-10">
        <h1 className="text-2xl my-5">
          <span className="font-bold">GIF Name:</span> {gifDetail.title}
        </h1>
        <div className="">
          <div
            className="flex justify-center gap-x-20"
            style={{
              position: "relative",
            }}
          >
            <div className="main-container">
              <div
                onMouseOver={showOverlay}
                onMouseOut={hideOverlay}
                className="image-main-container"
              >
                <img
                  src={gifDetail.images?.original.url}
                  alt="test"
                  className="rounded-md shadow-lg"
                />
                {show && (
                  <div className="overlay border">
                    <AiOutlineExpand
                      width={100}
                      height={100}
                      className="cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-y-10">
                <div className="flex items-center gap-x-5">
                  <h1 className="font-bold">User: </h1>
                  <Image
                    src={gifDetail.user?.avatar_url}
                    width={50}
                    height={50}
                    alt={"user"}
                  />
                  <h1>{gifDetail.user?.username}</h1>
                </div>
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-5">
                    <h1>
                      <span className="font-bold">Rating:</span>{" "}
                      {gifDetail.rating}
                    </h1>
                  </div>
                </div>
              </div>
              <div
                className="mt-10 flex gap-5 flex-col"
                style={{
                  position: "absolute",
                  bottom: "0",
                }}
              >
                <Button
                  className="flex items-center gap-5 hover:bg-white hover:text-black transition ease-in-out w-32 p-2 rounded-md justify-center cursor-pointer border text-white bg-black"
                  onClick={() => handleAddToFavourite(gifDetail)}
                >
                  <AiFillHeart />
                  <h1>Favourite</h1>
                </Button>
                <Button
                  className="flex items-center gap-5 hover:bg-white hover:text-black transition ease-in-out w-32 p-2 rounded-md justify-center cursor-pointer border text-white bg-black"
                  onClick={() => {
                    handleShare();
                  }}
                >
                  <PiPaperPlaneTiltFill />
                  <h1>Share</h1>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GifDetailPage;
