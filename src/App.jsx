import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import AddToBookmarks from "./pages/AddToBookmarks";
import AddCategory from "./modal/AddCategory";

function App() {
  return (
    <div className="font-Primary">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/add" element={<AddToBookmarks />} />
      </Routes>

      <AddCategory />
    </div>
  );
}

export default App;
