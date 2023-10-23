import React, { useContext } from "react";
import Button from "../Button";
import { searchTrendingGifs } from "../../api/trending";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
type Props = {};

const Searchbar = (props: Props) => {
  const navigate = useNavigate();

  const {
    search,
    setSearch,
    searchResults,
    setSearchResults,
    keyword,
    setKeyword,
  } = useContext(AppContext);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setKeyword(search);
    setSearch("");
    navigate(`/search-results/${search}`);
  };

  const handleSearch = (e: any) => {
    searchTrendingGifs({
      query: search,
      setState: setSearchResults,
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
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
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
