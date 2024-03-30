import React from "react";
import { Link } from "react-router-dom";
import title from "../assets/title.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="font-bold mt-[15px] md:mt-0 px-[10px] xmd:px-[30px] text-center block leading-none"
    >
      {/* <span className="text-[9rem] xl:text-[11rem] tracking-[1.6px]">
        BOOKMARKER
      </span> */}
      <img className="w-full" src={title} alt="logo" />
    </Link>
  );
};

export default Logo;
