import React from "react";
import bg from "../assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute left-[-50%] bottom-[-2px] rounded-full h-[200vh] w-[200vh] bg-white">
        <div className="relative h-full w-full ">
          <div className="absolute left-[55%] top-[55%] text-black">
            <div className="">
              <h1 className="text-[3rem] font-semibold leading-[1.2]">
                Save Everything
              </h1>
              <h1 className="text-[3rem] font-semibold leading-[1.2]">
                Remember Nothing
              </h1>
            </div>
            <p className="mt-[20px] w-[60%]">
              Unleash the power of bookmarking with our intuitive online tool.
              Effortlessly save your favorite articles, websites, and resources
              with a simple click. Streamline your digital life and never lose
              track of valuable content again.
            </p>
            <button className="mt-[50px] bg-[chocolate] hover:bg-[tomato] px-[10px] py-[4px] text-white">
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-[red]">
        <img
          className="object-cover h-full w-full"
          src={bg}
          alt="hero background img"
        />
      </div>
    </div>
  );
};

export default Home;
