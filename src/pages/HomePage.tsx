import React from 'react'
import DateDisplay from '../components/DateDisplay'
import TopNav from '../components/TopNav'
import Hero from '../components/Hero'
import About from '../components/About'
import Business from '../components/Business'
import Speaking from '../components/Speaking'
import Property from '../components/Property'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
    return (
        <body id="body" data-spy="scroll" data-target=".header">
            <TopNav />
            <Hero />
            <About />
            <Business />
            <Speaking />
            <Property />
            <Testimonials />
            <Contact />
            <Footer />
        </body>
    )
}

export default HomePage
