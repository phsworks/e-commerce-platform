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

/* this component contains classnames but I don't see any import of the css file
To see where the styles are I have to search for the classnames in vscode search bar
maybe you can add the import of the css file here, add a comment or create a new file 
for the styles of this component.

*/

export default Colors;
