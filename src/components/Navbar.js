import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import Logo from '../assets/electrical-services-IMG/Best-logo.png'
import {BiSolidCaretDownCircle} from 'react-icons/bi'
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
       

<img src={Logo} alt="logo"className="nav-logo"/><span class="logo-text ">Odims Engineering <span className="text-lg">(Pty) Ltd</span></span>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <div class="tooltip">Services<BiSolidCaretDownCircle className="toggle-services"/>
                  <span class="tooltiptext">
                 <ol>
                <li>Full House, Office And Company Wiring.</li>
                <li>Fault Finding.</li>
                <li>Installation and Servicing of Garage Motor.</li>
                <li>Electric Fencing.</li>
                <li>Intercom System.</li>
                <li>Access Control.</li>
                <li>CCTV Installation and Servicing.</li>
                <li>Alarm System.</li>
                <li>Power Backups.</li>
                <li>Installation and Servicing of Swimming Pool Pumps.</li>
                <li>Installation and Servicing of Borehole Pumps.</li>
                 </ol>
                  </span>
</div>
                </NavLink>
              </li> */}




              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>






              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;