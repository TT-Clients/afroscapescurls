import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'
import { Button } from '@mui/material'
import { AttachMoney } from '@mui/icons-material';


type TopNavProps = {
  title: string
}

function scrollToElement() {
  const element = document.getElementById('donate')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}


const TopNav: React.FC<TopNavProps> = ({ title }) => {
 
    return (
      <div>      
        <nav className="mainnav navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container-fluid flex-wrap">
            <Link className="navbar-brand d-none d-sm-block" to="#page-top">
              <div style={{"display":"flex"}}>
               <div style={{fontSize:'22px'}}>The House of Afros, Capes and Curls</div>
              </div>
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
                    <li><Link className="dropdown-item" to={ROUTES.ABOUT_ROUTE}>About The House</Link></li>
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
                    <li><Link className="dropdown-item" to={ROUTES.SPECIALEVENTS_ROUTE}>Event Calendar</Link></li>
                    <li><Link className="dropdown-item" to={ROUTES.SIGNATUREEVENTS_ROUTE}>Signature Events</Link></li>
                    <li><Link className="dropdown-item" to={ROUTES.PHOTOS_ROUTE}>Event Photos</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                
                </li>
              </ul>
             

              <span className="d-flex pl-2" style={{marginLeft:'50px'}}>
                <Button variant="contained" endIcon={<AttachMoney />} onClick={scrollToElement} sx={{backgroundColor: 'green', fontWeight:'bold'}}>
                  Donate
                </Button>
              </span>
            </div>
          </div>
        </nav> 
        
      </div>
    )
}

export default TopNav