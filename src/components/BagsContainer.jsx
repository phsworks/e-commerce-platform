import { useState } from "react";
import Bags from "./Bags.jsx";
import "./BagsContainer.css";

const BagsContainer = () => {

  // use a contextttttttt!: 
  
  const [selectedBag, setSelectedBag] = useState("");
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
