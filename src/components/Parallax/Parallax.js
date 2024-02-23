//create and export Parallax child component
const Parallax = ({ type }) => {
  return (
    //Use ternary operator for different bg-color according to the "type" of the component
    <div
      className="parallax"
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      {/* Use ternary operator for different text according to the "type" of the component */}
      <h1>{type === "about" ? "Help us!" : "What to do?"}</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
};

export default Parallax;
