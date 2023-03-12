import React from 'react'
import profile from '../images/profile.jpg'

const Photos: React.FC = () => {
    const title = 'Regional Vice President, National Sales and Account Management'

    return (
        <section className="page-section bg-light" id="photos">
            <div className="container">
                 <div className="row">
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="assets/img/games.jpg">
                                <img src="img/gamestack.jpg" alt="Nature" style={{ width: '100%' }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="img/play.jpg">
                                <img src="img/play.jpg" alt="Fjords" style={{ width: '100%' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Photos
