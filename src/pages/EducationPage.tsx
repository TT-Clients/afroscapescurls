import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'

const EducationPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.INTRO_ROUTE)
    }

    return (
        <>
            <TopNav title="Education" />
            <div className="container-fluid w-100 h-auto m-0 p-0">
                <img src="img/games2.jpg" className="img-fluid w-100 p-0 m-0 top-image" alt="Patience" />
            </div>

            <section className="page-section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                <h1 className="section-heading text-uppercase">Education</h1>
                                <h3 className="section-subheading">
                                    Businesses and fellow foundations have given their time and support to help us make a difference in children&apos;s lives.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>The House Community School</h2>
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="img/history.jpeg" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">The 1619 Project: A New Origin Story</h5>
                                    <p className="card-text">The 1619 Project: A New Origin Story by Nikole Hannah-Jones was released in November. The House Community School hosts monthly discussion sessions for each section of the book. Please RSVP on our community calendar.</p>
                                 
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h2>Young History Detectives</h2>
                            <div className="card" style={{ width: '18rem;' }}>
                                <a href="www.theyhd.com"><img src="img/yhd2.png" className="card-img-top" /></a>
                                <div className="card-body">
                                    <h5 className="card-title"> <a href="www.theyhd.com">Young History Detectives</a></h5>
                                    <p className="card-text">The Young History Detectives learn Black History, both regional, national, and across the African Diaspora along with historical research methods to better understand US History.
                                    <br/>
                                    <a href="https://form.jotform.com/jrlrogers/young-history-detectives-2023-sprin">Young History Detectives Registration 2023</a></p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
            </section>
        </>
    )
}

export default EducationPage
