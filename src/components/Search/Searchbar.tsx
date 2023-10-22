import React from "react";
import Image from "../icons/Image";
import searchbutton from "../../assets/searchbutton.png";
import Button from "../Button";
import { searchTrendingGifs } from "../../api/trending";
import SearchSuggestions from "./SearchSuggestions";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
type Props = {
  search: string;
  setSearch: (search: string) => void;
  searchResults: any[];
  setSearchResults: (searchResults: any[]) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
};

const Searchbar = (props: Props) => {
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.setKeyword(props.search);
    props.setSearch("");
    navigate(`/search-results/${props.search}`);
  };

  const handleSearch = (e: any) => {
    searchTrendingGifs({
      query: props.search,
      setState: props.setSearchResults,
      limit: 5,
      offset: 5,
    });
  };
  return (
    <div>
      <form
        className="flex items-center justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div
          id="searchbar"
          className="flex items-center justify-between rounded-md px-2"
        >
          <input
            type="text"
            placeholder="Search for gifs"
            className="text-black p-2 focus:outline-none rounded-md"
            value={props.search}
            onChange={(e) => {
              props.setSearch(e.target.value);
              handleSearch(e);
            }}
            required
            autoFocus
          />
          <Button
            className="flex items-center justify-center bg-slate-950 p-2 rounded-sm cursor-pointer"
            onClick={(e) => handleSubmit(e)}
          >
            <FiSearch width={50} height={50} className="text-white" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
