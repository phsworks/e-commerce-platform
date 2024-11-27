import "./NameTag.css";
import keychain from "../assets/MietisKeychain.png";
import { useState } from "react";

const NameTag = () => {

  const [name, setName] = useState("T.C.V.");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleCheckChange = (e) => {
    setIsDisabled(!e.target.checked);
  }


  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <section>
      <div className="step3">
        <h2>Add a Keychain</h2>
      </div>
      <div className="nametag">
        <div className="name-input">
          <p>{name.substring(0, 5)}</p>
          <img src={keychain} alt="keychain" />
        </div>
        <form className="name-form">
          <label className="input-label">
            <input
              onChange={handleNameChange}
              className="input"
              type="text"
              value={name.substring(0, 8)}
              disabled={isDisabled}
            />
          </label>
          <span className="price-check">
            <label class="checkbox">
              <input
                onChange={handleCheckChange}
                type="checkbox"
                checked={!isDisabled}
              />
            </label>
            <p>Add Keychain + € 40, 00</p>
          </span>
        </form>

        <button className="product-overview">PRODUCT OVERVIEW</button>
      </div>
    </section>
  );
};

export default NameTag;
