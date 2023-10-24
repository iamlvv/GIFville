import { useContext } from "react";
import Button from "../Button";
import { searchTrendingGifs } from "../../api/trending";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
type Props = {};

// Component to show search bar
const Searchbar = (props: Props) => {
  const navigate = useNavigate(); // navigate to other page

  const { search, setSearch, setSearchResults, setKeyword } =
    useContext(AppContext); // get search, setSearch, setSearchResults, setKeyword from context

  // handle submit search when user click on search button or press enter
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setKeyword(search);
    setSearch("");
    navigate(`/search-results/${search}`);
  };

  // handle search when user type in search bar to show search suggestions
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
