import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="font-bold text-center block leading-none">
      <span className="text-[11rem]">BOOKMARKER</span>
    </Link>
  );
};

export default Logo;
