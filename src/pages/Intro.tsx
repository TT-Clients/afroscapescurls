import React from 'react'
import './index.css'

const Intro: React.FC = () => {
    return (
        <div className="container-fluid">
        <div className="row">
        <div className="col-12 col-md-6">
            <div className="col-left fade-in-text" style={{"height":"100%"}}>
                <div className="d-flex justify-content-center"><img src="img/hoacc-text.png" className="img-fluid" alt="" srcSet="" /></div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src="img/geekculture-text.png" className="img-fluid" alt="" srcSet="" />
                </div>
            </div>

        </div>
        <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center">
                
               {/* <!-- <img src="assets/img/door.png" alt="" className="fade-in-door d-block mx-lg-auto img-fluid" srcSet=""/>--> */}
                <div className="col-right">
                    <a href="main.html"><img className="fade-in-door" src="img/door.png" alt="" srcSet="" /></a>
                    <div className="typewriter">
                      <h3>You May Enter</h3>
                    </div>
                  </div>
            </div>

        </div>
        </div>
    </div>
    )
}

export default Intro
