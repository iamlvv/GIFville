import React, { useContext, useReducer } from "react";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import { AppContext } from "../../context/AppContext";

type Props = {};

const Homepage = (props: Props) => {
  // const [search, setSearch] = React.useState<string>("");
  // const [searchResults, setSearchResults] = React.useState<any[]>([]);

  return (
    <div>
      <Header />
      <Banner />
      <MainContent />
    </div>
  );
};

export default Homepage;
