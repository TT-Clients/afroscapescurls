import React from 'react'
import profile from '../images/profile.jpg'

const About: React.FC = () => {
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Mission</h2>
                    <h3 className="section-subheading text-muted">
                        The House of Afros, Capes & Curls is an organization whose goal is to connect people from diverse backgrounds and build a community
                        based on a shared love of science fiction, fantasy, gaming, and Afrofuturism, while providing a safe space to explore the artistic
                        literary and historic merits of geek culture.
                    </h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
            
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-gray"></i>
                            <i className="fas fa-gamepad fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Who We Are</h4>
                        <p className="text-muted">
                            We are always looking for ways to build community, connect people, impact change, and create programming that generates a sense of
                            community and belonging.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-gray"></i>
                            <i className="fas fa-hand-spock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Our Vision</h4>
                        <p className="text-muted">
                            The House was created as a vehicle for POC to build more inclusive environments to engage around seemingly non-traditional spaces
                            such as gaming, comics, science fiction, media, and technology. We want to ensure that the representation of and consumption by POC
                            is normalized rather than seen as an anomaly. We strive to increase representation for adults and youth of color, create programs
                            that build community and create programming that generates a sense of belonging where the community as a whole can discuss pertinent
                            and sensitive issues using science fiction, fantasy, comics, and games as a catalyst for conversation.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-gray"></i>
                            <i className="fas fa-dice-d20 fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">What we do</h4>
                        <p className="text-muted">
                        We create space for community members of all backgrounds to
            discuss sensitive issues using &quot;geek culture&quot; as the catalyst for
            the conversation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
