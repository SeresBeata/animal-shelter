import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./Parallax.scss";

//create and export Parallax child component
const Parallax = ({ type }) => {
  //use useRef Hook
  const ref = useRef();

  //use useScroll Hook for Y axis progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  //use useTransform Hook to create different transitions
  //map values - so using these values we can add animation
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    //Use ternary operator for different bg-color according to the "type" of the component
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      {/* Use ternary operator for different text according to the "type" of the component */}
      <motion.h1 style={{ y: yText }}>
        {type === "about" ? "Help us!" : "What to do?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "about"
              ? "https://github.com/safak/animated-portfolio/blob/completed/public/planets.png?raw=true"
              : "https://github.com/safak/animated-portfolio/blob/starter/public/sun.png?raw=true"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
