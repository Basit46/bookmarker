import React, { useState } from "react";
import { useGlobalContext } from "../context/globalContext";

const AddToBookmarks = () => {
  const { categories, addBookmark } = useGlobalContext();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [note, setNote] = useState("");
  const [reminder, setReminder] = useState("false");
  const [remindTime, setRemindTime] = useState("");
  const [category, setCategory] = useState("Sports");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title != "" && link != "" && category != "") {
      addBookmark(title, link, note, reminder, remindTime, category);
    } else {
      alert("Input Required Values");
    }
  };

  return (
    <div className="addTo flex justify-center my-[20px]">
      <form
        onSubmit={handleSubmit}
        className="w-[350px] border-[2px] border-black rounded-[10px] py-[20px] px-[30px] flex flex-col gap-[10px]"
      >
        <h1 className="text-center font-bold text-[1.3rem]">
          ADD NEW BOOKMARK
        </h1>

        <div>
          <label htmlFor="title">*Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            id="link"
          />
        </div>

        <div>
          <label htmlFor="note">Additional Note:</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            id="note"
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

        <div>
          <label htmlFor="reminder">Reminder</label>
          <select
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            id="reminder"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div>
          <label htmlFor="remind">Remind Date:</label>
          <input
            value={remindTime}
            onChange={(e) => setRemindTime(e.target.value)}
            type="date"
            id="remind"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-[20px] w-full py-[4px] bg-[green] active:bg-[red] text-white"
        >
          ADD NEW BOOKMARK
        </button>
      </form>
    </div>
  );
};

export default AddToBookmarks;
