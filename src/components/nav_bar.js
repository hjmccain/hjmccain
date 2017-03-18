import React from 'react';
require('smoothscroll-polyfill').polyfill();

const NavBar = () => {
  const scrollTo = (selector) => {
    document.querySelector(`#${selector}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className="nav-bar">
      <p className="nav-name" onClick={() => {scrollTo('header')}}>Hannah McCain</p>
      <p className="nav-link" onClick={() => {scrollTo('about')}}>About</p>
      <p className="nav-link" onClick={() => {scrollTo('portfolio')}}>Portfolio</p>
      <p className="nav-link" onClick={() => {scrollTo('contact')}}>Contact</p>
    </div>
  )
}

export default NavBar;
