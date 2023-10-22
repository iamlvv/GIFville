import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import GifDetailPage from "./pages/GifDetail/GifDetailPage";
import SearchResultPage from "./pages/SearchResults/SearchResultsPage";
import { useState } from "react";
import FavouritePage from "./pages/Favourite/FavouritePage";

function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage keyword={keyword} setKeyword={setKeyword} />}
        />
        <Route
          path="/search-results/:keyword"
          element={
            <SearchResultPage
              keyword={keyword}
              setKeyword={setKeyword}
              search={search}
              setSearch={setSearch}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
        <Route
          path="/gif-detail/:id"
          element={
            <GifDetailPage
              setKeyword={setKeyword}
              search={search}
              setSearch={setSearch}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              keyword={keyword}
            />
          }
        />
        <Route
          path="/favourite"
          element={<FavouritePage setKeyword={setKeyword} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
