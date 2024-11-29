import "./ColorsContainer.css";
import Colors from "./Colors";

const ColorsContainer = ({colorsSelectionArray, setColorsSelectionArray}) => {

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

  const toggleColor = (color) => {
    if (colorsSelectionArray.includes(color)) {
      const newArray = colorsSelectionArray.filter((item) => item !== color);
      setColorsSelectionArray(newArray);
    } else if (colorsSelectionArray.length < 3) {
      const newArray = [...colorsSelectionArray, color];
      setColorsSelectionArray(newArray);

    }
  };
  
  return (
    <section>
      <div className="header step2">
        <h2>Choose three colors</h2>
      </div>
      <div className="colorscontainer">
        {colorsArray.map((color, index) => (
          <Colors
            key={index}
            color={color}
            isSelected={colorsSelectionArray.includes(color)}
            toggleColor={toggleColor}
          />
        ))}
      </div>
    </section>
  );
};
export default ColorsContainer;
