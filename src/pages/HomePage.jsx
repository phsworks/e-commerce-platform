import { NavLink } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <NavLink to="/createbag">createbag</NavLink>
      <NavLink to="/detailspage">detailspage</NavLink>
      <NavLink to="/">Home</NavLink>

      <h1>Home</h1>

    </div>
  )
}

export default HomePage