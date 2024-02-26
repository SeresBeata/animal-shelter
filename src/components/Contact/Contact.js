//create and export Contact child component
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container--text">
        <h1>Contact a shelter</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>info@animalshelter@mail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span> Animal Shelter Ingolstadt </span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+49 123 4567</span>
        </div>
      </div>
      <div className="contact-container--form">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
