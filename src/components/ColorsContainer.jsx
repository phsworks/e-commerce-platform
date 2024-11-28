import "./ColorsContainer.css";
import Colors from "./Colors";
import { useState } from "react";

const ColorsContainer = () => {
  const [colorSelection, setColorSelection] = useState("");
  const [colorsSelectionArray, setColorsSelectionArray] = useState([]);


// fix this
  function addColor(){
    if (colorsSelectionArray.length >= 0 && colorsSelectionArray.length <= 4){
      colorsSelectionArray.push(colorSelection);
      console.log(colorsSelectionArray)
    }

  }

  const colorsArray = [
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    "color8",
    "color9",
    "color10",
    "color11",
    "color12",
  ];

  return (
    <section>
      <div className="header step2">
        <h2>Choose three colors</h2>
      </div>
      <div className="colorscontainer">
        {colorsArray.map((color, index) => {
          return <Colors key={index} color={color} colorSelection={colorSelection} setColorSelection={setColorSelection} addColor={addColor}/>;
        })}
      </div>
    </section>
  );
};

export default ColorsContainer;
