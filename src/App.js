//import child components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import About from "./components/About/About";

import "./App.css";

const App = () => {
  return (
    <div className="App">
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
      <section>Example1</section>
      <section>Example2</section>
      <section>Example3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
