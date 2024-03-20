import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'
import GmaBanner from '../components/GmaBanner'
import Footer from '../components/Footer'

const CommunityEngagementPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.INTRO_ROUTE)
    }

    return (
        <>
            <TopNav title="Community Engagement" />
            <div className="container-fluid w-100 h-auto m-0 p-0">
                <img src="./img/communityheader.jpg" className="img-fluid w-100 pt-4 mt-5 top-image" alt="Patience" style={{height:'100%'}}/>
            </div>
            <section className="" style={{ padding: '0', margin: 0 }}>
                <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
                    <div className="row" style={{ padding: 0, margin: 0 }}>
                        <div className="col" style={{ padding: 0, margin: 0 }}>
                        <div className="text-center" style={{ backgroundColor: 'var(--hoacc-blue)', color: 'black' }}>
                                <h1 className="text-uppercase py-3">Community Engagement</h1>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="text-center">
                                {/* <h1 className="section-heading text-uppercase">Community Engagement</h1> */}
                                <h3 className="section-subheading">
                                    The House celebrates the present state of Black creativity, innovation, and excellence. The House creates a sense of
                                    empowerment and agency within the community by providing opportunities for individuals to en gage in unique activities,
                                    discussions, and advocacy work, by providing access to resources and support networks that may not be available elsewhere.
                                    The House uplifts artists, educators, nonprofits, and vendors who are invested in increasing cross-cultural understanding
                                    and advancing racial diversity, equity, and inclusion.
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row text-center mt-5">
                        <div className="col-md-12">
                            <div className="card">
                                <a href="https://www.youtube.com/@TheHouseLXN">
                                    <img src="./img/lxn.png" style={{ width: '100%' }} />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">The League of Excellent/Extraordinary Negroes</h5>
                                    <p className="card-text">
                                    The League of Excellent\Extraordinary Negroes (LXN) Is our weekly podcast on our YouTube channel offers panel discussions and reviews for tv, movies and documentaries from Black perspectives. The Young League are the tween and teen participants of the Young History Detectives, that discuss movies, tv and games from a unique lens. 
                                    </p>
                                    <a href="https://www.youtube.com/@TheHouseLXN" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg about-btn">
                                        Check out our Youtube Channel
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div> */}
                </div>
            </section>
            <div className="row">
                    <div className="col">
                        <GmaBanner />
                    </div>
                </div>
                
            <Footer />
        </>
    )
}

export default CommunityEngagementPage
