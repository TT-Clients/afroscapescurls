import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

const TopNav: React.FC = () => {
 
    return (
      <div>      
        <nav className="mainnav navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container flex-wrap">
            <Link className="navbar-brand d-none d-sm-block" to="#page-top">
              <div style={{"display":"flex"}}>
              <span>The House of Afros, Capes and Curls</span></div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item"><Link className="nav-link" to={ROUTES.MAINPAGE_ROUTE}>Home</Link></li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to={ROUTES.ABOUT_ROUTE}>About</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={ROUTES.ABOUT_ROUTE}>About HOACC</Link></li>
                    <li><Link className="dropdown-item" to={ROUTES.MEETTEAM_ROUTE}>Meet the Team</Link></li>
                  </ul>
                </li>
                <li className="nav-item"><Link className="nav-link" to={ROUTES.COMMUNITYENGAGEMENT_ROUTE}>Community Engagement</Link></li>
                <li className="nav-item education"><Link className="nav-link" to={ROUTES.EDUCATION_ROUTE}>Education</Link></li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to={ROUTES.SPECIALEVENTS_ROUTE} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Events
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={ROUTES.SPECIALEVENTS_ROUTE}>Special Events</Link></li>
                    <li><Link className="dropdown-item" to={ROUTES.SIGNATUREEVENTS_ROUTE}>Signature Events</Link></li>
                  </ul>
                </li>
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