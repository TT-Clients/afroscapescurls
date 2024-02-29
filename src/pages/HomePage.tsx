import React from 'react'
import TopNav from '../components/TopNav'
import Hero from '../components/Hero'
import About from '../components/About'
import Events from '../components/Events'
import Upcoming from '../components/Upcoming'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import './topnav.css'
import Policies from '../components/Policies'
import Donate from '../components/Donate'
import Steampunk from '../components/Steampunk'

const HomePage: React.FC = () => {
    return (
        <div>
            <TopNav title='The House of Afros, Capes & Curls'/>
             <Hero />
          <About />
              <Events />
            <Upcoming />
           {/* <Steampunk />
            <Donate />
            <Policies/>
            <Contact />
            <Footer /> */}
       </div>
    )
}

export default HomePage
