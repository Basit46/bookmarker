import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import AddToBookmarks from "./pages/AddToBookmarks";
import AddCategory from "./modal/AddCategory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="font-Primary">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/add" element={<AddToBookmarks />} />
      </Routes>

      {/* Modal */}
      <AddCategory />

      {/* External Toast Lib */}
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
