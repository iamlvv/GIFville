import React, { useContext } from "react";
import Searchbar from "../../../components/Search/Searchbar";
import SearchSuggestions from "../../../components/Search/SearchSuggestions";
import { AppContext } from "../../../context/AppContext";

type Props = {};

const styles = {
  banner: {
    width: "100%",
    background: "linear-gradient(180deg, #000000 0%, #1D1D1D 100%)",
  },
};

// Component to show banner
const Banner = (props: Props) => {
  const { search, searchResults, setSearchResults } = useContext(AppContext);

  // Detect clicks outside of search suggestions but not click in the input field to close search suggestions
  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      const searchSuggestions = document.getElementById("search-suggestions");
      const searchbar = document.getElementById("searchbar");
      if (
        searchSuggestions &&
        !searchSuggestions.contains(e.target) &&
        searchbar &&
        !searchbar.contains(e.target)
      ) {
        setSearchResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="banner" className="text-center" style={styles.banner}>
      <div id="banner-header">
        <h1 className="font-bold text-3xl mb-5">Looking for gifs?</h1>
        <Searchbar />
      </div>
      {searchResults.length > 0 && search.length !== 0 ? (
        <SearchSuggestions />
      ) : null}
    </div>
  );
};

export default Banner;
