//import child components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import About from "./components/About/About";
import StoriesAnimal from "./components/StoriesAnimal/StoriesAnimal";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Help us!">
        <Parallax type="about" />
      </section>
      <section>
        <About />
      </section>
      <section id="What to do?">
        <Parallax type="stories" />
      </section>
      <StoriesAnimal />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
