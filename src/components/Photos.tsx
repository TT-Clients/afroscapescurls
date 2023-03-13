import React from 'react'
import profile from '../images/profile.jpg'

const Photos: React.FC = () => {
    return (
        <section className="page-section bg-light" id="photos">
            <div className="container">
            <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Steampunk Teaparty 2022 Book Is On Sale<br/> March 20th 2023!</h2>
                            <div><a href="https://checkout.square.site/buy/M6MQRQ7IF4I6M5IUV3AS6ULJ" className="btn btn-danger mb-3">Order yours today!</a></div>
                    
                            <img src="./img/steampunk.jpg" alt="" className='img-fluid' style={{width:'400px'}}/>
                         </div>

                      
                    </div>
                </div>
                <div className="row" >
                    <div className="col">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase mt-5">Donate</h2>
                        </div>
                        <div className="d-flex justify-content-evenly">
                          <a href="https://shareomaha.org/nonprofit/house-afros-capes-curls" className="btn btn-success btn-lg">Donate via Share Omaha</a>
                          <a href="http://www.paypal.com/us/fundraiser/charity/4023520" className="btn btn-success btn-lg">Donate via Paypal</a>
                          <a href="https://checkout.square.site/merchant/MQ40NJ4B2EY5R/checkout/5HRIS5B4YNSR7PKBVXEB6GRX" className="btn btn-success  btn-lg">Donate via Square</a>
                          
                        </div>
                    </div>
                </div>
                
                <div className="row mb-5 mt-5">
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="./img/games.jpg">
                                <img src="./img/gamestack.jpg" alt="GAmes" style={{ width: '100%' }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="./img/play.jpg">
                                <img src="./img/play.jpg" alt="Fjords" style={{ width: '100%' }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                <div className="text-center">
                            <h2 className="section-heading text-uppercase mt-5">Our Policies</h2>
                        </div>
                      
                    <div className="col">
                        <h4>Anti-Harrasment Policy</h4>
                        <p>
                            The House of Afros, Capes & Curls does not tolerate harassment of any type at any of its events. Harassment can take many forms. It
                            may be, but is not limited to, words, signs, offensive jokes, cartoons, pictures, posters, email jokes or statements, pranks,
                            intimidation, physical assaults or contact, or violence.” COSTUMES DO NOT EQUAL CONSENT.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Non Discrimination Policy</h4>
                        <p>
                            The House of Afros, Capes & Curls does not discriminate based on race, color, ethnicity, national origin, sex, sexual orientation,
                            gender identity, religion, disability, age, veteran status, marital status, and/or political affiliation in its programs,
                            activities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Photos
