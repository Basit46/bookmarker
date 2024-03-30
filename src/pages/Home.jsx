import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Home = () => {
  return (
    <div className="home mt-[20px] mb-[50px] w-full px-[20px] xmd:px-[50px] overflow-hidden flex flex-col xl:flex-row gap-[20px]">
      <div className="hidden xl:block">
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
      <div className="hidden xl:block">
        <img src={img2} alt="Library" />
      </div>
    </div>
  );
};

export default Home;
