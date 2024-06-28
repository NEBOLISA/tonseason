import logo from "../assets/logo.svg"
import cat from "../assets/cat.svg"
import heart from "../assets/heart.svg";
import clock from "../assets/clock.svg";
import thumbs from "../assets/thumbs.svg";
import tiles from "../assets/tiles.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Menu from "./Menu";
import { useState } from "react";
import CountUp from "react-countup";
const HeroSection = () => {
    const [openMenu, setOpenMenu] = useState(false);
   
  return (
    <div className=" hero font-sans  bg-no-repeat bg-center pb-8">
      <div className="p-3 ">
        <div className="flex items-center justify-between ">
          <motion.img
            className="md:flex  hidden"
            src={logo}
            alt="logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ width: "80px", height: "80px" }}
          />
          {/* <img src={logo} alt="logo" /> */}
          <ul className=" md:flex  hidden items-center gap-4">
            <li className="text-white cursor-pointer font-light">About Us</li>
            <li className="text-white cursor-pointer font-light">Tokenomics</li>
            <li className="text-white cursor-pointer font-light">Roadmap</li>
            <li className="text-white cursor-pointer font-light">Contact Us</li>
          </ul>
          <button className="bg-white lg:static absolute top-8 left-1/2 -translate-x-1/2 text-[#071021] font-bold px-5 py-[3px] rounded-md">
            BUY $TSE
          </button>
        </div>
        <GiHamburgerMenu
          className={` md:hidden block text-white h-8 w-8`}
          onClick={() => setOpenMenu((prev) => !prev)}
        />
        <div className="flex flex-col items-center justify-center text-4xl md:text-6xl 2xl:text-7xl mt-20">
          <h1 className=" text-center tracking-[.3em] piedra-regular text-white h-12">
            <Typewriter
              words={["TONSEASON", "DON'T MISS OUT!", "TONSEASON"]}
              loop={1}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <motion.img
            src={cat}
            alt="cat"
            animate={{ scale: [1, 0.95, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "200px", height: "200px" }}
          />
          {/* <img className="" src={cat} alt="cat" /> */}
        </div>
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="flex mt-3 items-center justify-center lg:justify-between lg:w-[70%] w-[100%] lg:flex-nowrap flex-wrap gap-y-8  lg:gap-0 mx-auto ">
          <div className=" flex w-1/3 lg:w-1/2 justify-between ">
            <div className="flex flex-col items-center justify-center gap-1 lg:gap-3 ml-[50%] -translate-x-1/2 text-center">
              <img src={heart} alt="heart" />
              <h3 className="text-[#FFD43B] font-bold flex items-center justify-center gap-1">
                <CountUp end={300} duration={10} />+
              </h3>
              <h3 className="font-thin text-sm text-white">HOLDERS</h3>
            </div>
            <div className="h-[150px] w-[.5px] bg-gray-600 hidden lg:block"></div>
          </div>
          <div className="flex w-1/3 lg:w-1/2 justify-between">
            <div className="flex flex-col items-center justify-center gap-1 lg:gap-3 ml-[50%] -translate-x-1/2 text-center">
              <img src={clock} alt="clock" />
              <h3 className="text-[#FFD43B] font-bold">
                <CountUp end={268} duration={10} />
              </h3>
              <h3 className="font-thin text-sm text-white">MEMBERS</h3>
            </div>
            <div className="h-[150px] w-[.5px] bg-gray-600 hidden lg:block"></div>
          </div>
          <div className="flex w-1/3 lg:w-1/2 justify-between ">
            <div className="flex flex-col items-center justify-center gap-1 lg:gap-3 ml-[50%] -translate-x-1/2 text-center">
              <img src={thumbs} alt="thumbs" />
              <h3 className="text-[#FFD43B] font-bold">
                <CountUp end={322} duration={10} />
                M+
              </h3>
              <h3 className="font-thin text-sm text-white">MARKET SUPPLY</h3>
            </div>
            <div className="h-[150px] w-[.5px] bg-gray-600 hidden lg:block"></div>
          </div>
          <div className="flex w-1/3 lg:w-1/2 justify-between ">
            <div className="flex flex-col items-center justify-center gap-1 lg:gap-3 ml-[50%] -translate-x-1/2 text-center ">
              <img src={tiles} alt="tiles" />
              <h3 className="text-[#FFD43B] font-bold">CONTINUED</h3>
              <h3 className="font-thin text-sm text-white ">FOR EVERYONE</h3>
            </div>
            <div className="h-[130px] w-[3px] bg-transparent hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection