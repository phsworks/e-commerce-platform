import "./HomePage.css";

import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
<<<<<<< HEAD
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
=======
    <div>
      <NavLink to="/createbag">createbag</NavLink>
      <NavLink to="/detailspage">detailspage</NavLink>
      <h1>Home</h1>

    </div>
  )
}

export default HomePage
>>>>>>> c6c1347b024f6d5a7bba460d831f9ed0a4a95bb9
