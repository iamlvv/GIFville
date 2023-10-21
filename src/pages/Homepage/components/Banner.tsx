import React from "react";
import Searchbar from "../../../components/Search/Searchbar";
import SearchSuggestions from "../../../components/Search/SearchSuggestions";

type Props = {
  search: string;
  setSearch: (search: string) => void;
  searchResults: any[];
  setSearchResults: (searchResults: any[]) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
};

const styles = {
  banner: {
    width: "100%",
    background: "linear-gradient(180deg, #000000 0%, #1D1D1D 100%)",
  },
};

const Banner = (props: Props) => {
  // Detect clicks outside of search suggestions but not click in the input field
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
        props.setSearchResults([]);
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
        <Searchbar
          search={props.search}
          setSearch={props.setSearch}
          searchResults={props.searchResults}
          setSearchResults={props.setSearchResults}
          keyword={props.keyword}
          setKeyword={props.setKeyword}
        />
      </div>
      {props.searchResults.length > 0 && (
        <SearchSuggestions searchResults={props.searchResults} />
      )}
    </div>
  );
};

export default Banner;
