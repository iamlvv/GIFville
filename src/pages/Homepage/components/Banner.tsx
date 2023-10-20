import React from "react";
import Searchbar from "../../../components/Search/Searchbar";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div id="banner" className="text-center">
      <h1 className="font-bold text-3xl">Looking for gifs?</h1>
      <Searchbar />
    </div>
  );
};

export default Banner;
