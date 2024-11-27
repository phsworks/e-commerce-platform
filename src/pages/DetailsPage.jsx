import "./DetailsPage.css";

const DetailsPage = () => {
  return (
    <section className="details-page">
      <div className="details-header">
        <h2>Product Overview</h2>
      </div>
      <div className="details-bag-container">
        {/* THIS IMAGE SHOULD BE PASSED AS PROP */}
        <div className="last-details-container">
          <img src="../src/assets/batlo-bag.png" alt="" />
          <small>Prefered colors</small>
          <div className="colors-detail-container">
            {/* ONE SPAN PER CHOSEN COLOR (mapping)*/}
            <span className="color-spot"></span>
            <span className="color-spot"></span>
            <span className="color-spot"></span>
          </div>
        </div>
        <div className="price-div">
          <div className="line">
            <p>Tatu by You </p>
            <small>+ 580,00</small>
          </div>
          <div className="line">
            {/* this line below depends on the user */}
            <p>Text</p>
            <small>+40,00</small>
          </div>
        </div>
      </div>
      <div className="discount-section">
        <input
          type="text"
          name="discount-input"
          id="discount-input"
          placeholder="Discount code or Gift card"
        />
        <button className="discount-btn">Apply</button>
      </div>
      <div className="final-price-div">
        <div id="total-text">
          <p>Total</p>
          <p>EUR 620,00</p>
        </div>
        <small>Including 109,33 in taxes</small>
      </div>
      <div className="btns-div">
        <button className="btn cart">ADD TO CART</button>
        <button className="btn back">BACK</button>
      </div>
    </section>
  );
};

export default DetailsPage;
