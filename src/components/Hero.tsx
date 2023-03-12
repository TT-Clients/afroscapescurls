import React from 'react'
import profile from '../images/profile.jpg'

const Hero: React.FC = () => {

    return (
        <header className="container-fluid header">
            <div className="row">
                <div className="col">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex justify-content-around" data-bs-interval="5000">
                                <img src="img/HOACC.png" className="d-block" alt="..." />
                                <img src="img/header-img.png" className="d-block " alt="..." />
                            </div>
                            <div className="carousel-item d-flex justify-content-center" data-bs-interval="5000">
                              {/* <img src="img/games.jpg" className="d-block" alt="" /> */}
                            </div>
                        
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Hero
