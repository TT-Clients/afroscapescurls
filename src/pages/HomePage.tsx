import React from 'react'
import DateDisplay from '../components/DateDisplay'
import TopNav from '../components/TopNav'
import Hero from '../components/Hero'
import About from '../components/About'
import Events from '../components/Events'
import Speaking from '../components/Speaking'
import Photos from '../components/Photos'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import './topnav.css'

const HomePage: React.FC = () => {
    return (
        <div>
            <TopNav title='The House of Afros, Capes & Curls'/>
            <Hero />
            <About />
            <Events />
            <Photos />
            <Contact />
            <Footer />
       </div>
    )
}

export default HomePage
