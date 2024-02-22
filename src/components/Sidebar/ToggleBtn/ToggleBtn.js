//create and export ToggleBtn child component
const ToggleBtn = ({ setOpen }) => {
  //use the extracted setOpen prop and call it in case of btn click event
  return <button onClick={() => setOpen((prev) => !prev)}> ToggleBtn</button>;
};

export default ToggleBtn;
