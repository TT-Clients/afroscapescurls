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
            <TopNav title="Special Events" />
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '4em' }}>Special Events</h1>
               
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-center mt-4" style={{ backgroundColor: 'var(--hoacc-blue)', color: 'black' }}>
                            <h1 className="text-uppercase">Special Events</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="./img/steampunk.jpg" className="img-thumbnail" alt="..." />
                        <p>
                            <strong>The SteamPunk Tea Party</strong> is an immersive, multidisciplinary experience that explores the innovation and
                            inventiveness of the Black Victorian era of excellence often overlooked, that examines the intersectionality of history, technology,
                            and the future.
                        </p>
                    </div>

                    <div className="col">
                        <img src="./img/afrocon2.jpg" className="img-thumbnail" alt="..." />
                        <img src="./img/afrocon1.jpg" className="img-thumbnail" alt="..." />
                        <p>
                            <strong>AfroCon</strong> is a 2-day comic and gaming convention, with community conversations, workshops and vendors.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SpecialEventsPage
