import "./Bags.css"


const Bags = ({bag}) => {

  return (
    <div className="bag-img-div">
      {/* show name of bag */}
      <img src={bag} alt={bag} className="bag-img" />
    </div>
  );
};

export default Bags;
