import React from "react";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div>
      <Header />
      <Banner />
      <MainContent />
    </div>
  );
};

export default Homepage;
