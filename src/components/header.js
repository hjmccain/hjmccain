import React from 'react';
import headerShape from '../../public/small-screen-header.png';
import headerShapeWithText from '../../public/new-header.png';

const Header = () => {
  return (
    <div className="header-container" id="header">
      <h1 className="intro-text-container">
        <img className="header-shape" src={headerShape} alt="blue shape" />
        <img className="header-shape-with-text" src={headerShapeWithText} alt="blue shape with intro text" />
        <div className="header-div">
          <p className="header-title">
            Hi there!
          </p>
          <p className="header-text">
            I’m Hannah, a full-stack web developer based in New York City.</p>
        </div>
      </h1>
    </div>
  )
}

export default Header;
