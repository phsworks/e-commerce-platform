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
  return (
    <>
      <section className="bags-container">
        <div className="header-first-section">
          <h2>Choose a shape</h2>
          <div>HERE GOES PROGRESSBAR</div>
        </div>
        <div className="bags-btn-container">
          {bagsNamesArray.map((bag, index) => {
            return <Bags key={index} bag={bag} />;
          })}
        </div>
      </section>
    </>
  );
};

export default BagsContainer;
