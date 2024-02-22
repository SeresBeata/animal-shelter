//create and export Links child component
const Links = () => {
  const items = ["Homepage", "About", "Stories", "Contact"];

  return (
    <div className="links">
      {/* use array.map() to to render a list of items */}
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
