//create and export About child component
const About = () => {
  return (
    <div className="about">
      <div className="about-text--container">
        <p>
          Focus on helping animals in need! <br /> Adopt a furry Friend!
        </p>
      </div>
      <div className="about-title--container">
        <div className="about-title">
          <img
            style={{ height: "100px" }}
            src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="little kittens"
          />
          <h1>
            <b>Unique</b>Friends
          </h1>
        </div>
        <div className="about-title">
          <h1>
            <b>For Your</b>Family
          </h1>
          <button>WHAT TO DO?</button>
        </div>
      </div>
      <div className="about-list--container">
        <div className="about-list--box">
          <h2>Adopt a Doggie!</h2>
          <p>
            The World Health Organisation estimates there are nearly 200 million
            stray dogs worldwide. A dog provides unconditional love and support,
            which is especially important during tough times. Though people may
            think we're taking care of our dogs, it's mutual. Dogs also take
            care of us!
          </p>
          <button>Go</button>
        </div>
        <div className="about-list--box">
          <h2>Adopt a Kitty!</h2>
          <p>
            According to the World Health Organisation there is an even higher
            number of stray cats than stray dogs. Cats enrich our lives! They
            give us comfort, companionship, joy and a sense of purpose. They
            improve our health and wellbeing, give us a reason to get out of bed
            each day.
          </p>
          <button>Go</button>
        </div>
        <div className="about-list--box">
          <h2>Adopt a Bunny!</h2>
          <p>
            Four out of five rabbits bought as pets for Easter are abandoned or
            die within a year. Bunnies make wonderful companions. They will make
            you smile when you're down, they will listen when you need to talk,
            and they'll snuggle you when you need a friend!
          </p>
          <button>Go</button>
        </div>
        <div className="about-list--box">
          <h2>Adopt a Parrot!</h2>
          <p>
            Cockatoos are the most rehomed and abandoned bird in the pet trade.
            They are intelligent, problem-solving, loving cuddle bugs that are
            more like a 2-year-old human than a bird. They might not be furry,
            but are unique and funny friends.
          </p>
          <button>Go</button>
        </div>
      </div>
    </div>
  );
};

export default About;
