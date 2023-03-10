import React from 'react'

const TopNav: React.FC = () => {
 
    return (
        <header className="header navbar-fixed-top">
        <nav className="navbar" role="navigation">
          <div className="container">
            <div className="menu-container js_nav-item">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="toggle-icon"></span>
              </button>
    
              <div className="logo">
                <a className="logo-wrap" href="#body">
                  <img className="logo-img" src="img/logo.png" alt="COJO Logo" />
    
                </a>
              </div>
            </div>
    
            <div className="collapse navbar-collapse nav-collapse">
              <div className="menu-container">
                <ul className="nav navbar-nav navbar-nav-right">
                  <li className="js_nav-item nav-item">
                    <a className="nav-item-child nav-item-hover" href="#body">Home</a>
                  </li>
                  <li className="js_nav-item nav-item">
                    <a className="nav-item-child nav-item-hover" href="#about">About</a>
                  </li>
                  <li className="js_nav-item nav-item">
                    <a className="nav-item-child nav-item-hover" href="#experience">Business</a>
                  </li>
                  <li className="js_nav-item nav-item">
                    <a className="nav-item-child nav-item-hover" href="#work">Speaking Engagements</a>
                  </li>
                  <li className="js_nav-item nav-item">
                    <a className="nav-item-child nav-item-hover" href="#testimonials">Testimonials</a>
                  </li>
                  <li className="js_nav-item nav-item">
                    <a className="nav-item-child nav-item-hover" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default TopNav