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
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <HeroSection />
      <DetailsSection />
      <BuySection />
      <FooterSection />
    </>
  );
};
export default HomePage;
