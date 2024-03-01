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
            <div className="container-fluid w-100 h-auto m-0 p-0 d-flex ed-header">
                <img src="./img/play.jpg" className="img-fluid w-100 p-0 m-0 top-image ed-header-images" alt="Patience" style={{ width: '25% !important' }} />
                <img
                    src="./img/kids/notes.jpg"
                    className="img-fluid w-100 p-0 m-0 top-image ed-header-images"
                    alt="Patience"
                    style={{ width: '25% !important' }}
                />
                <img
                    src="./img/kids/smilecomp.jpg"
                    className="img-fluid w-100 p-0 m-0 top-image ed-header-images"
                    alt="Patience"
                    style={{ width: '25% !important' }}
                />
                <img
                    src="./img/kids/kidspainting.jpg"
                    className="img-fluid w-100 p-0 m-0 top-image ed-header-images"
                    alt="Patience"
                    style={{ width: '25% !important' }}
                />
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
                <div className="container mt-5">
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
                        <div className="col">
                            <h2 className="text-center">Junior Young History Detectives</h2>
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/kids/yhdjr.png" className="card-img-top" />
                                <div className="card-body" style={{ backgroundColor: '#000', color: '#FFF' }}>
                                    <h5 className="card-title text-center">Junior Young History Detectives</h5>
                                    <p className="card-text" style={{overflow:'auto', height: '460px' }}>
                                    YHD returns for another year, with a twist!  Now, with a new group for 9-11 year olds, this year&apos;s camps will explore storytelling as a tool to present their discoveries of the people, places and events in North Omaha.
                                    <br />
                                    <br />
                                    <br />
                                        Summer Junior Young History Detectives
                                        Program begins July 22-26, 10am-5pm, CEC/Rm 231</p>
                                    <br />
                                    <br />
                                        <a href="https://form.jotform.com/240456639969171">
                                            Junior Young History Detectives Interest Form 2024
                                        </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h2 className="text-center">Young History Detectives</h2>
                            <div className="card" style={{ width: '18rem;' }}>
                                <a href="http://www.theyhd.com">
                                    <img src="./img/kids/yhd.png" className="card-img-top" />
                                </a>
                                <div className="card-body" style={{ backgroundColor: '#000', color: '#FFF'}}>
                                    <h5 className="card-title text-center">
                                        {' '}
                                        <a href="http://www.theyhd.com" target='_blank' rel='noreferrer'>Young History Detectives</a>
                                    </h5>
                                    <p className="card-text" style={{overflow:'auto', height: '460px' }}>
                                        <div>Young History Detectives (YHD) is our youth enrichment program. It uses geek culture to promote literacy, critical
                                        thinking and digital literacy. The Young History Detectives learn Black History, both regional, national, and across the
                                        African Diaspora along with historical research methods to better understand US History. The goal of the 2023 YHD
                                        Program is to create an interactive walk through history that can be accessed throughout the community and develop:
                                        research & documentation skills critical thinking, problem-solving, cultural enrichment, and historical knowledge with
                                        our ongoing Spatial Memory Project. During the spring and summer, students will be researching and recording history
                                        discovered at individual properties on 24th, 16th, and 30th Streets in North Omaha. It&apos;s a multi-year project that
                                        they started last summer and will continue until we can create a VR experience mapping North Omaha, which is the big
                                        picture. This is a multi-year project where we document the history of buildings and spaces on 24th, 30th, and 16th
                                        Streets, and learn the history of Omaha, to create a VR exhibition and tour for the community. 
                                        <br />
                                        <br />
                                       
                                        Program begins July 29-August 9, 2024, 10am-5pm, CEC/Rm 231 
                                    <br />
                                    <br />
                                        <a href="https://form.jotform.com/240456639969171">
                                            Young History Detectives Interest Form 2024
                                        </a>
                                        </div>
                                    </p>
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
