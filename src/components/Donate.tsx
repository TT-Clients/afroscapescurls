import React from 'react'

const Donate: React.FC = () => {
    return (
        <section className="page-section bg-light" id="donate">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase mt-5">Donate</h2>
                        </div>
                        <div className="row mb-5 mt-5">
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <a href="./img/games.jpg">
                                        <img src="./img/gamestack.jpg" alt="Games" style={{ width: '100%' }} />
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
                        <div className="d-flex justify-content-evenly">
                            <a href="https://shareomaha.org/nonprofit/house-afros-capes-curls" target='_blank' rel="noreferrer" className="btn btn-success btn-lg">
                                Donate via Share Omaha
                            </a>
                            <a href="http://www.paypal.com/us/fundraiser/charity/4023520" target='_blank' rel="noreferrer" className="btn btn-success btn-lg">
                                Donate via Paypal
                            </a>
                            <a href="https://square.link/u/XQDXmlzi" target='_blank' rel="noreferrer" className="btn btn-success  btn-lg">
                                Donate via Square
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Donate
