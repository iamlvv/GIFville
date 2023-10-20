import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import GifDetailPage from "./pages/GifDetail/GifDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-gifs" element={<div>All Gifs</div>} />
        <Route path="/gif-detail/:id" element={<GifDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
