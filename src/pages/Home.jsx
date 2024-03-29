import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Home = () => {
  return (
    <div className="home mb-[50px] w-full px-[50px] overflow-hidden flex gap-[20px]">
      <div>
        <img src={img1} alt="Library" />
      </div>
      <div>
        <img src={img3} alt="Library" />
        <p>Add Different Categories</p>
        <p>Safe And Secure</p>
        <p>Easy Access</p>
        <p>Access Anywhere</p>
        <p>User-Friendly Interface</p>
      </div>
      <div>
        <img src={img2} alt="Library" />
      </div>
    </div>
  );
};

export default Home;
