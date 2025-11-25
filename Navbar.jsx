import Goolok_Final_Logo from '/Goolok_Final_Logo.png';
// import './App.css';
// import './Navbar.css'
import './combined.css'
import { FaHouseChimney } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';


function Navbar() {
  return (
    <>
      <div className='main'>
        <div className='nav-1-img'>
          <img src={Goolok_Final_Logo} className="second_image_sec" alt="logo" />
        </div>
        <div className='front-search-box'>
          <FaHouseChimney size={24} className="house-icon" />

            <p className='p'>Buy Property</p>
            <p className='p'>Sell Property</p>
            <p className='p'>Services</p>

        </div>
        <div className="search-box">
          <input className='search-input' type="text" placeholder="Search property lap..." />
          <FiSearch size={24} className="search-icon" />
        </div>
        <div className='last-navicon'>
          <FaRegBell size={24} className='last_1' />
          <FaRegHeart size={24} className='last_1' />

        </div>
        <div className='last-nav'>
          <button>Sign in</button>
        </div>
      </div>
    </>
  )
}

export default Navbar;
