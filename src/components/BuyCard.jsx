import logo from  "../assets/logo.svg";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const BuyCard = ({ header, body, img,direction }) => {
  

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

 
  return (
    <div
     data-aos={direction}
      className="bg-white  flex items-center flex-col  pb-24 pt-12 lg:w-[20%] md:w-[40%] sm:1/2 rounded-3xl card relative"
    
    >
      <img className="w-10 h-10 mb-12" src={img} alt="" />
      <h1 className="font-bold text-xl mb-4">{header}</h1>
      <p className="text-gray-600 text-sm text-center w-[60%] mx-auto">
        {body}
      </p>
      <img className="absolute -bottom-12" src={logo} alt="" />
    </div>
  );
};
export default BuyCard;
