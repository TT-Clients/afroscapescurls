import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GmaBanner from '../components/GmaBanner'

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
            icon: 'fas fa-atom fa-stack-1x fa-inverse'
        },
        { title: 'Connection', description: "We will leverage our community's collective genius to build and empower others", icon: 'fas fa-comments fa-stack-1x fa-inverse' },
        { title: 'Growth', description: 'We value learning, knowledge and learning for life', icon: 'fas fa-user-graduate fa-stack-1x fa-inverse' },
        { title: 'Impact', description: 'We chart our impact to improve and advance our work', icon: 'fas fa-chart-bar fa-stack-1x fa-inverse' },
        {
            title: 'Equity',
            description: 'We see the beauty in our differences and recognize the power in supporting the community in any way it needs.',
            icon: 'fas fa-medal fa-stack-1x fa-inverse'
        },
        { title: 'Innovation', description: 'We believe in the power of change and adaptability', icon: 'fas fa-lightbulb fa-stack-1x fa-inverse' },
        { title: 'Joy', description: 'We create safe spaces that empower, engage and inspire others', icon: 'fas fa-star fa-stack-1x fa-inverse' }
    ]

    return (
        <>
            <TopNav title="About" />
            <div className="container-fluid w-100 h-auto mt-5 p-0 d-flex justify-content-center">
                <img src="./img/HOACC.png" className="img-fluid p-0 mt-5 top-image" alt="Patience" />
            </div>

            <section className="" style={{ padding: '0', margin: 0 }}>
                <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
                    <div className="row" style={{ padding: 0, margin: 0 }}>
                        <div className="col" style={{ padding: 0, margin: 0 }}>
                            <div className="text-center" style={{ backgroundColor: 'var(--hoacc-teal)', color: 'black' }}>
                                <h1 className="text-uppercase py-3">About the house</h1>
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
                        <ImageList sx={{ width: '100%', height: 500 }} cols={2} rowHeight={164}>
                            <ImageListItem >
                                <img
                                    srcSet={`./img/whatwedo.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`./img/whatwedo.jpg?w=164&h=164&fit=crop&auto=format`}
                                    alt="img1"
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem >
                                <img
                                    srcSet={`./img/afrocon1.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`./img/afrocon1.jpg?w=164&h=164&fit=crop&auto=format`}
                                    alt="img2"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </ImageList>
                        {/* <div className="col">
                            <img src="./img/whatwedo.jpg" className="rounded img-thumbnail" alt="..." />
                        </div>
                        <div className="col">
                            <img src="./img/afrocon1.jpg" className="rounded img-thumbnail" alt="..." />
                        </div> */}


                    </div>
                    <div className="row mt-4">
                        {valuesArr.map((value, idx) => (
                            <div className="col-md-3" style={{ textAlign: 'center' }} key={idx}>
                                <div>
                                    {/* <FontAwesomeIcon icon={['fab', value.icon]} /> */}
                                    <span className="fa-stack fa-2x my-2">
                                        <i className="fas fa-circle fa-stack-2x text-blue gradient"></i>
                                        <i className={value.icon}></i>
                                    </span>
                                    <h5>{value.title}</h5>
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <div className="row">
                <div className="col">
                    <GmaBanner />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage
