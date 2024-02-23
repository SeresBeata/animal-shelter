//import child components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>
      <section>Summary</section>
      <section id="Stories">
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
