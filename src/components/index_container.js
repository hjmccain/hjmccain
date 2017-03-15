import React from 'react';
import '../style/sass/index.scss';
import Header from './header';
import Portfolio from './portfolio';
import About from './about';
import ContactInfo from './contact_info';
import moreButton from '../../public/more-button-3.png';

const IndexContainer = () => {
  return (
    <div className="container">
      <Header />
      <a href="#about"><img className="more-button" src={moreButton} alt="button to see more content" /></a>
      <div className="content">
        <About />
        <Portfolio />
        <ContactInfo />
      </div>
    </div>
  )
}

export default IndexContainer;
