import React from 'react'
import profile from '../images/profile.jpg'

const Business: React.FC = () => {
    const title = 'Regional Vice President, National Sales and Account Management'

    return (
        <div id="experience">
            <div className="bg-color-sky-light" data-auto-height="true">
                <div className="container content-lg">
                    <div className="row row-space-2 margin-b-4">
                        <div className="col-md-3 col-sm-6 md-margin-b-4">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-organization"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Property Management</h3>
                                    <p className="margin-b-5">More information coming soon</p>
                                </div>
                                <a href="#property" className="content-wrapper-link"></a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 md-margin-b-4">
                            <div className="service bg-color-base wow zoomIn" data-height="height" data-wow-duration=".3" data-wow-delay=".1s">
                                <div className="service-element">
                                    <i className="service-icon color-white icon-home"></i>
                                </div>
                                <div className="service-info">
                                    <h3 className="color-white">Home Renovation</h3>
                                    <p className="color-white margin-b-5">More information coming soon</p>
                                </div>
                                <a href="#hr" className="content-wrapper-link"></a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 sm-margin-b-4">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-briefcase"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Business Consulting & Investor</h3>
                                    <p className="margin-b-5">
                                        <img src="img/logobiz.jpg" className="img-responsive" alt="" />
                                    </p>
                                </div>
                                <a href="#bci" className="content-wrapper-link"></a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-badge"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Diversity and Inclusion Ambassador</h3>
                                    <p className="margin-b-5">More information coming soon</p>
                                </div>
                                <a href="#" className="content-wrapper-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business
