import { useEffect, useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Home = () => {
  //To handle hero page's images loading
  const [loadedCount, setLoadedCount] = useState(0);
  const [showHomePage, setShowHomePage] = useState(false);

  const handleImageLoaded = () => {
    setLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    loadedCount > 2 ? setShowHomePage(true) : setShowHomePage(false);
  }, [loadedCount]);

  return (
    <div className="home relative min-h-[100vh] mt-[20px] mb-[50px] w-full px-[20px] xmd:px-[50px] overflow-hidden">
      {loadedCount < 3 && (
        <div className="absolute top-0 left-0 bg-white h-full w-full flex justify-center pt-[40px]">
          <div className="h-[60px] w-[60px] rounded-full animate-spin border-t-[3px] border-blue-600" />
        </div>
      )}

      <div className="flex flex-col xl:flex-row gap-[20px]">
        <div className="hidden xl:block">
          <img src={img1} onLoad={handleImageLoaded} alt="Library" />
        </div>
        <div>
          <img src={img3} onLoad={handleImageLoaded} alt="Library" />
          <p>Add Different Categories</p>
          <p>Safe And Secure</p>
          <p>Easy Access</p>
          <p>Access Anywhere</p>
          <p>User-Friendly Interface</p>
        </div>
        <div className="hidden xl:block">
          <img src={img2} onLoad={handleImageLoaded} alt="Library" />
        </div>
      </div>
    </div>
  );
};

export default Home;
