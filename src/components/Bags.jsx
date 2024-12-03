import "./Bags.css";

const Bags = ({ bag, setSelectedBag, selectedBag }) => {

  return (
    <button
      onClick={() => {
        setSelectedBag(bag);
      }}
      className="bag-btn"
    >
      {/* Nice use of the classnames with the ternary operator */}
      <div className={`bag-img-div ${bag.toLowerCase()} ${selectedBag == bag ? "selected" : ""}`}>
        <p>{bag}</p>
      </div>
    </button>
  );
};

export default Bags;


// + (selectedBag && " selected")