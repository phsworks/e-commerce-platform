import "./HomePage.css";

import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="homepage"></section>
      <NavLink to="/createbag">
        <button className="btn start-btn">LET'S GET STARTED</button>
      </NavLink>
    </>
  );
};

export default HomePage;
