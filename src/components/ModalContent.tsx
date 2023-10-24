import { useContext } from "react";
import Image from "./icons/Image";
import { AiFillHeart } from "react-icons/ai";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import Button from "./Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../context/AppContext";

type Props = {
  activeItem: any;
};

// Component to show modal content when user click on gif item
const ModalContent = (props: Props) => {
  const { setFavouriteList } = useContext(AppContext); // state to store favourite list
  const handleAddToFavourite = () => {
    // get favourite list from local storage
    // Check if the item is already in the list
    // If yes, do not add
    // If no, add to the list
    const favouriteList = JSON.parse(
      localStorage.getItem("favouriteList") || "[]"
    );
    const isExist = favouriteList.some(
      (item: any) => item.id === props.activeItem?.id
    );
    if (isExist) {
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
    favouriteList.push(props.activeItem);
    localStorage.setItem("favouriteList", JSON.stringify(favouriteList));
    setFavouriteList(favouriteList);

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
    await navigator.clipboard.writeText(props.activeItem?.images?.original.url);
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
  return (
    <div className="text-black flex p-10 gap-5 text-lg">
      <div>
        <Image
          src={props.activeItem?.images?.original.url}
          alt="test"
          width={480}
          height={270}
          className="rounded-md shadow-lg"
        />
      </div>
      <div
        style={{
          height: "270px",
          position: "relative",
        }}
      >
        <h1>
          <span className="font-bold">GIF Name:</span> {props.activeItem?.title}
        </h1>
        <h1>
          <span className="font-bold">User name:</span>{" "}
          {props.activeItem?.username}
        </h1>
        <h1>
          <span className="font-bold">Rating: </span> {props.activeItem?.rating}
        </h1>
        <div
          className="mt-10 flex gap-5"
          style={{
            position: "absolute",
            bottom: "0",
          }}
        >
          <Button
            className="flex items-center gap-5 hover:bg-black hover:text-white transition ease-in-out w-32 p-2 rounded-md justify-center cursor-pointer border"
            onClick={() => {
              handleAddToFavourite(); // handle add to favourite when user click on favourite button
            }}
          >
            <AiFillHeart />
            <h1>Favourite</h1>
          </Button>
          <Button
            className="flex items-center gap-5 hover:bg-black hover:text-white transition ease-in-out w-32 p-2 rounded-md justify-center cursor-pointer border"
            onClick={() => {
              handleShare(); // handle share when user click on share button
            }}
          >
            <PiPaperPlaneTiltFill />
            <h1>Share</h1>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
