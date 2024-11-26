import "./Bags.css";

const Bags = ({ bag }) => {
  // use state for selectedBag

  const selectBag = () => {
    const bagSelected = document.querySelector(`.${bag.toLowerCase()}`);
    bagSelected.classList.add("selected");
    console.log("Bag selected")
    // remove event listener unless unselecting the bag selected
  };

  return (
    <button className="bag-btn" onClick={selectBag}>
      <div className={`bag-img-div ${bag.toLowerCase()}`}>
        <p>{bag}</p>
      </div>
    </button>
  );
};

export default Bags;
