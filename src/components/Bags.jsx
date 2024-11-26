import "./Bags.css";

const Bags = ({ bag }) => {
  return (
    <div className={`bag-img-div ${bag.toLowerCase()}`}>
      <p>{bag}</p>
      <button className="bag-btn"></button>
    </div>
  );
};

export default Bags;
