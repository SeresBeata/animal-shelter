import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import "./StroriesAnimal.css";

//create array
const items = [
  {
    id: 1,
    title: "Adopt a Doggie!",
    img: "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The World Health Organisation estimates there are nearly 200 million stray dogs worldwide. A dog provides unconditional love and support, which is especially important during tough times. Though people may think we're taking care of our dogs, it's mutual. Dogs also take care of us!",
  },
  {
    id: 2,
    title: "Adopt a Kitty!",
    img: "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      " According to the World Health Organisation there is an even higher number of stray cats than stray dogs. Cats enrich our lives! They give us comfort, companionship, joy and a sense of purpose. They improve our health and wellbeing, give us a reason to get out of bed each day.",
  },
  {
    id: 3,
    title: "Adopt a Bunny!",
    img: "https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Four out of five rabbits bought as pets for Easter are abandoned or die within a year. Bunnies make wonderful companions. They will make you smile when you're down, they will listen when you need to talk, and they'll snuggle you when you need a friend! Perfect little fur-balls",
  },
  {
    id: 4,
    title: "Adopt a Parrot!",
    img: "https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Cockatoos are the most rehomed and abandoned birds in the pet trade. They are intelligent, problem-solving, loving cuddle bugs that are more like a 2-year-old human than a bird. Parrots are beautiful and rewarding pets. They might not be furry, but are unique and funny friends.",
  },
];

//create Single component: return section
const Single = ({ item }) => {
  return (
    <section>
      <div>{item.title}</div>
      <img style={{ height: "500px" }} src={item.img} />
      <div>{item.description}</div>
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
