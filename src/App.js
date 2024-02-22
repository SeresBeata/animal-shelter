//import Navbar component
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Summary</section>
      <section>Parallax</section>
      <section>Example1</section>
      <section>Example2</section>
      <section>Example3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
