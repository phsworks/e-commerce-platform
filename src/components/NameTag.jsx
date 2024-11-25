import "./NameTag.css";
import nameBag from "../assets/namebag.png";

const NameTag = () => {
  return (
    <>
      <div className="step3">
        <h4>Add personalized text</h4>
        <p>3/3</p>
      </div>
      <div className="nametag">
        <img src={nameBag} alt="name-bag" />
        <p></p>
        <form className="name-form">
          <input className="input" type="text" />
          <span className="price-check">
            <input className="check" type="checkbox" />
            <p>+ € 40, 00</p>
          </span>
        </form>

        <button className="product-overview">PRODUCT OVERVIEW</button>
      </div>
    </>
  );
};

export default NameTag;
