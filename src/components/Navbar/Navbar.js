//import from framer-motion
import { motion } from "framer-motion";

//import Sidebar child component
import Sidebar from "../Sidebar/Sidebar";

import "./Navbar.css";

//create and export Navbar child component
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar: Start */}
      <Sidebar />
      {/* End: Sidebar */}
      <div className="navbar-wrapper">
        {/* Brand Logo: Start */}
        <motion.span
          className="navbar-brand"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Animal Shelter
        </motion.span>
        {/* End: Brand Logo */}
        {/* Images for Links: Start */}
        <motion.div
          className="navbar-social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#">
            <img
              src="https://github.com/safak/animated-portfolio/blob/completed/public/facebook.png?raw=true"
              alt="facebook logo"
            />
          </a>
          <a href="#">
            <img
              src="https://github.com/safak/animated-portfolio/blob/completed/public/instagram.png?raw=true"
              alt="instagram logo"
            />
          </a>
          <a href="#">
            <img
              style={{ borderRadius: "5px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkpXur32n254m8eKzRr5PkftScvwqHQgWzg&usqp=CAU"
              alt="web logo"
            />
          </a>
        </motion.div>
        {/* End: Images for Links */}
      </div>
    </div>
  );
};

export default Navbar;
