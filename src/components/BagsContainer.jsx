import Bags from "./Bags.jsx";
import "./BagsContainer.css"
import batloBag from "../assets/batlo-bag.png";
import culitaBag from "../assets/culita-bag.png";
import jillBag from "../assets/jill-bag.png";
import miniJillBag from "../assets/mini-jill-bag.png";
import plutitoBag from "../assets/plutito-bag.png";
import tatePetitBag from "../assets/tate-petite-bag.png";
import tatitoBag from "../assets/tatito-bag.png";
import tatuBag from "../assets/tatu-bag.png";

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
      <div>BagsContainer</div>

      <Bags bag={batloBag} />
      <Bags bag={culitaBag} />
      <Bags bag={jillBag} />
      <Bags bag={miniJillBag} />
      <Bags bag={plutitoBag} />
      <Bags bag={tatePetitBag} />
      <Bags bag={tatitoBag} />
      <Bags bag={tatuBag} />

      {/* {
        bagsArray.map((bag, index)=>{
          return(
            <Bags key={index} bag={bag} batloBag={batloBag}/>
          )
        })
      } */}
    </>
  );
};

export default BagsContainer;
