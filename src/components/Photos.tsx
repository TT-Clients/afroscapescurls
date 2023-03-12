import React from 'react'
import profile from '../images/profile.jpg'

const Photos: React.FC = () => {
    const title = 'Regional Vice President, National Sales and Account Management'

    return (
        <section className="page-section bg-light" id="photos">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Anti-Harrasment Policy</h4>
                        <p>The House of Afros, Capes & Curls does not tolerate harassment of any type at any of its events. Harassment can take many forms. It may be, but is not limited to, words, signs, offensive jokes, cartoons, pictures, posters, email jokes or statements, pranks, intimidation, physical assaults or contact, or violence.” COSTUMES DO NOT EQUAL CONSENT.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Non Discrimination Policy</h4>
                        <p>The House of Afros, Capes & Curls does not discriminate based on race, color, ethnicity, national origin, sex, sexual orientation, gender identity, religion, disability, age, veteran status, marital status, and/or political affiliation in its programs, activities.</p>
                    </div>
                </div>
                 <div className="row">
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="assets/./img/games.jpg">
                                <img src="./img/gamestack.jpg" alt="Nature" style={{ width: '100%' }} />
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
            </div>
        </section>
    )
}

export default Photos
