import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'
import GmaBanner from '../components/GmaBanner'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const MeetTeamPage: React.FC = () => {
    const [name, setName] = useState(false)
    const [bio, setBio] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false)
    const handleClickOpen = (data: any) => {
        console.log(data)
        setBio(data.bio)
        //@ts-ignore
        setName(data.title)
        setOpen(true);
    };


    const staff = [
        {
            img: './img/team/jade.jpg',
            title: 'Jade Rogers',
            bio: ` Jade Rogers is a Historian, an adjunct professor at Metropolitan Community College and the University of Nebraska at
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

        },
        {
            img: './img/team/VictoriaJones.png',
            title: 'Victoria jones',
            bio: `Victoria helps bring the House of Afros, Capes, and Curls mission and vision to life through graphics and design. Before
            joining H.O.A.C.C, Victoria did work with local nonprofits Voices for Children and Holland Children&apos;s Movement and
            Institute. She graduated with her B.S. in Communications from the University of Nebraska at Omaha in December of 2015.`,
            'Wayne Brown, Esq.,': `Wayne Brown is Vice President of Programs for the Urban League of Nebraska. A native of Omaha, Wayne joined the Army
            after graduating from Benson High School. After an exciting ten years in the service, he graduated magna cum laude from
            East Tennessee State University. In 2009, he graduated from Creighton Law School. He has served the Omaha community in a
            variety of non-profit capacities, from Chief Career Officer of the Avenue Scholars Foundation to Vice President of the
            Omaha Community Foundation. In his spare time Wayne enjoys biking, reading comic books and mentoring his three daughters
            in the ways of the force.`,
        },
    ];

    const board = [
        {
            img: './img/team/wayneBrown.jpg',
            title: 'Wayne Brown, Esq.,',
            bio: `Wayne Brown is Vice President of Programs for the Urban League of Nebraska. A native of Omaha, Wayne joined the Army
            after graduating from Benson High School. After an exciting ten years in the service, he graduated magna cum laude from
            East Tennessee State University. In 2009, he graduated from Creighton Law School. He has served the Omaha community in a
            variety of non-profit capacities, from Chief Career Officer of the Avenue Scholars Foundation to Vice President of the
            Omaha Community Foundation. In his spare time Wayne enjoys biking, reading comic books and mentoring his three daughters
            in the ways of the force.`,
        },
        {
            img: './img/team/katrinaAdams.jpg',
            title: 'Katrina Adams',
            bio: `Katrina Adams is the Community Investment Program Manager at the Omaha Community Foundation. Ms. Adams facilitates the
            Foundation's resident-led grant making programs; serving as a conduit between nonprofit organizations, community
            members, and the generous supporters that make these programs possible. She is passionate about advocating for
            nonprofits, especially those working with and alongside communities of color and underrepresented populations. Ms. Adams
            believes there is something intrinsic that connects us all. As a servant-leader, this perspective is the foundation on
            which she builds relationships within the Omaha-metro's diverse, intersectional community.`,
        },
        {
            img: './img/team/juliaParker.png',
            title: 'Julia Parker',
            bio: `Julia Parker just recently began an MBA program in Business at Boston University in Boston, Massachusetts. Prior to
            leaving Omaha, she was the Executive Director of the Omaha Small Business Network (OSBN), an Omaha-based nonprofit whose
            mission is to assist historically undercapitalized entrepreneurs achieve financial inclusion. Prior to this role, Ms.
            Parker was the Director of Operations and Communications at Building Bright Futures for six years. Her connections
            within the community and lived-experience as a black female business owner were the catalyst that led her to become an
            advocate for underserved, local entrepreneurs and nonprofits; providing the tools needed to become successful and
            sustainable entities. Ms. Parker believes community-based micro-lenders, to provide access to proven pathways for
            success, thus resulting in community and economic development.`
        },
        {
            img: './img/team/jessicaEhule.png',
            title: 'Jessica Ehule MS, MSPH',
            bio: `Jessica Ehule (she/her) is a courageous public health leader with a passion for addressing health
        and racial equity through highlighting root cause issues that contribute to inequities in health
        outcomes today. She is the Birth Justice Program Manager at I Be Black Girl, the only
        reproductive justice organization in Nebraska. Jessica has served in the maternal and child
        health space for over a decade and is committed to working towards a society in which people
        are the priority. She is a life-long learner with specific interest in science, history, and sociology.
        In her leisure time she enjoys reading, exercising, exploring cuisines of the world, and hanging
        out with her black pug named Onyx.`},
        {
            img: './img/team/RachelGrossman.JPG',
            title: 'Rachel Grossman',
            bio: ` Rachel Grossman (she/her) is loves beets, brussels sprouts, action films, dogs, infographics, the color pink, and
    well-facilitated discussions. For two decades she worked in and with nonprofit organizations across the US and U.K. as a
    program manager, organizational leader, and equity and justice business consultant. At present she&apos;s the leader of
    strategy and culture at Omaha Girls Rock. She was raised on sci-fi and action films, and loves to play table-top games.
    Despite being a terrible speller, she loves Quiddler.`}
    ]
    const advisory = [
        {
            img: './img/HOACC.png',
            title: 'Denise Chapman',
            bio: `Denise Chapman graduated from Creighton University with a BA in theatre. She went on to receive her MFA from the Theatre Conservatory at the Chicago College of Performing Arts at Roosevelt University. 

        After graduation she performed with Qwest Educational Programs touring elementary and middle schools in the greater Chicago land area and worked as a Solo performing artist. She returned to Omaha in 2006 and worked with Blue Barn’s Witching hour for three years as Co-Artistic director/ensemble member and at the Omaha Community Playhouse as the director of education and outreach. 
        
        She is a strong believer that art changes our lives for the better, it gives a voice to those who feel like they are not being heard, and expresses a vision of hope to all those who are touched by it. 
        
        Currently she is the Artistic Director of  Theatre, The Union for Contemporary Art and an adjunct professor at Creighton University. `
        },
        {
            img: './img/HOACC.png',
            title: 'Kelly Coble',
            bio: `More info Coming Soon`
        },
        {
            img: './img/HOACC.png',
            title: 'Krystal Fox', bio: `More info coming soon`
        },
        {
            img: './img/HOACC.png',
            title: 'Leslie Smith',
            bio: `More info coming soon`
        },
        { img: './img/team/nancyWilliams.png', bio: `More info coming soon`, title: 'Nancy Williams' },
        {
            img: `./img/team/Stephanie Tyrance.jpg`,
            title: 'Stephani Tyrance',
            bio: `Stephani designs and manages HIP's national capacity-building Leadership Institute for individuals working on health equity in local health departments. As a member of the capacity building team, she also facilitates workshops and provides technical assistance to public health organizations seeking to center equity in their practice. Over the last 18 years Stephani has been focused on advancing racial justice practices and supporting communities of color.
Stephani lives with her husband and seven-year-old in Kansas. They are a sports loving family that cheer on the Carolina Tar Heels, the Philadelphia Eagles and now the Jacksonville Jaguars. Stephani also enjoys spending time at the beach, hitting the trails, game nights and blerd culture, and serving her community.
`
        },
    ]




    /**
     * Call this function to redirect the user to the homepage.
     */

    return (
        <>
            <TopNav title="Meet the Team" />
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
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    id="bio-info"
                >
                    <DialogTitle id="alert-dialog-title">
                        {name}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {bio}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>

                    </DialogActions>
                </Dialog>
                <h2 className="text-center">Staff</h2>
                <div className="container-fluid w-100 h-auto p-0 d-flex justify-content-center">

                    <ImageList sx={{ width: 700, height: 400 }}>

                        {staff.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    // subtitle={item.author}
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item.title}`}
                                            onClick={() => handleClickOpen(item)}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
                <h2 className="text-center">Board</h2>
                <div className="container-fluid w-100 h-auto p-0 d-flex justify-content-center">

                    <ImageList sx={{ width: '100%', height: 375 }} cols={5}>

                        {board.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    // subtitle={item.author}
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item.title}`}
                                            onClick={() => handleClickOpen(item)}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
                <h2 className="text-center">Advisory Council</h2>
                <div className="container-fluid w-100 h-auto p-0 d-flex justify-content-center">

                    <ImageList sx={{ width: '100%', height: 375 }} cols={6}>

                        {advisory.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=200&fit=crop&auto=format`} style={{ height: '150px' }}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    // subtitle={item.author}
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item.title}`}
                                            onClick={() => handleClickOpen(item)}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
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

export default MeetTeamPage
