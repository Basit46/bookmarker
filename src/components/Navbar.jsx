import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  const { user, signIn, signUserOut } = useAuthContext();

  return (
    <nav className="sticky top-0 bg-white py-[15px]  font-Helvetica px-[50px] flex justify-between gap-[50px] items-center">
      <div className="">
        <div className="flex gap-[20px] items-center">
          <NavLink className="text-[1.1rem] font-medium" to="/add">
            Create New Bookmark
          </NavLink>
          <NavLink className="text-[1.1rem] font-medium" to="/bookmarks">
            View Bookmarks
          </NavLink>
        </div>
      </div>

      {user ? (
        <button
          onClick={signUserOut}
          className="bg-[red] text-white px-[10px] py-[5px] rounded-[10px]"
        >
          SIGN OUT
        </button>
      ) : (
        <button
          onClick={signIn}
          className="bg-[#2020f7] text-white px-[10px] py-[5px] rounded-[10px]"
        >
          SIGN IN
        </button>
      )}
    </nav>
  );
};

export default Navbar;
