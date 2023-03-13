import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'

const SignatureEventsPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.INTRO_ROUTE)
    }

    return (
        <>
            <TopNav title='Signature Events' />
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '4em' }}>Signature Events</h1>
            
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-center mt-4" style={{ backgroundColor: 'var(--hoacc-blue)', color: 'black' }}>
                            <h1 className="text-uppercase">Signature Events</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                         <div data-tockify-component="calendar" data-tockify-calendar="the.house.events"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignatureEventsPage