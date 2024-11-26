import "./Bags.css";

const Bags = ({ bag }) => {

  // const selectBag = () =>{
  //   const bagSelected = document.querySelector(`.bag-img-div ${bag.toLowerCase()}`)
  //   console.log(bagSelected)
  //   bagSelected.classList.add("new-class")

  // }

  return (
    <div className={`bag-img-div ${bag.toLowerCase()}`}>
      <p>{bag}</p>
      <button className="bag-btn" onClick={console.log("click")}></button>
    </div>
  );
};

export default Bags;
