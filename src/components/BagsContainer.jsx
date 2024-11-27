import Bags from "./Bags.jsx";
import "./BagsContainer.css";

const BagsContainer = () => {
  const bagsNamesArray = [
    "Batlo",
    "Culita",
    "Jill",
    "Mini-Jill",
    "Plutito",
    "Tate-Petite",
    "Tatito",
    "Tatu",
  ];


  function selectBag() {

   const bagSelected = document.querySelector(".bag-img-div");
   bagSelected.classList.toggle("selected")
   console.log(bagSelected)
   
  }


  return (
    <>
      <section className="bags-container">
        <div className="header-first-section">
          <h2>Choose a shape</h2>
          <div>HERE GOES PROGRESSBAR</div>
        </div>
        <div className="bags-btn-container">
          {bagsNamesArray.map((bag, index) => {
            return <Bags key={index} bag={bag} selectBag={selectBag} />;
          })}
        </div>
      </section>
    </>
  );
};

export default BagsContainer;
