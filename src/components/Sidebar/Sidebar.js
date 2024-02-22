//import child components
import ToggleBtn from "./ToggleBtn/ToggleBtn";
//create and export Sidebar child component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-bg"></div>
      <ToggleBtn />
    </div>
  );
};

export default Sidebar;
