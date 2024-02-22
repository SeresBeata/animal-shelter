import "./Navbar.css";

//create and export Navbar child component
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar: Start */}
      {/* End: Sidebar */}
      <div className="navbar-wrapper">
        {/* Brand Logo: Start */}
        <span className="navbar-brand">Animal Shelter</span>
        {/* End: Brand Logo */}
        {/* Images for Links: Start */}
        <div className="navbar-social">
          <a href="#">
            <img
              src="https://github.com/safak/animated-portfolio/blob/completed/public/facebook.png?raw=true"
              alt="facebook logo"
            />
          </a>
          <a href="#">
            <img
              src="https://github.com/safak/animated-portfolio/blob/completed/public/instagram.png?raw=true"
              alt="instagram logo"
            />
          </a>
          <a href="#">
            <img
              style={{ borderRadius: "5px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkpXur32n254m8eKzRr5PkftScvwqHQgWzg&usqp=CAU"
              alt="web logo"
            />
          </a>
        </div>
        {/* End: Images for Links */}
      </div>
    </div>
  );
};

export default Navbar;
