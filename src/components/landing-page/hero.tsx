import { Button } from "../ui/button";
import img from "../../assets/img1.jpg";

const Hero = () => {
  return (
    <div className="w-full  bg-[#150851] px-[240px] py-8">
      <h1 className="text-white text-justify text-6xl pt-10 font-semibold">
        Revitalize Your Garden with Expert Plant Care and Disease Solutions
      </h1>
      <div className="flex mt-10 gap-x-4">
        <Button
          onClick={() => {
            window.location.href = "http://localhost:7038/";
          }}
        >
          Get Started
        </Button>
        <a href="/about" className="text-white mt-2 text-center">
          Learn more
        </a>
      </div>
      <img src={img} className="my-6 w-full object-cover h-[600px]" alt="" />
    </div>
  );
};
export default Hero;
