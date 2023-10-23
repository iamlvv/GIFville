import React, { useContext, useEffect } from "react";
import MainContent from "../Homepage/components/MainContent";
import { searchTrendingGifs } from "../../api/trending";
import Header from "../../components/Header";
import Banner from "../Homepage/components/Banner";
import { AppContext } from "../../context/AppContext";

type Props = {};

const SearchResultPage = (props: Props) => {
  return (
    <div>
      <Header />
      <Banner />
      <MainContent />
    </div>
  );
};

export default SearchResultPage;
