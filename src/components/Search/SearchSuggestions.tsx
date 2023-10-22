import React, { useState } from "react";
import Image from "../icons/Image";
import { useNavigate } from "react-router-dom";

type Props = {
  setSearch: (value: any) => void;
  searchResults: any[];
};

const styles = {
  searchSuggestions: {
    width: "500px",
    zIndex: 1,
    margin: "0 auto",
  },
};
const SearchSuggestions = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-md text-black font-bold mt-5 shadow-lg"
      style={styles.searchSuggestions}
      id="search-suggestions"
    >
      {props.searchResults.map((result) => {
        return (
          <div
            className="flex items-center gap-x-5 p-2 hover:bg-gray-50 bg-white rounded-md select-none cursor-pointer"
            key={result.id}
            onClick={() => {
              props.setSearch("");
              navigate(`/gif-detail/${result.id}`);
            }}
          >
            <Image
              src={result.images.original.url}
              width={50}
              height={50}
              alt={"search"}
            />
            <h1>{result.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default SearchSuggestions;
