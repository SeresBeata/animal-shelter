import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";

//create and export Cursor child component
const Cursor = () => {
  //create state variable
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //use useEffect Hook
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    //add event listener
    window.addEventListener("mousemove", mouseMove);

    //remove event listener
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  //console.log(position);  -- to test if listening to mousemove is successful

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
};

export default Cursor;
