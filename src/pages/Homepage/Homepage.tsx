import React from "react";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";

type Props = {};

const Homepage = (props: Props) => {
  const [search, setSearch] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<any[]>([]);
  const [keyword, setKeyword] = React.useState<string>("");

  console.log(keyword);
  return (
    <div>
      <Header />
      <Banner
        search={search}
        setSearch={setSearch}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <MainContent keyword={keyword} />
    </div>
  );
};

export default Homepage;
