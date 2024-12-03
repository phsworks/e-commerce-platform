
import Bags from "./Bags.jsx";
import "./BagsContainer.css";

const BagsContainer = ({selectedBag, setSelectedBag}) => {

  // use a contextttttttt!: hahaha nice
  
  

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

  return (
    <>
      <section className="bags-container">
        <div className="header step1">
          <h2>Choose a shape</h2>
        </div>
        <div className="bags-btn-container">
          {bagsNamesArray.map((bag, index) => {
            return <Bags key={index} bag={bag} selectedBag={selectedBag} setSelectedBag={setSelectedBag}/>;
          })}
        </div>
      </section>
    </>
  );
};

export default BagsContainer;
