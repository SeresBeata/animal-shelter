//create and export child component for mobile version
const AboutMobile = () => {
  return (
    <div className="about mobile-version">
      <div className="about-text--container">
        <p>
          Focus on helping animals in need! <br /> Adopt a furry Friend!
        </p>
        <hr />
      </div>
      <div className="about-title--container">
        <div className="about-title">
          <img
            src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="little kittens"
          />
          <h1>
            <b whileHover={{ color: "orange" }}>Unique </b>
            Friends
          </h1>
        </div>
        <div className="about-title">
          <h1>
            <b whileHover={{ color: "orange" }}>For Your </b>
            Family
          </h1>
          <button>WHAT TO DO?</button>
        </div>
      </div>
      <div className="about-list--container">
        <div
          className="about-list--box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Adopt a Doggie!</h2>
          <p>
            A dog provides unconditional love and support. They are "man's best
            friend".
          </p>
          <button>Go</button>
        </div>
        <div
          className="about-list--box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Adopt a Kitty!</h2>
          <p>
            Cats enrich our lives! They give us comfort, companionship and
            purpose.
          </p>
          <button>Go</button>
        </div>
        <div
          className="about-list--box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Adopt a Bunny!</h2>
          <p>
            Bunnies make wonderful companions. They will make you smile when
            you're down!
          </p>
          <button>Go</button>
        </div>
        <div
          className="about-list--box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Adopt a Parrot!</h2>
          <p>
            They are intelligent, problem-solving, funny and caring cuddle
            friends!
          </p>
          <button>Go</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;
