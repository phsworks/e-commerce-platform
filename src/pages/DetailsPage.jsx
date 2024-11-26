const DetailsPage = () => {
  return (
    <section className="details-page">
      <div className="details-header">
        <h2>Product Overview</h2>
      </div>
      <div className="details-bag-container">
        {/* THIS IMAGE SHOULD BE PASSED AS PROP */}
        <img src="../src/assets/batlo-bag.png" alt="" />
        <p>Prefered colors</p>
        <div className="colors-detail-container">
          {/* ONE SPAN PER CHOSEN COLOR (mapping)*/}
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="price-div">
          <p>
            <span>Tatu by You</span> + 580,00
          </p>
          {/* this line below depends on the user */}
          <p>
            <span>Text</span> + 40,00
          </p>
        </div>
        <div className="discount-section">
          <input type="text" name="discount-input" id="discount-input" />
          <button className="discount-btn">Apply</button>
        </div>
        <div className="final-price-div">
          <div>
            <p>Total</p>
            <small>Including 109,33 in taxes</small>
          </div>
          <div>EUR 620,00</div>
        </div>
        <button className="btn cart">ADD TO CART</button>
        <button className="btn back">BACK</button>
      </div>

    </section>
  );
};

export default DetailsPage;
