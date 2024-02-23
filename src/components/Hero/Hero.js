import { motion } from "framer-motion";
import "./Hero.css";

//create const for text animation
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.1,
    },
  },
};

//create and export Hero child component
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <motion.div
          className="hero-container--text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ANIMAL LOVE</motion.h2>
          <motion.h1 variants={textVariants}>Let's protect animals!</motion.h1>
          <motion.div variants={textVariants} className="hero-btns">
            <motion.button variants={textVariants}>
              See information about animals
            </motion.button>
            <motion.button variants={textVariants}>
              Contact Shelter
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="https://github.com/safak/animated-portfolio/blob/completed/public/scroll.png?raw=true"
            alt="image about scrolling"
          />
        </motion.div>
      </div>
      <div className="hero-slidingtext">Animal Love Protect Care</div>
      <div className="hero-container--img">
        <img
          style={{
            marginRight: "100px",
            height: "900px",
            borderRadius: "20px",
          }}
          src="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg"
          alt="cute dog"
        />
      </div>
    </div>
  );
};

export default Hero;
