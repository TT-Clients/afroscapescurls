import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'
import GmaBanner from '../components/GmaBanner'
import Footer from '../components/Footer'

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
                <img src="./img/kids/yhds.jpeg" className="img-fluid w-100 pt-4 mt-5 top-image" alt="Patience" style={{ height: '50%' }} />
            </div>
            {/* <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '4em' }}>Education</h1>
            
            </div> */}

            <section className="" id="services" style={{ padding: 0 }}>
                <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
                    <div className="row" style={{ padding: 0, margin: 0 }}>
                        <div className="col" style={{ padding: 0, margin: 0 }}>
                            <div className="text-center" style={{ backgroundColor: 'var(--hoacc-blue)', color: 'black' }}>
                                <h1 className="text-uppercase py-3">Education</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                <h3 className="section-subheading">
                                    Businesses and fellow foundations have given their time and support to help us make a difference in children&apos;s lives.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="card" style={{ width: '18rem;' }}>  
                            <div className="card-header d-flex justify-content-center">
                                    <a className="btn btn-success" href="https://form.jotform.com/240456639969171">Young History Detectives Interest Form 2024</a>

                                </div>
                                {/* <a href="http://www.theyhd.com"> */}
                                    <img src="./img/kids/yhd.png" className="card-img-top" />
                                {/* </a> */}
                                <div className="card-body" style={{ backgroundColor: '#000', color: '#FFF' }}>
                                    <h5 className="card-title text-center">
                                        {' '}
                                        Young History Detectives
                                    </h5>
                                    <p className="card-text" style={{ overflow: 'auto', fontSize:'14px' }}>
                                        <div>Young History Detectives (YHD) is our youth enrichment program. It uses geek culture to promote literacy, critical thinking and digital literacy. 
                                            The Young History Detectives learn Black History, both regional, national, and across the African Diaspora along with historical research methods to 
                                            better understand US History. The YHD Summer Camp is <strong>Monday-Friday, July 29- August 9, 2024 10am-5pm, at the University of Nebraska at Omaha</strong>.
                                        </div>
                                    </p>
                                </div>
                              
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/kids/yhdjr.png" className="card-img-top" />
                                <div className="card-body" style={{ backgroundColor: '#000', color: '#FFF' }}>
                                    <h5 className="card-title text-center">Junior Young History Detectives</h5>
                                    <p className="card-text" style={{ overflow: 'auto', fontSize:'14px' }}>
                                    Junior Young History Detectives is open to 9-11 year olds, interested in learning Black History, Omaha History in fun and engaging ways. This year&apos;s camps will explore storytelling as a tool to present their discoveries of the people, places and events in North Omaha. 
                                    Summer Junior Young History Detectives Program is <strong>Monday-Friday, July 22-26, 2024 10am-5pm, at the University of Nebraska at Omaha</strong>.</p>


                                </div>
                                <div className="card-footer d-flex justify-content-center">
                                    <a className="btn btn-success" href="https://form.jotform.com/240456639969171">Junior Young History Detectives Interest Form 2024</a>


                                </div>
                            </div>
                        </div>

                    </div>
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

export default EducationPage
