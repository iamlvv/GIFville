import React from "react";
import Image from "./icons/Image";
import { AiFillHeart } from "react-icons/ai";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import Button from "./Button";
type Props = {
  activeItem: any;
};

const ModalContent = (props: Props) => {
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
          <Button className="flex items-center gap-5 hover:bg-black hover:text-white transition ease-in-out w-32 p-2 rounded-md justify-center cursor-pointer border">
            <AiFillHeart />
            <h1>Favourite</h1>
          </Button>
          <Button className="flex items-center gap-5 hover:bg-black hover:text-white transition ease-in-out w-32 p-2 rounded-md justify-center cursor-pointer border">
            <PiPaperPlaneTiltFill />
            <h1>Share</h1>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
