import "./Bags.css";


const Bags = ({ bag, selectBag }) => {
 
  return (
    <button className="bag-btn" onClick={selectBag}>
      <div className={`bag-img-div ${bag.toLowerCase()}`}>
        <p>{bag}</p>
      </div>
    </button>
  );
};

export default Bags;
