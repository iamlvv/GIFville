import React from "react";

// Context type for the AppContext
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

// Default values for the context
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

// Create the context with the default values
export const AppContext = React.createContext<AppContextType>(
  AppContextDefaultValues
);
