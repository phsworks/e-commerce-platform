import "./HomePage.css";

import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="home">
      <div className="homepage">
      </div>
      <div className="start">
        <NavLink to="/createbag">
          <button className="btn">LET'S GET STARTED</button>
        </NavLink>
      </div>
    </section>
  );
};

export default HomePage;

