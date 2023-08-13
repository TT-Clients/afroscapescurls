import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'
import GmaBanner from '../components/GmaBanner'

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
            <TopNav title="Signature Events" />
            <div className="container-fluid w-100 h-auto m-0 p-0">
                <img src="./img/afroconheader.jpg" className="img-fluid w-100 pt-4 mt-5 top-image" alt="Patience" style={{ height: '100%' }} />
            </div>
            <section className="" style={{ padding: '0', margin: 0 }}>
                <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
                    <div className="row" style={{ padding: 0, margin: 0 }}>
                        <div className="col" style={{ padding: 0, margin: 0 }}>
                            <div className="text-center" style={{ backgroundColor: 'var(--hoacc-blue)', color: 'black' }}>
                                <h1 className="text-uppercase py-3">Signature Events</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="text-center">
                                <h3 className="section-subheading">We host events throughout the year</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="./img/steampunk.jpg" className="img-thumbnail" alt="..." style={{paddingBottom:'15px',width:'100%'}}/>
                            <p style={{ overflow: 'auto', height: '300px' }}>
                                <strong>The SteamPunk Tea Party</strong> is an immersive, multidisciplinary experience that explores the innovation and
                                inventiveness of the Black Victorian era of excellence often overlooked. Open to the community, participants are invited to
                                dress in Victorian era or steampunk modified Victorian era clothing, and participate in conversations, activities. We will
                                examine the intersectionality of history, technology, and the future. This is a multi-day program with art-making workshops for
                                all ages, a STEAM workshop for youth 4th-12th grade and multiple virtual and in-person discussions about the theme and the
                                history highlighted in the event. Participants will be photographed as portraiture and will record ideas and stories that will
                                be the catalyst for a book that records and documents the experience. <strong>June 10, 2023</strong>.
                            </p>
                        </div>

                        <div className="col">
                            <img src="./img/afrocon2.jpg" className="img-thumbnail" alt="..." style={{ marginBottom: '20px' }} />
                            <img src="./img/afrocon1.jpg" className="img-thumbnail" alt="..." />
                            <p style={{overflow:'auto', height:'200px'}}>
                                <strong>AfroCon</strong> is a day-long comic and gaming convention, with community conversations, workshops and vendors. It is a 1-2 day festival of nerd culture and black culture with artists, vendors, food trucks, workshops, demonstrations, gaming, cosplay and conference style community panels and conversations on a variety of topics from Black Representation in Media, drawing, writing and board game workshops, coding and Blacks in Technology. <strong>October 7-8, 2023</strong>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <GmaBanner />
                    </div>
                </div>
                <Footer />
            </section>

        </>
    )
}

export default SignatureEventsPage
