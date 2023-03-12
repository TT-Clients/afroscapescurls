import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.INTRO_ROUTE)
    }
    const valuesArr = [
        {
            title: 'Authenticity',
            description: 'We are blerds and nerds',
            icon: 'fa-atom'
        },
        { title: 'Connection', description: "We will leverage our community's collective genius to build and empower others", icon: 'fa-comments' },
        { title: 'Growth', description: 'We value learning, knowledge and learning for life', icon: 'fa-user-graduate' },
        { title: 'Impact', description: 'We chart our impact to improve and advance our work', icon: 'fa-chart-bar' },
        {
            title: 'Equity',
            description: 'We see the beauty in our differences and recognize the power in supporting the community in any way it needs.',
            icon: 'fa-medal'
        },
        { title: 'Innovation', description: 'We believe in the power of change and adaptability', icon: 'fa-lightbulb' },
        { title: 'Joy', description: 'We create safe spaces that empower, engage and inspire others', icon: 'fa-star' }
    ]

    return (
        <>
            <TopNav title="About" />
            <div className="container-fluid w-100 h-auto m-0 p-0">
                <img src="img/games2.jpg" className="img-fluid w-100 p-0 m-0 top-image" alt="Patience" />
            </div>

            <section className="" style={{ padding: '0', margin: 0 }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="text-center" style={{ backgroundColor: 'var(--hoacc-orange)', color: 'black' }}>
                                <h1 className="text-uppercase">About the house</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center mt-4">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-gray"></i>
                                <i className="fas fa-gamepad fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">Who We Are</h4>
                            <p className="text-muted">
                                We are always looking for ways to build community, connect people, impact change, and create programming that generates a sense
                                of community and belonging.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-gray"></i>
                                <i className="fas fa-hand-spock fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">Our Vision</h4>
                            <p className="text-muted">
                                The House was created as a vehicle for POC to build more inclusive environments to engage around seemingly non-traditional
                                spaces such as gaming, comics, science fiction, media, and technology. We want to ensure that the representation of and
                                consumption by POC is normalized rather than seen as an anomaly. We strive to increase representation for adults and youth of
                                color, create programs that build community and create programming that generates a sense of belonging where the community as a
                                whole can discuss pertinent and sensitive issues using science fiction, fantasy, comics, and games as a catalyst for
                                conversation.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-gray"></i>
                                <i className="fas fa-dice-d20 fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">What we do</h4>
                            <p className="text-muted">
                                We create space for community members of all backgrounds to discuss sensitive issues using &quot;geek culture&quot; as the
                                catalyst for the conversation.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                         <div className="col">
                            <img src="img/Nukecon.jpg" className="rounded img-thumbnail" alt="..." />
                            </div>
                            <div className="col">
                                <img src="img/afrocon1.jpg" className="rounded img-thumbnail" alt="..." />
                            </div>


                    </div>
                    <div className="row mt-4">
                        {valuesArr.map((value, idx) => (
                            <div className="col-md-3" style={{ textAlign: 'center' }} key={idx}>
                                <div>
                                    <span className="fa-stack fa-2x my-2">
                                        <i className="fas fa-circle fa-stack-2x text-blue gradient"></i>
                                        <i className="fas ${value.icon} fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h5>${value.title}</h5>
                                    <p>${value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutPage
