import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-[20px] border-t border-t-black">
      <p className="text-center text-[1.2rem] font-medium">
        Created with ❤️ by{" "}
        <a
          className="text-[blue]"
          href="https://devbasit.vercel.app/"
          target="blank"
        >
          Basit.js
        </a>
      </p>
    </footer>
  );
};

export default Footer;
