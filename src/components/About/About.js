import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./About.css";

//create const for element-animation
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

//create and export About child component
const About = () => {
  //use useRef Hook  listen to target element
  const ref = useRef();

  //use useInView Hook
  //pass the target element, that is being listened
  //give margin, and by scrolling, this margin triggers the animation
  const isInView = useInView(ref, { margin: "-100px" });

  return (
   
  );
};

export default About;
