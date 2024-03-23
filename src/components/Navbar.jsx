import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  const { user, signIn, signUserOut } = useAuthContext();
  return (
    <nav className="px-[50px] py-[15px] border-b border-b-black flex justify-between items-center">
      <Link to="/" className="uppercase font-bold text-[1.5rem]">
        Bookmarker
      </Link>

      <div className="flex gap-[50px] items-center">
        <ul className="flex gap-[20px] items-center">
          <NavLink className="text-[1.1rem] font-medium" to="/add">
            ADD
          </NavLink>
          <NavLink className="text-[1.1rem] font-medium" to="/bookmarks">
            VIEW BOOKMARKS
          </NavLink>
        </ul>

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
      </div>
    </nav>
  );
};

export default Navbar;
