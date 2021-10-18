import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [buttonState, setbuttonState] = useState(true);

  const hideMobileMenu = () => {
    if (window.innerWidth < 672) {
      setbuttonState(true);
    }
  };
  return (
    <div className='navbar'>
      <div className='navbar__logo'></div>
      <div className={buttonState ? "navbar__buttons hide" : "navbar__buttons"}>
        <ul>
          <li>
            <NavLink
              className='navbar__style'
              activeClassName='navbar__active'
              exact
              to='/'
              onClick={hideMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navbar__style'
              activeClassName='navbar__active'
              exact
              to='/about'
              onClick={hideMobileMenu}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        className='mobile__button'
        onClick={() => setbuttonState(!buttonState)}
      >
        {buttonState ? (
          <i class='fa fa-bars' aria-hidden='true'></i>
        ) : (
          <i class='fa fa-times' aria-hidden='true'></i>
        )}
      </div>
    </div>
  );
}

export default Navbar;
