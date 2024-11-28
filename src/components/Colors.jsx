import icon from "../assets/mietis-icon.png";
const Colors = ({ color, isSelected, toggleColor }) => {
  return (
    <button onClick={() => toggleColor(color)} className="color-button">
      <div className={color}>
        {isSelected && (
          <img src={icon} alt="Favicon" className="selected-color" />
        )}
      </div>
    </button>
  );
};
export default Colors;
