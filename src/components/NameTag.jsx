import "./NameTag.css";
import keychain from "../assets/MietisKeychain.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NameTag = ({ isDisabled, setIsDisabled }) => {
  const [name, setName] = useState("T.C.V.");

  const handleCheckChange = (e) => {
    setIsDisabled(!e.target.checked);
    if (isDisabled) {
      alert("Keychain added!");
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <section>
      <div className="header step3">
        <h2>Add a Keychain</h2>
      </div>
      <div className="nametag">
        <div className="name-input">
          <p>{name.substring(0, 6)}</p>
          <img src={keychain} alt="keychain" />
        </div>
        <form className="name-form">
          <label className="input-label">
            <input
              onChange={handleNameChange}
              className="input"
              type="text"
              value={name.substring(0, 6)}
              disabled={isDisabled}
              />
              {/*
                The substring method is modifying the original string in the state.
                This behavior is not recommended because it can lead to bugs.
                You can use the substring method in the handleChange function
                Or you can add an attribute maxLength="6" to the input field
              */}
          </label>
          <span className="price-check">
            <label className="checkbox">
              <input
                onChange={handleCheckChange}
                type="checkbox"
                checked={!isDisabled}
              />
            </label>
            <p>Add Keychain + € 40, 00</p>
          </span>
        </form>
        <NavLink to={"/detailspage"}>
          <button className="btn product-overview">PRODUCT OVERVIEW</button>
        </NavLink>
      </div>
    </section>
  );
};

export default NameTag;
