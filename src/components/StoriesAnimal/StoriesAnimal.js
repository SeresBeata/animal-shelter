import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import "./StroriesAnimal.css";

//create array
const items = [
  {
    id: 1,
    title: "Adopt a Doggie!",
    img: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The World Health Organisation estimates there are nearly 200 million stray dogs worldwide. A dog provides unconditional love and support, which is especially important during tough times. Though people may think we're taking care of our dogs, it's mutual. Dogs also take care of us!",
  },
  {
    id: 2,
    title: "Adopt a Kitty!",
    img: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      " According to the World Health Organisation there is an even higher number of stray cats than stray dogs. Cats enrich our lives! They give us comfort, companionship, joy and a sense of purpose. They improve our health and wellbeing, give us a reason to get out of bed each day.",
  },
  {
    id: 3,
    title: "Adopt a Bunny!",
    img: "https://images.pexels.com/photos/692071/pexels-photo-692071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Four out of five rabbits bought as pets for Easter are abandoned or die within a year. Bunnies make wonderful companions. They will make you smile when you're down, they will listen when you need to talk, and they'll snuggle you when you need a friend! Perfect little fur-balls",
  },
  {
    id: 4,
    title: "Adopt a Parrot!",
    img: "https://images.pexels.com/photos/4011414/pexels-photo-4011414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Cockatoos are the most rehomed and abandoned birds in the pet trade. They are intelligent, problem-solving, loving cuddle bugs that are more like a 2-year-old human than a bird. Parrots are beautiful and rewarding pets. They might not be furry, but are unique and funny friends.",
  },
];

//create Single component: return section
const Single = ({ item }) => {
  //use useRef hook, where the target is <div className="single-container--img">
  const ref = useRef();

  //use useScroll Hook for section animation
  //pass the target element, that is being listened
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  //use useTransform Hook
  //pass scrollYProgress
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="single-container">
        <div className="single-wrapper">
          <div className="single-container--img" ref={ref}>
            <img src={item.img} />
          </div>
          <motion.div className="single-container--text" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>Adopt a shelter Pet!</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

//create and export StoriesAnimal child component
const StoriesAnimal = () => {
  //use useRef Hook to listen to target element
  const ref = useRef();

  //use useScroll Hook for progress bar animation
  //pass the target element, that is being listened
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  //use useSpring Hook - it creates a spring type of transition
  //pass scrollYProgress and add transition options
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="stories" ref={ref}>
      <div className="progress">
        <h1>Why adopt an animal?</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progress-bar"
        ></motion.div>
      </div>
      {/* use array.map() to to render a list of items */}
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default StoriesAnimal;
