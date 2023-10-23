import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import GifDetailPage from "./pages/GifDetail/GifDetailPage";
import SearchResultPage from "./pages/SearchResults/SearchResultsPage";
import { useState } from "react";
import FavouritePage from "./pages/Favourite/FavouritePage";
import { AppContext } from "./context/AppContext";

function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [favouriteList, setFavouriteList] = useState<any[]>([]);
  return (
    <AppContext.Provider
      value={{
        keyword,
        setKeyword,
        search,
        setSearch,
        searchResults,
        setSearchResults,
        favouriteList,
        setFavouriteList,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/search-results/:keyword"
            element={<SearchResultPage />}
          />
          <Route path="/gif-detail/:id" element={<GifDetailPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
