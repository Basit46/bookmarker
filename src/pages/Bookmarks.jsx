import React from "react";
import { FaTimes, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Bookmark from "../components/Bookmark";
import { useGlobalContext } from "../context/globalContext";
import emptyGif from "../assets/empty.gif";
import { useAuthContext } from "../context/authContext";

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
  const { user } = useAuthContext();

  return (
    <div className="px-[20px] xmd:px-[50px] mb-[50px] flex flex-col xl:flex-row min-h-[100vh]">
      <div className="sticky top-[60px] xl:static p-[10px] xl:pt-[20px] xl:px-[30px] bg-[#f4f6f7] w-full xl:w-[20%] h-full flex flex-row justify-between xmd:justify-start xl:flex-col">
        <div className="hidden xmd:block ">
          <div className="h-[90px] w-[90px] rounded-full overflow-hidden bg-[tomato]">
            {user?.photoURL && (
              <img
                className="h-full w-full object-cover"
                src={user.photoURL}
                alt="user photo"
              />
            )}
          </div>
          <p className="mt-[10px] text-[1.4rem] font-semibold">
            Hello{" "}
            {
              user?.displayName.split(" ")[
                user?.displayName.split(" ").length - 1
              ]
            }{" "}
            👋!
          </p>
        </div>

        <ul className="h-fit xl:mt-[40px] xl:mb-[50px] xmd:mx-[20px] flex-wrap w-[80%] md:w-[70%] xmd:w-full xl:mx-0 xmd:flex-1 xl:flex-none flex flex-row items-center xl:items-start xl:flex-col gap-[10px]">
          <button
            className={`${
              categFilter == "all" ? "opacity-100" : "opacity-60"
            } text-[0.9rem] md:text-[1.2rem] h-fit`}
            onClick={() => {
              filterBookmarks("all");
              setCategFilter("all");
            }}
          >
            View All
          </button>

          {categories.map((categ, i) => (
            <button
              key={i}
              className="text-[0.9rem] md:text-[1.2rem] xl:w-full flex justify-between items-center group hover:border-b"
            >
              <button
                className={`${
                  categFilter == categ ? "opacity-100" : "opacity-60"
                }`}
                onClick={() => {
                  filterBookmarks(categ);
                  setCategFilter(categ);
                }}
              >
                {categ}
              </button>
              <FaTimes
                onClick={() => deleteCategory(categ)}
                className="hidden ml-[4px] vsm:ml-0 group-hover:block bg-[red] text-white p-[2px]"
              />
            </button>
          ))}
        </ul>

        <div className="flex items-center gap-[5px] md:gap-[20px] xl:gap-0 justify-between">
          <p>
            Add <span className="hidden md:inline">New Category</span>
          </p>
          <button
            onClick={() => setIsAddCategoryOpen(true)}
            className="bg-[green] text-white p-[4px]"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="pt-[20px] xl:flex-1 xl:pl-[30px] h-fit flex flex-wrap gap-[20px]">
        {bookmarksClone && bookmarksClone.length > 0 ? (
          [...bookmarksClone]
            .reverse()
            .map((bookmark, i) => <Bookmark key={i} bookmark={bookmark} />)
        ) : (
          <div className="w-full h-full flex flex-col items-center mt-[30px] ">
            <img className="w-[50%]" src={emptyGif} alt="emmpty gif" />

            <p className="mt-[10px] sm:text-[1.3rem]">
              Empty,{" "}
              <Link to="/add" className="text-[blue] underline">
                Create New Bookmark
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
