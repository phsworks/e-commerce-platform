import "./DetailsPage.css";
import { useNavigate } from "react-router-dom";

const DetailsPage = ({  selectedBag, isDisabled , colorsSelectionArray }) => {
  const navigate = useNavigate();

  return (
    <section className="details-page">
      <div className="header">
        <h2>Product Overview</h2>
      </div>
      <div className="details-bag-container">
        <div className={`bag-img ${selectedBag.toLowerCase()}`}></div>

        {/*
        // Maybe you can just add the image as an img tag instead of
        a div. 
        We use background-image in CSS when we want to add an image
        as a background of an element, but if the image is the main
        content of the element, we can use an img tag.
        Then you can probably avoid having a different class for each bag.
        EXAMPLE:
         <img
          className="bag-img"
          src={`/assets/${selectedBag.toLowerCase()}-bag.png`}
          alt={`${selectedBag} bag`}
        />
        */ }
        <p>Prefered colors</p>
        <div className="colors-detail-container">
          {/* ONE SPAN PER CHOSEN COLOR (mapping)*/}

          {colorsSelectionArray.map((selectedcolor, index) => {
            return <span key={index} className={`color-spot ${selectedcolor}`}></span>
          })}

        </div>
        <div className="price-div">
          <div className="line">
            <p>Tatu by You </p>
            <small>+ € 580,00</small>
          </div>
          {!isDisabled && (
            <div className="line">
              <p>Keychain</p>
              <small>+ € 40,00</small>
            </div>
          )}
        </div>
      </div>
      <div className="discount-section">
        <input
          type="text"
          name="discount-input"
          className="input discount-input"
          placeholder="Discount code or Gift card"
        />
        <button onClick={()=>{alert("Discount not found")}}className="discount-btn">Apply</button>
      </div>
      <div className="final-price-div">
        <div id="total-text">
          <p>Total</p>
          <strong>EUR € {!isDisabled ? "620,00" : "580,00"}</strong>
        </div>
        <small>Including € 109,33 in taxes</small>
      </div>
      <div className="btns-div">
        <button className="btn cart" onClick={()=>{alert("Thank you!")}}>ADD TO CART</button>
        <button
          className="btn back"
          onClick={() => {
            navigate(-1);
          }}
        >
          BACK
        </button>
      </div>
    </section>
  );
};

export default DetailsPage;
