import React, { useState } from "react";

type AppContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchResults: any[];
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  favouriteList: any[];
  setFavouriteList: React.Dispatch<React.SetStateAction<any[]>>;
};

const AppContextDefaultValues: AppContextType = {
  search: "",
  setSearch: () => {},
  searchResults: [],
  setSearchResults: () => {},
  keyword: "",
  setKeyword: () => {},
  favouriteList: [],
  setFavouriteList: () => {},
};

export const AppContext = React.createContext<AppContextType>(
  AppContextDefaultValues
);
