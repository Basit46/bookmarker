import React from "react";
import { FaTimes, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Bookmark from "../components/Bookmark";
import { useGlobalContext } from "../context/globalContext";
import emptyGif from "../assets/empty.gif";

const Bookmarks = () => {
  const {
    setIsAddCategoryOpen,
    categories,
    deleteCategory,
    bookmarksClone,
    filterBookmarks,
    categFilter,
    setCategFilter,
  } = useGlobalContext();

  return (
    <div className="pr-[30px] flex h-[100vh]">
      <div className="pt-[20px] px-[30px] bg-[#f4f6f7] w-[20%] h-full flex flex-col">
        <div>
          <div className="h-[90px] w-[90px] rounded-full bg-[tomato]"></div>
          <p className="mt-[10px] text-[1.4rem] font-semibold">
            Hello Basit 👋!
          </p>
        </div>

        <ul className="mt-[40px] mb-[50px] flex flex-col gap-[10px]">
          <li
            className={`${
              categFilter == "all" ? "opacity-100" : "opacity-60"
            } text-[1.2rem]`}
            onClick={() => {
              filterBookmarks("all");
              setCategFilter("all");
            }}
          >
            View All
          </li>
          {categories.map((categ, i) => (
            <li
              key={i}
              className="text-[1.2rem] flex justify-between items-center group"
            >
              <p
                className={`${
                  categFilter == categ ? "opacity-100" : "opacity-60"
                }`}
                onClick={() => {
                  filterBookmarks(categ);
                  setCategFilter(categ);
                }}
              >
                {categ}
              </p>
              <FaTimes
                onClick={() => deleteCategory(categ)}
                className="hidden group-hover:block bg-[red] text-white p-[2px]"
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <p>Add New Category</p>
          <button
            onClick={() => setIsAddCategoryOpen(true)}
            className="bg-[green] text-white p-[4px]"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="pt-[20px] flex-1 pl-[30px] flex flex-wrap gap-[20px]">
        {bookmarksClone && bookmarksClone.length > 0 ? (
          bookmarksClone.map((bookmark, i) => (
            <Bookmark key={i} bookmark={bookmark} />
          ))
        ) : (
          <div className="w-full h-full flex flex-col items-center mt-[30px] ">
            <img className="w-[50%]" src={emptyGif} alt="emmpty gif" />

            <p className="mt-[10px] text-[1.3rem]">
              Empty,{" "}
              <Link to="/add" className="text-[blue] underline">
                Add New Bookmarks
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
