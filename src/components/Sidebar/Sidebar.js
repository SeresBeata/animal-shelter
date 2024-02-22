//import child components
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import Links from "./Links/Links";

import "./Sidebar.css";
//create and export Sidebar child component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-bg">
        <Links />
      </div>
      <ToggleBtn />
    </div>
  );
};

export default Sidebar;
