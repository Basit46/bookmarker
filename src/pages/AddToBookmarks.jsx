import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";
import { useGlobalContext } from "../context/globalContext";

const AddToBookmarks = () => {
  const { categories, addBookmark, setIsAddCategoryOpen } = useGlobalContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast("Sign In To Continue");
      return;
    }

    if (title != "" && link != "") {
      await addBookmark(title, link, note, category);

      setTitle("");
      setLink("");
      setNote("");
      setCategory("");
    } else {
      toast("Input Required Values");
    }
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="addTo w-full mx-auto sm:w-fit my-[20px] px-[15px] sm:px-[30px] flex flex-col items-center"
    >
      <div>
        <h1 className="text-center font-medium text-[1.6rem]">
          CREATE NEW BOOKMARK
        </h1>
        <p className="text-center italic opacity-70">* = Required</p>
      </div>

      <div className="w-full sm:w-fit my-[20px]">
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
          <label htmlFor="categ">Category:</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            id="categ"
          >
            <option value="">Select an option</option>
            {categories.map((categ, i) => (
              <option key={i} value={categ}>
                {categ}
              </option>
            ))}
          </select>
          <button
            className="mt-[-20px] text-[blue] underline ml-0"
            onClick={() => setIsAddCategoryOpen(true)}
          >
            Add New Category
          </button>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mb-[20px] px-[20px] py-[4px] bg-[green] hover:bg-[#28b128] active:bg-[red] text-white"
      >
        ADD TO BOOKMARK
      </button>
    </div>
  );
};

export default AddToBookmarks;
