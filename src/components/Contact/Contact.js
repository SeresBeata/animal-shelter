import { motion } from "framer-motion";
import "./Contact.scss";

//create const for animation
const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

//create and export Contact child component
const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="contact-container--text" variants={variants}>
        <motion.h1 variants={variants}>Contact a shelter</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>info@animalshelter@mail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span> Animal Shelter Ingolstadt </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+49 123 4567</span>
        </motion.div>
      </motion.div>
      <div className="contact-container--form">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
