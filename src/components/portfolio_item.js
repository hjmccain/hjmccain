import React from 'react';
import viewCode from '../../public/view-code.png';
import viewApp from '../../public/view-app.png';

class PortfolioItem extends React.Component {
  constructor(props) {
    super();
    this.state = {
      viewCodeClass: 'view-code hidden',
      viewAppClass: 'view-app hidden',
      appInfo: 'app-info-container hidden',
      mockupClass: `${props.img.className}`,
      showButtons: false
    }
  }

  showButtons() {
    if (!this.state.showButtons) {
      this.setState({
        viewCodeClass: 'view-code',
        viewAppClass: 'view-app',
        appInfo: 'app-info-container',
        mockupClass: `${this.props.img.className} dark`,
        showButtons: true
      });
    } else {
      this.setState({
        viewCodeClass: 'view-code hidden',
        viewAppClass: 'view-app hidden',
        appInfo: 'app-info-container hidden',
        mockupClass: `${this.props.img.className}`,
        showButtons: false
      });
    }
  }

  render() {
    return (
        <div className="portfolio-item">
          <img className={this.props.titleImg.className} src={this.props.titleImg.src} alt={this.props.titleImg.alt} />
          <div className="item-info" onMouseEnter={this.showButtons.bind(this)} onMouseLeave={this.showButtons.bind(this)}>
            <div className="app-buttons">
              <a href={this.props.codeLink.url} target="_blank">
                <img className={this.state.viewCodeClass} src={viewCode} alt="button to view code" /></a>
              <a href={this.props.demoLink.url} target="_blank">
                <img className={this.state.viewAppClass} src={viewApp} alt="button to view app" /></a>
            </div>
            <img className={this.state.mockupClass} src={this.props.img.src} alt={this.props.img.alt} />
            <div className={this.state.appInfo}>
              <p className="app-info">
                <span className="highlighted-title">
                  {this.props.titleContent.subtitle}</span> —
                <br />
                {this.props.description}
              </p>
              <p className="app-info" >
                <span className="highlighted-title">The stack</span> —
                  <br />
                  {this.props.titleContent.title} was built with <span className="highlighted-font">React + Redux</span> on the front end, <span className="highlighted-font"> Node.js + Express</span>  on the back end, and a <span className="highlighted-font">{this.props.stack.db}</span> database.
              </p>
              <p className="app-info last-element">
                <span className="highlighted-title">My role</span> —
                <br />
                {this.props.role}
              </p>
            </div>
        </div>
      </div>
    )
  }
}

export default PortfolioItem;
