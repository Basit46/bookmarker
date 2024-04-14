import React from "react";
import { useGlobalContext } from "../context/globalContext";
import { FaTimes } from "react-icons/fa";

const Bookmark = ({ bookmark }) => {
  const { deleteBookmark } = useGlobalContext();

  return (
    <div className="w-full sm:w-[48%] xmd:w-[30%] bg-[skyblue] h-fit flex flex-col gap-[5px] pb-[5px] py-[10px] px-[10px] rounded-[10px]">
      <div className="border-b border-black pb-[5px] h-fit flex justify-between items-center">
        <h1 className="font-bold text-[1.2rem]">{bookmark.title}</h1>
        <button
          onClick={() => deleteBookmark(bookmark.id)}
          className="px-[8px] py-[4px] bg-[red] text-white"
        >
          <FaTimes />
        </button>
      </div>

      {bookmark.category && <p>Category: {bookmark.category}</p>}

      <a className="text-[blue] underline" href={bookmark.link} target="blank">
        CLICK ON LINK
      </a>

      <p>Desc: {bookmark.note}</p>

      <p className="mt-[20px] text-[0.8rem] font-medium">
        Added{" "}
        {new Date(
          bookmark.addedTime.seconds * 1000 +
            bookmark.addedTime.nanoseconds / 1000000
        ).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Bookmark;
