import React from 'react'

const TopNav: React.FC = () => {
 
    return (
      <div>      
        <nav className="mainnav navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container flex-wrap">
            <a className="navbar-brand d-none d-sm-block" href="#page-top">
        
              <div style={{"display":"flex"}}>
              <span>The House of Afros, Capes and Curls</span></div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item"><a className="nav-link" href="main.html">Home</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="about.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="about.html">About HOACC</a></li>
                    <li><a className="dropdown-item" href="team.html">Meet the Team</a></li>
                    
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="community_engagement.html">Community Engagement</a></li>
                <li className="nav-item education"><a className="nav-link" href="education.html">Education</a></li>
                <li className="nav-item"><a className="nav-link" href="specialevents.html">Special Events</a></li>
              </ul>
            </div>
          </div>
        </nav> 
        <header className="container-fluid header">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="col-left fade-in-text">
                <div className="d-flex justify-content-center header-text"> The House of Afros, Capes & Curls</div>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="assets/img/HOACC.png" className="logo" />
                </div>
              </div>
      
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center">
      
                <div className="col-right">
                  <img src="assets/img/header-img.png" alt="" srcSet="" />
                </div>
              </div>
      
            </div>
          </div>
        </header>
      </div>
    )
}

export default TopNav