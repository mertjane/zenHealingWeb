import { motion } from "framer-motion";
import Hero from "../components/Hero";
import QuickInfo from "../components/QuickInfo";
import AlbumSection from "../components/AlbumSection";
import Group from "../components/Group";
import Lotus from "../components/Lotus";
import Reviews from "../components/Reviews";
import { StaggerAnimation, StaggerItem } from "../components/ScrollFadeIn";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero - immediate load */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      {/* Staggered section animations */}
      <StaggerAnimation staggerDelay={0.3} childDelay={0.2}>
        <StaggerItem>
          <QuickInfo />
        </StaggerItem>

        <StaggerItem>
          <AlbumSection />
        </StaggerItem>

        <StaggerItem>
          <Lotus />
        </StaggerItem>

        <StaggerItem>
          <Reviews />
        </StaggerItem>

        <StaggerItem>
          <Group />
        </StaggerItem>
      </StaggerAnimation>
    </motion.div>
  );
};

export default HomePage;
