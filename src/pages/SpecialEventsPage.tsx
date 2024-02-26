import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'

const SpecialEventsPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.INTRO_ROUTE)
    }

    return (
        <>
           <TopNav title="Event Calendar" />
            <div className="container-fluid w-100 h-auto m-0 p-0">
                <img src="./img/seheader.jpg" className="img-fluid w-100 pt-4 mt-5 top-image" alt="Patience" style={{ height: '100%' }} />
            </div>
            <section className="" style={{ padding: '0', margin: 0 }}>
                <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
                    <div className="row" style={{ padding: 0, margin: 0 }}>
                        <div className="col" style={{ padding: 0, margin: 0 }}>
                            <div className="text-center" style={{ backgroundColor: 'var(--hoacc-blue)', color: 'black' }}>
                                <h1 className="text-uppercase py-3">Event Calendar</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    
                    <div className="row">
                        <div className="col">
                            <div data-tockify-component="calendar" data-tockify-calendar="the.house.events"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
                
        </>
    )
}

export default SpecialEventsPage
