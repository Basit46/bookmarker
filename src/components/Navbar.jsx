import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  const { user, signIn, signUserOut } = useAuthContext();

  return (
    <nav className="sticky top-0 bg-white py-[15px] font-Helvetica px-[20px] xmd:px-[50px] flex justify-between md:gap-[50px] items-center">
      <div className="">
        <div className="flex gap-[10px] md:gap-[20px] items-center">
          <NavLink className="md:text-[1.1rem] font-medium" to="/add">
            Create <span className="hidden md:inline">New Bookmark</span>
          </NavLink>
          <NavLink className="md:text-[1.1rem] font-medium" to="/bookmarks">
            View All
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
