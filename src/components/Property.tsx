import React from 'react'
import profile from '../images/profile.jpg'

const Property: React.FC = () => {
    const title = 'Regional Vice President, National Sales and Account Management'

    return (
        <div id="property" className="container">
            <h2 className="promo-banner-title-prop">Property Management</h2>
            <p style={{ textAlign: 'center' }}>Some of the properties that I currently manage</p>
            <div className="bg-color-sky-light">
                <div className="prop-container">
                    <div>
                        <img src="img/51911.jpeg" alt="" style={{ width: '100%' }} />
                        <p style={{ textAlign: 'center' }}>Nebraska Home</p>
                    </div>
                    <div>
                        <img src="img/51915.jpeg" alt="" style={{ width: '100%' }} />
                        <p style={{ textAlign: 'center' }}>North Carolina Home</p>
                    </div>
                    <div>
                        <img src="img/51913.jpeg" alt="" style={{ width: '100%' }} />
                        <p style={{ textAlign: 'center' }}>Nebraska Home</p>
                    </div>
                </div>
            </div>

            <div className="prop-container">
                <div>
                    <div
                        className="airbnb-embed-frame"
                        data-id="585582329637066649"
                        data-view="home"
                        style={{ width: '450px', height: '300px', margin: 'auto' }}
                    >
                        <a href="https://www.airbnb.com/rooms/585582329637066649?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                        <a href="https://www.airbnb.com/rooms/585582329637066649?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget" rel="nofollow">
                            Cheerful 1 bedroom bungalow w/parking &amp; backyard.
                        </a>
                        <script src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script>
                    </div>
                    <p style={{ textAlign: 'center' }}>
                        <a href="https://www.vrbo.com/2837836">View this home on Vrbo</a>
                    </p>
                    <p style={{ textAlign: 'center' }}>
                        <a href="https://www.expedia.com/Greensboro-Hotels-Cheerful-1-Bedroom-Bungalow.h78688613.Hotel-Information">
                            View this home on Expedia
                        </a>
                    </p>
                </div>
            </div>
            <div id="bci">
                <div className="bg-color-sky-light">
                    <div className="container content-lg">
                        <div className="row margin-b-40">
                            <div className="col-sm-12">
                                <h2 className="promo-banner-title-prop">Business Consulting and Investor</h2>
                                <h3 style={{textAlign: 'center'}}>Recent Investments</h3>
                                <p style={{textAlign: 'center'}}>Confidence Through The Art of Barbering</p>
                                <div className="prop-container" style={{display:'flex',justifyContent:'center'}}></div>
                                <a target="_blank" rel="noreferrer" href="http://confidencethrubarbering.com/">
                                    <img src="img/investor.jpg" alt="" />
                                </a>
                            </div>
                            <div> <a target="_blank" rel="noreferrer" href="http://confidencethrubarbering.com/">
                                <img src="img/ctb.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property
