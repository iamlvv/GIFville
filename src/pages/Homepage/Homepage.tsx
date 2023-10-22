import React from "react";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";

type Props = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

const Homepage = (props: Props) => {
  const [search, setSearch] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<any[]>([]);

  return (
    <div>
      <Header setKeyword={props.setKeyword} />
      <Banner
        search={search}
        setSearch={setSearch}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        keyword={props.keyword}
        setKeyword={props.setKeyword}
      />
      <MainContent keyword={props.keyword} />
    </div>
  );
};

export default Homepage;
