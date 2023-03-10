import React from 'react'
import profile from '../images/profile.jpg'

const Contact: React.FC = () => {
    const title = 'Regional Vice President, National Sales and Account Management'

    return (
        <div id="contact">
            <div className="bg-color-sky-light">
                <div className="container content-lg">
                    <div className="row margin-b-40">
                        <div className="col-sm-6">
                            <h2>Contact Me</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-xs-12 md-margin-b-30">
                            <h4>Location</h4>
                            <a href="#">Nebraska, North Carolina, South Carolina</a>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <h4>Email</h4>
                            <a href="mailto:cojo.dreamhomes@gmail.com">CoJo.dreamhomes@gmail.com</a>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <h4>Web</h4>
                            <a href="https://www.cojollc.com">cojollc.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
