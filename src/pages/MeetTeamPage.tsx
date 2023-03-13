import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const MeetTeamPage: React.FC = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [name, setName] = useState(false)
    const [bio, setBio] = useState(false)

    const handleClose = () => setShow(false)

    const handleShow = (member: string) => {
        setShow(true)
        //@ts-ignore
        setBio(bios[member])
        //@ts-ignore
        setName(member)
    }
    const bios = {
        'Jade Rogers': ` Jade Rogers is a Historian, an adjunct professor at Metropolitan Community College and the University of Nebraska at
        Omaha and the Founder and Chief Innovation Officer of The House of Afros, Capes, & Curls. After receiving a B.A. in
        Black Studies and Elementary Education, she obtained a Master's in African American World Studies from the
        University of Iowa. She has also completed all course work towards her PhD in History at Morgan State University and has
        training as an Archivist and Oral Historian. Jade has taught on the elementary level in the District of Columbia Public
        Schools, and the University of Iowa as well. She has worked with numerous non-profit youth serving organizations
        including Boys & Girls Clubs of Omaha and Greater Washington in Maryland, Girls Inc., The Center for Holistic
        Development and most recently served as the Youth Engagement Manager at The Union for Contemporary Arts. Building
        community and service are a part of Jade's strong belief system. A Class XIX graduate from Heartland Blueprint, a
        United Way of the Midlands program to help increase minority racial/ethnic volunteer leadership, and she has served on
        many education and non-profit executive boards. With over 20 years of teaching and community engagement experience, she
        strives to raise the visibility of the tremendous contributions and accomplishments of African Americans in the Midwest.
        For The Great Plains Black History Museum, she has served as its Archivist, facilitates public programs on a variety of
        historical topics and also conducts Oral History and Genealogy workshops. And...she's a blerd at heart. Science
        fiction, fantasy, World of Warcraft, The Sims and Octavia Butler. Star Wars + Star Trek + the X-Men hold equal space in
        her heart.`,
        'Victoria Jones': `Victoria helps bring the House of Afros, Capes, and Curls mission and vision to life through graphics and design. Before
        joining H.O.A.C.C, Victoria did work with local nonprofits Voices for Children and Holland Children&apos;s Movement and
        Institute. She graduated with her B.S. in Communications from the University of Nebraska at Omaha in December of 2015.`,
        'Wayne Brown, Esq.,':  `Wayne Brown is Vice President of Programs for the Urban League of Nebraska. A native of Omaha, Wayne joined the Army
        after graduating from Benson High School. After an exciting ten years in the service, he graduated magna cum laude from
        East Tennessee State University. In 2009, he graduated from Creighton Law School. He has served the Omaha community in a
        variety of non-profit capacities, from Chief Career Officer of the Avenue Scholars Foundation to Vice President of the
        Omaha Community Foundation. In his spare time Wayne enjoys biking, reading comic books and mentoring his three daughters
        in the ways of the force.`,
        'Katrina Adams':`Katrina Adams is the Community Investment Program Manager at the Omaha Community Foundation. Ms. Adams facilitates the
        Foundation's resident-led grant making programs; serving as a conduit between nonprofit organizations, community
        members, and the generous supporters that make these programs possible. She is passionate about advocating for
        nonprofits, especially those working with and alongside communities of color and underrepresented populations. Ms. Adams
        believes there is something intrinsic that connects us all. As a servant-leader, this perspective is the foundation on
        which she builds relationships within the Omaha-metro's diverse, intersectional community.`,
'Julia Parker':` Julia Parker just recently began an MBA program in Business at Boston University in Boston, Massachusetts. Prior to
leaving Omaha, she was the Executive Director of the Omaha Small Business Network (OSBN), an Omaha-based nonprofit whose
mission is to assist historically undercapitalized entrepreneurs achieve financial inclusion. Prior to this role, Ms.
Parker was the Director of Operations and Communications at Building Bright Futures for six years. Her connections
within the community and lived-experience as a black female business owner were the catalyst that led her to become an
advocate for underserved, local entrepreneurs and nonprofits; providing the tools needed to become successful and
sustainable entities. Ms. Parker believes community-based micro-lenders, to provide access to proven pathways for
success, thus resulting in community and economic development.`,
'Rachel Grossman':` Rachel Grossman (she/her) is loves beets, brussels sprouts, action films, dogs, infographics, the color pink, and
well-facilitated discussions. For two decades she worked in and with nonprofit organizations across the US and U.K. as a
program manager, organizational leader, and equity and justice business consultant. At present she&apos;s the leader of
strategy and culture at Omaha Girls Rock. She was raised on sci-fi and action films, and loves to play table-top games.
Despite being a terrible speller, she loves Quiddler.`


    }
    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.INTRO_ROUTE)
    }

    return (
        <>
            <TopNav title="Meet the Team" />
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '4em' }}>Meet the Team</h1>
            </div>
            <div className="container-fluid w-100 h-auto m-0 p-0">
                <img src="./img/lxn.png" className="img-fluid w-100 p-0 m-0 top-image" alt="Patience" />
            </div>
            <section className="" style={{ padding: '0', margin: 0 }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="text-center" style={{ backgroundColor: 'var(--hoacc-orange)', color: 'black' }}>
                                <h1 className="text-uppercase">Meet the Team</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{bio}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="container">
                    <h1 className="text-center mt-3">Staff</h1>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src="./img/team/jade.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Jade Rogers</h5>
                                    <input type="checkbox" id="jade" />
                                    <p className="card-text">
                                        Jade Rogers is a Historian, an adjunct professor at Metropolitan Community College and the University of Nebraska at
                                        Omaha and the Founder and Chief Innovation Officer of The House of Afros, Capes, & Curls. After receiving a B.A. in
                                        Black Studies and Elementary Education, she obtained a Master&apos;s in African American World Studies from the
                                        University of Iowa. She has also completed all course work towards her PhD in History at Morgan State University and has
                                        training as an Archivist and Oral Historian. Jade has taught on the elementary level in the District of Columbia Public
                                        Schools, and the University of Iowa as well. She has worked with numerous non-profit youth serving organizations
                                        including Boys & Girls Clubs of Omaha and Greater Washington in Maryland, Girls Inc., The Center for Holistic
                                        Development and most recently served as the Youth Engagement Manager at The Union for Contemporary Arts. Building
                                        community and service are a part of Jade&apos;s strong belief system. A Class XIX graduate from Heartland Blueprint, a
                                        United Way of the Midlands program to help increase minority racial/ethnic volunteer leadership, and she has served on
                                        many education and non-profit executive boards. With over 20 years of teaching and community engagement experience, she
                                        strives to raise the visibility of the tremendous contributions and accomplishments of African Americans in the Midwest.
                                        For The Great Plains Black History Museum, she has served as its Archivist, facilitates public programs on a variety of
                                        historical topics and also conducts Oral History and Genealogy workshops. And...she&apos;s a blerd at heart. Science
                                        fiction, fantasy, World of Warcraft, The Sims and Octavia Butler. Star Wars + Star Trek + the X-Men hold equal space in
                                        her heart.
                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Jade Rogers')}>
                                        Read More
                                    </Button>
                                </div>
                            </div>
                            {/* <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/team/Carla Stillwell.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Carla Stillwell</h5>
                                    <p className="card-text">More Info Coming Soon</p>
                                </div>
                            </div> */}
                        </div>
                         <div className="col">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/team/Nik Whitcomb.JPG" className="card-img-top" style={{ height: '365px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Nik Whitcomb</h5>
                                    <p className="card-text">More Info Coming Soon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./img/HOACC.png" className="card-img-top" alt="..." style={{ height: '365px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Victoria Jones</h5>
                                    <input type="checkbox" id="jade" />
                                    <p className="card-text">
                                        Victoria helps bring the House of Afros, Capes, and Curls mission and vision to life through graphics and design. Before
                                        joining H.O.A.C.C, Victoria did work with local nonprofits Voices for Children and Holland Children&apos;s Movement and
                                        Institute. She graduated with her B.S. in Communications from the University of Nebraska at Omaha in December of 2015.
                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Victoria Jones')}>
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row">
                        <h2 className="text-center mt-5">Board</h2>
                        <div className="col">
                            <div className="card" style={{width:'250px'}}>
                                <img src="./img/HOACC.png" className="card-img-top" style={{height:'200px'}} />
                                <div className="card-body">
                                    <h5 className="card-title">Wayne Brown, Esq.,</h5>
                                    <p className="card-text">
                                        Wayne Brown is Vice President of Programs for the Urban League of Nebraska. A native of Omaha, Wayne joined the Army
                                        after graduating from Benson High School. After an exciting ten years in the service, he graduated magna cum laude from
                                        East Tennessee State University. In 2009, he graduated from Creighton Law School. He has served the Omaha community in a
                                        variety of non-profit capacities, from Chief Career Officer of the Avenue Scholars Foundation to Vice President of the
                                        Omaha Community Foundation. In his spare time Wayne enjoys biking, reading comic books and mentoring his three daughters
                                        in the ways of the force.
                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Wayne Brown, Esq.,')}>
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./img/HOACC.png" className="card-img-top team-img-size" />
                                <div className="card-body">
                                    <h5 className="card-title">Katrina Adams</h5>
                                    <p className="card-text">
                                        Katrina Adams is the Community Investment Program Manager at the Omaha Community Foundation. Ms. Adams facilitates the
                                        Foundation’s resident-led grant making programs; serving as a conduit between nonprofit organizations, community
                                        members, and the generous supporters that make these programs possible. She is passionate about advocating for
                                        nonprofits, especially those working with and alongside communities of color and underrepresented populations. Ms. Adams
                                        believes there is something intrinsic that connects us all. As a servant-leader, this perspective is the foundation on
                                        which she builds relationships within the Omaha-metro’s diverse, intersectional community.
                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Katrina Adams')}>
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./img/team/Julia Parker.JPG" className="card-img-top team-img-size" />
                                <div className="card-body">
                                    <h5 className="card-title">Julia Parker</h5>
                                    <p className="card-text">
                                        Julia Parker just recently began an MBA program in Business at Boston University in Boston, Massachusetts. Prior to
                                        leaving Omaha, she was the Executive Director of the Omaha Small Business Network (OSBN), an Omaha-based nonprofit whose
                                        mission is to assist historically undercapitalized entrepreneurs achieve financial inclusion. Prior to this role, Ms.
                                        Parker was the Director of Operations and Communications at Building Bright Futures for six years. Her connections
                                        within the community and lived-experience as a black female business owner were the catalyst that led her to become an
                                        advocate for underserved, local entrepreneurs and nonprofits; providing the tools needed to become successful and
                                        sustainable entities. Ms. Parker believes community-based micro-lenders, to provide access to proven pathways for
                                        success, thus resulting in community and economic development.
                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Julia Parker')}>
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./img/HOACC.png" className="card-img-top team-img-size" />
                                <div className="card-body">
                                    <h5 className="card-title">Jessica Ehule MS, MSPH</h5>
                                    <p className="card-text">More Info Coming Soon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./img/team/RachelGrossman.JPG" className="card-img-top team-img-size"  />
                                <div className="card-body">
                                    <h5 className="card-title">Rachel Grossman</h5>
                                    <input type="checkbox" id="expanded" />
                                    <p className="card-text">
                                        Rachel Grossman (she/her) is loves beets, brussels sprouts, action films, dogs, infographics, the color pink, and
                                        well-facilitated discussions. For two decades she worked in and with nonprofit organizations across the US and U.K. as a
                                        program manager, organizational leader, and equity and justice business consultant. At present she&apos;s the leader of
                                        strategy and culture at Omaha Girls Rock. She was raised on sci-fi and action films, and loves to play table-top games.
                                        Despite being a terrible speller, she loves Quiddler.
                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Rachel Grossman')}>
                                        Read More
                                    </Button>
                                    <label htmlFor="expanded" role="button">
                                        read more
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="text-center mt-4">Advisory Council</h2>
                        <div className="col">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/HOACC.png" className="card-img-top team-img-size" />
                                <div className="card-body">
                                    <h5 className="card-title">Denise Chapman</h5>
                                    <p className="card-text">More Info Coming Soon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/HOACC.png" className="card-img-top team-img-size"/>
                                <div className="card-body">
                                    <h5 className="card-title">Kelly Coble</h5>
                                    <p className="card-text">More Info Coming Soon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/team/Miklos Fitch.jpg" className="card-img-top team-img-size" />
                                <div className="card-body">
                                    <h5 className="card-title">Mik & Starla Fitch</h5>
                                    <p className="card-text">More Info Coming Soon</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/team/Stephanie Tyrance.jpg" className="card-img-top team-img-size"  />
                                <div className="card-body">
                                    <h5 className="card-title">Stephanie Tyrance</h5>
                                    <p className="card-text">More Info Coming Soon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/HOACC.png" className="card-img-top team-img-size"/>
                                <div className="card-body">
                                    <h5 className="card-title">Nancy Williams</h5>
                                    <p className="card-text">More Info Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MeetTeamPage
