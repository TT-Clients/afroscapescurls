import React from 'react'

const Policies: React.FC = () => {
    return (
        <section className="page-section bg-light" id="policies">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Policies</h2>
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

export default Policies
