import Bags from "./Bags.jsx";
import "./BagsContainer.css";

const BagsContainer = () => {
  const bagsNamesArray = [
    "batlo",
    "culita",
    "jill",
    "mini-jill",
    "plutito",
    "tate-petite",
    "tatito",
    "tatu",
  ];
  return (
    <>
      <section className="bags-container">
        <div className="header-first-section">
          <h2>Choose a shape</h2>
          <div>progress bar</div>
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
