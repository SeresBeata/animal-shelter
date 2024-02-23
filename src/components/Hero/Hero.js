//create and export Hero child component
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-container--text">
          <h2>ANIMAL LOVE</h2>
          <h1>Let's protect animals!</h1>
          <div className="hero-btns">
            <button>See information about animals</button>
            <button>Contact Shelter</button>
          </div>
          <img
            src="https://github.com/safak/animated-portfolio/blob/completed/public/scroll.png?raw=true"
            alt="image about scrolling"
          />
        </div>
      </div>
      <div className="hero-slidingtext">Animal Love Protect Care</div>
      <div className="hero-container--img">
        <img
          style={{
            marginRight: "100px",
            height: "900px",
            borderRadius: "20px",
          }}
          src="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg"
          alt="cute dog"
        />
      </div>
    </div>
  );
};

export default Hero;
