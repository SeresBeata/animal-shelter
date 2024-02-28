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
    <>
      <motion.div
        className="about"
        variants={variants}
        initial="initial"
        // animate="animate"
        ref={ref}
        //if it is in view, the animation will be triggered
        //animate={isInView && "animate"}
        whileInView="animate"
      >
        <motion.div className="about-text--container" variants={variants}>
          <p>
            Focus on helping animals in need! <br /> Adopt a furry Friend!
          </p>
          <hr />
        </motion.div>
        <motion.div className="about-title--container" variants={variants}>
          <div className="about-title">
            <img
              src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="little kittens"
            />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>
              Friends
            </h1>
          </div>
          <div className="about-title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
              Family
            </h1>
            <button>WHAT TO DO?</button>
          </div>
        </motion.div>
        <motion.div className="about-list--container" variants={variants}>
          <motion.div
            className="about-list--box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Adopt a Doggie!</h2>
            <p>
              A dog provides unconditional love and support. They are "man's
              best friend".
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="about-list--box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Adopt a Kitty!</h2>
            <p>
              Cats enrich our lives! They give us comfort, companionship and
              purpose.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="about-list--box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Adopt a Bunny!</h2>
            <p>
              Bunnies make wonderful companions. They will make you smile when
              you're down!
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="about-list--box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Adopt a Parrot!</h2>
            <p>
              They are intelligent, problem-solving, funny and caring cuddle
              friends!
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
