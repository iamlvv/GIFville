import React, { useEffect } from "react";
import MainContent from "../Homepage/components/MainContent";
import { searchTrendingGifs } from "../../api/trending";
import Header from "../../components/Header";
import Banner from "../Homepage/components/Banner";

type Props = {
  search: string;
  setSearch: (value: any) => void;
  searchResults: any[];
  setSearchResults: (value: any[]) => void;
  keyword: string;
  setKeyword: (item: string) => void;
};

const SearchResultPage = (props: Props) => {
  return (
    <div>
      <Header setKeyword={props.setKeyword} />
      <Banner
        keyword={props.keyword}
        setKeyword={props.setKeyword}
        search={props.search}
        setSearch={props.setSearch}
        searchResults={props.searchResults}
        setSearchResults={props.setSearchResults}
      />
      <MainContent keyword={props.keyword} />
    </div>
  );
};

export default SearchResultPage;
