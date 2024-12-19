import "./HomePage.css";

import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-div">
      <section className="homepage"></section>
      <NavLink to="/createbag">
        <button className="btn start-btn">LET'S GET STARTED</button>
      </NavLink>
    </div>
  );
};

export default HomePage;
