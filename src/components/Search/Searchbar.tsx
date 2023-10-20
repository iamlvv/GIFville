import React from "react";
import Image from "../icons/Image";
import searchbutton from "../../assets/searchbutton.png";
import Button from "../Button";
type Props = {};

const Searchbar = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <input type="text" placeholder="Search for gifs" />
      </div>
      <Button className="flex items-center justify-center gap-2">
        <Image src={searchbutton} width={30} height={30} alt={"search"} />
      </Button>
    </div>
  );
};

export default Searchbar;
