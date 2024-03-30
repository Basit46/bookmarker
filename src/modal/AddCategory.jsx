import React, { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/globalContext";
import { toast } from "react-toastify";

const AddCategory = () => {
  const { isAddCategoryOpen, setIsAddCategoryOpen, addNewCategory } =
    useGlobalContext();

  const [value, setValue] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    if (isAddCategoryOpen) {
      inputRef.current.focus();
    }
  }, [isAddCategoryOpen]);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (value == "") {
      toast("Input the category name");
      return;
    }

    await addNewCategory(value);
    setValue("");
  };
  return (
    <div
      className={`${
        isAddCategoryOpen ? "grid" : "hidden"
      } fixed top-0 left-0 h-screen w-screen bg-black/80 place-items-center`}
    >
      <form
        onSubmit={handleAdd}
        className="relative w-[300px] bg-white border-b border-black p-[20px] rounded-[10px]"
      >
        <FaTimes
          onClick={() => setIsAddCategoryOpen(false)}
          className="absolute top-[10px] right-[10px] text-[red] text-[20px] cursor-pointer"
        />

        <h1 className="text-[1.2rem] font-bold uppercase text-center">
          Add New Category
        </h1>

        <input
          className="mt-[10px] mb-[20px] w-full block px-[7px] py-[3px] border border-black"
          type="text"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Cooking"
        />

        <button
          onClick={handleAdd}
          className="w-full bg-[green] text-white py-[4px]"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
