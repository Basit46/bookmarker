import React, { useState } from "react";
import { useGlobalContext } from "../context/globalContext";

const AddToBookmarks = () => {
  const { categories, addBookmark } = useGlobalContext();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("Sports");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title != "" && link != "" && category != "") {
      await addBookmark(title, link, note, category);

      setTitle("");
      setLink("");
      setNote("");
    } else {
      alert("Input Required Values");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="addTo my-[20px] px-[30px] flex flex-col items-center"
    >
      <div>
        <h1 className="text-center font-medium text-[1.6rem]">
          ADD TO BOOKMARKS
        </h1>
        <p className="text-center italic opacity-70">* = Required</p>
      </div>

      <div className="my-[20px]">
        <div>
          <label htmlFor="title">*Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="$NIBI Airdrop"
            type="text"
            id="title"
          />
        </div>

        <div>
          <label htmlFor="link">*Link:</label>
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="url"
            placeholder="https://twitter.com/Basit_js/status/1768707649007206553"
            id="link"
          />
        </div>

        <div>
          <label htmlFor="note">Additional Note:</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            id="note"
            placeholder="To participate in the $NIBI airdrop and claim my tokens!"
            className="h-[90px]"
          ></textarea>
        </div>

        <div>
          <label htmlFor="categ">*Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="categ"
          >
            {categories.map((categ, i) => (
              <option key={i} value={categ}>
                {categ}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mb-[20px] px-[20px] py-[4px] bg-[green] hover:bg-[#28b128] active:bg-[red] text-white"
      >
        ADD TO BOOKMARK
      </button>
    </form>
  );
};

export default AddToBookmarks;
