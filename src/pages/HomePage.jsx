import "./HomePage.css";

import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/*
      Same as in the details page, you can use an img tag instead of a div
      because the image is the main content of the element, not a background 
      of an element.
      */}
      <section className="homepage"></section>
      <NavLink to="/createbag">
        <button className="btn start-btn">LET'S GET STARTED</button>
      </NavLink>
    </>
  );
};

export default HomePage;
