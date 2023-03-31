import React from 'react'
import profile from '../images/profile.jpg'

const Photos: React.FC = () => {
    return (
        <section className="page-section bg-light" id="photos">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">
                                Steampunk Teaparty 2022 Book Is On Sale
                                <br /> March 20th 2023!
                            </h2>
                            <div>
                                <a href="https://checkout.square.site/buy/M6MQRQ7IF4I6M5IUV3AS6ULJ" className="btn btn-danger mb-3">
                                    Order yours today!
                                </a>
                            </div>

                            <img src="./img/steampunk.jpg" alt="" className="img-fluid" style={{ width: '400px' }} />
                        </div>
                    </div>
                </div>

              
               
            </div>
        </section>
    )
}

export default Photos
