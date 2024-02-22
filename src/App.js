//import Navbar component
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section id="Homepage">
        <Navbar />
        <img
          src="https://jankrepl.github.io/assets/images/symbolic_regression/main_files/cute-dog-transparent-background.png"
          alt="cute dog"
        />
      </section>
      <section id="About">Parallax</section>
      <section>Summary</section>
      <section id="Stories">Parallax</section>
      <section>Example1</section>
      <section>Example2</section>
      <section>Example3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
