import { useRef } from "react";
import BuySection from  "../components/BuySection";
import DetailsSection from "../components/DetailsSection";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

import { motion, useScroll, useSpring } from "framer-motion";
const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
   const sectionRef = useRef(null);
   const roadMapRef = useRef(null);
   const contactRef = useRef(null)
   const scrollToSection = (button) => {
    if(button === "about"){
     const yOffset = -50; 
     const y =
       sectionRef.current.getBoundingClientRect().top +
       window.pageYOffset +
       yOffset;
     window.scrollTo({ top: y, behavior: "smooth" });
       
    }else if(button === "roadmap"){
        const yOffset = -300; 
        const y =
          roadMapRef.current.getBoundingClientRect().top +
          window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
       
    }else if(button === "contact"){
        const yOffset = 150;
        const y =
          contactRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" }); 
    }
   };
  return (
    <>
    
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <HeroSection scroll={scrollToSection} />
      <DetailsSection sectionRef={sectionRef} />
      <BuySection roadMapRef={roadMapRef} />
      <FooterSection contactRef={contactRef} />
    </>
  );
};
export default HomePage;
