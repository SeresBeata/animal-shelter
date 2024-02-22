import { useState } from "react";
import { motion } from "framer-motion";

//import child components
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import Links from "./Links/Links";

import "./Sidebar.css";

//create const for Sidebar btn click animation
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

//create and export Sidebar child component
const Sidebar = () => {
  //create state variable with initial state "false"
  const [open, setOpen] = useState(false);

  return (
    //use ternary operator:
    //- if "open" state variable is truthy, then the Sidebar is "open"
    //- if "open" state variable is falsy, then the Sidebar is "closed"
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      {/* Use the created "variants" const */}
      <motion.div className="sidebar-bg" variants={variants}>
        <Links />
      </motion.div>
      {/* pass function prop setOpen */}
      <ToggleBtn setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
