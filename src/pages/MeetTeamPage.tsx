import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'
import GmaBanner from '../components/GmaBanner'

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
Despite being a terrible speller, she loves Quiddler.`,
'Stephani Tyrance':`Stephani designs and manages HIP's national capacity-building Leadership Institute for individuals working on health equity in local health departments. As a member of the capacity building team, she also facilitates workshops and provides technical assistance to public health organizations seeking to center equity in their practice. Over the last 18 years Stephani has been focused on advancing racial justice practices and supporting communities of color.

Stephani lives with her husband and seven-year-old in Kansas. They are a sports loving family that cheer on the Carolina Tar Heels, the Philadelphia Eagles and now the Jacksonville Jaguars. Stephani also enjoys spending time at the beach, hitting the trails, game nights and blerd culture, and serving her community.
`,
'Nancy Williams':`Nancy Williams has been practicing agriculture for a long time: first as a 4-H member in elementary school then as an FFA member in high school. Her family raised most of the produce they consumed; at one time maintaining as many as six gardens to feed themselves and share with neighbors. Nancy earned scholarships to study Horticulture. She earned a Bachelor of Science degree at Louisiana State University then pursued a master of science in Weed Science with a minor in Plant Pathology at Cornell University. Nancy has diverse experiences in agriculture, from corporations, serving as an agronomist for local farmers and entrepreneurs to grassroots organizing and management for nonprofit community organizations. For nearly 15 years, Nancy served as an IT leader for Boys & Girls Clubs of the Midlands; where she led award winning programs, increased technology integration, and supported improved organizational outcomes.`,
'Denise Chapman': `Denise Chapman graduated from Creighton University with a BA in theatre. She went on to receive her MFA from the Theatre Conservatory at the Chicago College of Performing Arts at Roosevelt University. 

After graduation she performed with Qwest Educational Programs touring elementary and middle schools in the greater Chicago land area and worked as a Solo performing artist. She returned to Omaha in 2006 and worked with Blue Barn’s Witching hour for three years as Co-Artistic director/ensemble member and at the Omaha Community Playhouse as the director of education and outreach. 

She is a strong believer that art changes our lives for the better, it gives a voice to those who feel like they are not being heard, and expresses a vision of hope to all those who are touched by it. 

