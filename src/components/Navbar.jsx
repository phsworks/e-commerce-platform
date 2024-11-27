import logo from '../assets/Logo Mietis.png'
import search from '../assets/Search icon.svg'
import cart from '../assets/cart icon.svg'
import heart from '../assets/hearticon 1.svg'
import hamburger from '../assets/hamburger.png'
import './Navbar.css'


const Navbar = () => {
  return (
    <section>
      <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className='icons'>
            <li className='search-icon'><img src={search} alt="search-icon" /></li>
            <li><img src={cart} alt="cart-icon" /></li>
            <li><img src={heart} alt="heart-icon" /></li>
            <li><img src={hamburger} alt="hamburger-icon" /></li>
          </ul>

      </div>


    </section>
  )
}

export default Navbar