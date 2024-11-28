import icon from "../assets/mietis-icon.png";

const Colors = ({ color, colorSelection, setColorSelection, addColor }) => {
  return (
    <button
      onClick={() => {
        setColorSelection(color);
        addColor()
      }}
      className="color-button"
    >
      <div className={color}>
        <img src={icon} alt="Favicon" className={colorSelection === color ? "selected-color" : ""} />
      </div>
    </button>
  );
};

export default Colors;