Currently she is the Artistic Director of  Theatre, The Union for Contemporary Art and an adjunct professor at Creighton University. `,
'Jessica Ehule': `Jessica Ehule (she/her) is a courageous public health leader with a passion for addressing health
and racial equity through highlighting root cause issues that contribute to inequities in health
outcomes today. She is the Birth Justice Program Manager at I Be Black Girl, the only
reproductive justice organization in Nebraska. Jessica has served in the maternal and child
health space for over a decade and is committed to working towards a society in which people
are the priority. She is a life-long learner with specific interest in science, history, and sociology.
In her leisure time she enjoys reading, exercising, exploring cuisines of the world, and hanging
out with her black pug named Onyx.`


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
            <div className="container-fluid w-100 h-auto mt-5 p-0">
                <img src="./img/lxn.png" className="img-fluid w-100 p-0 mt-4 top-image" alt="Patience" />
            </div>
            <section className="" style={{ padding: '0', margin: 0 }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="text-center" style={{ backgroundColor: 'var(--hoacc-teal)', color: 'black' }}>
                                <h1 className="text-uppercase py-3">Meet the Team</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Modal show={show} onHide={handleClose}>
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
                    <h1 className="text-center mt-5">Staff</h1>
                    <div className="row  py-5">
                        <div className="col">
                            <div className="card">
                                <img src="./img/team/jade.jpg" className="card-img-top" alt="Jade Rogers" />
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
                                    <Button variant="primary" onClick={() => handleShow('Jade Rogers')} className="about-btn" >
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        
                        </div>
                         <div className="col">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/team/Nik Whitcomb.JPG" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Nik Whitcomb</h5>
                                    <p className="card-text">More Info Coming Soon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./img/team/VictoriaJones.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Victoria Jones</h5>
                                    <input type="checkbox" id="jade" />
                                    <p className="card-text">
                                        Victoria helps bring the House of Afros, Capes, and Curls mission and vision to life through graphics and design. Before
                                        joining H.O.A.C.C, Victoria did work with local nonprofits Voices for Children and Holland Children&apos;s Movement and
                                        Institute. She graduated with her B.S. in Communications from the University of Nebraska at Omaha in December of 2015.
                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Victoria Jones')} className="about-btn">
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row  py-5">
                        <h2 className="text-center mt-5">Board</h2>
                        <div className="col">
                            <div className="card" style={{width:'250px'}}>
                                <img src="./img/team/wayneBrown.jpg" className="card-img-top" style={{height:'200px'}} />
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
                                    <Button variant="primary" onClick={() => handleShow('Wayne Brown, Esq.,')} className="about-btn">
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./img/team/katrinaAdams.jpg" className="card-img-top team-img-size" />
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
                                    <Button variant="primary" onClick={() => handleShow('Katrina Adams')} className="about-btn">
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./img/team/juliaParker.png" className="card-img-top team-img-size" />
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
                                    <Button variant="primary" onClick={() => handleShow('Julia Parker')} className="about-btn">
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./img/team/jessicaEhule.png" className="card-img-top team-img-size" />
                                <div className="card-body">
                                    <h5 className="card-title">Jessica Ehule MS, MSPH</h5>
                                    <p className="card-text">
                                    Jessica Ehule (she/her) is a courageous public health leader with a passion for addressing health
and racial equity through highlighting root cause issues that contribute to inequities in health
outcomes today. She is the Birth Justice Program Manager at I Be Black Girl, the only
reproductive justice organization in Nebraska. Jessica has served in the maternal and child
health space for over a decade and is committed to working towards a society in which people
are the priority. She is a life-long learner with specific interest in science, history, and sociology.
In her leisure time she enjoys reading, exercising, exploring cuisines of the world, and hanging
out with her black pug named Onyx.
                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Jessica Ehule')} className="about-btn">
                                        Read More
                                    </Button>
                                    <label htmlFor="expanded" role="button">
                                        read more
                                    </label>
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
                                    <Button variant="primary" onClick={() => handleShow('Rachel Grossman')} className="about-btn">
                                        Read More
                                    </Button>
                                    <label htmlFor="expanded" role="button">
                                        read more
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-5">
                        <h2 className="text-center mt-4">Advisory Council</h2>
                        <div className="col">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/HOACC.png" className="card-img-top team-img-size" />
                                <div className="card-body">
                                    <h5 className="card-title">Denise Chapman</h5>
                                    <input type="checkbox" id="expanded" />
                                    <p className="card-text">
                                    Denise Chapman graduated from Creighton University with a BA in theatre. She went on to receive her MFA from the Theatre Conservatory at the Chicago College of Performing Arts at Roosevelt University. 

After graduation she performed with Qwest Educational Programs touring elementary and middle schools in the greater Chicago land area and worked as a Solo performing artist. She returned to Omaha in 2006 and worked with Blue Barn&apos;s Witching hour for three years as Co-Artistic director/ensemble member and at the Omaha Community Playhouse as the director of education and outreach. 

She is a strong believer that art changes our lives for the better, it gives a voice to those who feel like they are not being heard, and expresses a vision of hope to all those who are touched by it. 

Currently she is the Artistic Director of  Theatre, The Union for Contemporary Art and an adjunct professor at Creighton University. 
                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Denise Chapman')} className="about-btn">
                                        Read More
                                    </Button>
                                    <label htmlFor="expanded" role="button">
                                        read more
                                    </label>
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
                                <img src="./img/team/mikStarlaFitch.jpg" className="card-img-top team-img-size" />
                                <div className="card-body">
                                    <h5 className="card-title">Mik & Starla Fitch</h5>
                                    <p className="card-text">More Info Coming Soon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/team/nancyWilliams.png" className="card-img-top team-img-size"/>
                                <div className="card-body">
                                    <h5 className="card-title">Nancy Williams</h5>
                                    <input type="checkbox" id="expanded" />
                                    <p className="card-text">
                                    Nancy Williams has been practicing agriculture for a long time: first as a 4-H member in elementary school then as an FFA member in high school. Her family raised most of the produce they consumed; at one time maintaining as many as six gardens to feed themselves and share with neighbors. Nancy earned scholarships to study Horticulture. She earned a Bachelor of Science degree at Louisiana State University then pursued a master of science in Weed Science with a minor in Plant Pathology at Cornell University. Nancy has diverse experiences in agriculture, from corporations, serving as an agronomist for local farmers and entrepreneurs to grassroots organizing and management for nonprofit community organizations. For nearly 15 years, Nancy served as an IT leader for Boys & Girls Clubs of the Midlands; where she led award winning programs, increased technology integration, and supported improved organizational outcomes.
                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Nancy Williams')} className="about-btn">
                                        Read More
                                    </Button>
                                    <label htmlFor="expanded" role="button">
                                        read more
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '18rem;' }}>
                                <img src="./img/team/Stephanie Tyrance.jpg" className="card-img-top team-img-size"  />
                                <div className="card-body">
                                    <h5 className="card-title">Stephani Tyrance</h5>
                                    <input type="checkbox" id="expanded" />
                                    <p className="card-text">
                                    Stephani designs and manages HIP’s national capacity-building Leadership Institute for individuals working on health equity in local health departments. As a member of the capacity building team, she also facilitates workshops and provides technical assistance to public health organizations seeking to center equity in their practice. Over the last 18 years Stephani has been focused on advancing racial justice practices and supporting communities of color.

Stephani lives with her husband and seven-year-old in Kansas. They are a sports loving family that cheer on the Carolina Tar Heels, the Philadelphia Eagles and now the Jacksonville Jaguars. Stephani also enjoys spending time at the beach, hitting the trails, game nights and blerd culture, and serving her community.

                                    </p>
                                    <Button variant="primary" onClick={() => handleShow('Stephani Tyrance')} className="about-btn">
                                        Read More
                                    </Button>
                                    <label htmlFor="expanded" role="button">
                                        read more
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div> */}
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

export default MeetTeamPage
