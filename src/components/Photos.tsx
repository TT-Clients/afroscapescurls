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
                                <a href="https://checkout.square.site/buy/M6MQRQ7IF4I6M5IUV3AS6ULJ" rel="noreferrer" target="_blank" className="btn btn-danger mb-3">
                                    Order yours today!
                                </a>
                            </div>
                            <div className="row">
                                <div className="col"><img src="./img/steampunk.jpg" alt="" className="img-fluid" style={{ width: '400px' }} /></div>
   
                            </div>
                            <div className="row mt-3">
                                <div className="col"><img src="./img/2023Steampunk.png" alt="" className="img-fluid" style={{ width: '400px' }} /></div>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5">
                        <h4 className="text-center">Join us at the next Steampunk Tea Party on <strong>June 10th 2023</strong></h4>
                        <div className="text-center">
                                <a href="https://www.eventbrite.com/e/steampunk-tea-party-tickets-609026824627?aff=erelexpmlt" rel="noreferrer" target="_blank" className="btn btn-danger mb-3 btn-lg">
                                    Tickets Available Now!
                                </a>
                            </div>
                    </div>
                </div>

              
               
            </div>
        </section>
    )
}

export default Photos
