import React from 'react'

const Hero: React.FC = () => {

    return (
        <header className="container-fluid header">           
                      
             <div className="row d-flex justify-content-center">
             
                <div className="col-sm-12 col-md-6 d-flex justify-content-around">
                <img src="./img/HOACC.png" className="d-block img-fluid mr-5 main-img-margin" />
                </div>
                <div className="col-sm-12 col-md-6">
                                <img src="./img/header-img.png" className="d-block img-fluid main-img-margin"/>
                     </div>
            </div>
                {/* <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex justify-content-around" data-bs-interval="5000">
                                <img src="./img/HOACC.png" className="d-block" alt="..." />
                                <img src="./img/header-img.png" className="d-block " alt="..." />
                            </div>
                            <div className="carousel-item d-flex justify-content-center" data-bs-interval="5000">
                            
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
            </div>*/}
            
        </header>
    )
}

export default Hero
