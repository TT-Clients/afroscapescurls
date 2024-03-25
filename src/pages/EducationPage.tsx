import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'
import GmaBanner from '../components/GmaBanner'
import Footer from '../components/Footer'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const EducationPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.INTRO_ROUTE)
    }

    return (
        <>
            <TopNav title="Education" />
            <div className="container-fluid w-100 h-auto m-0 p-0">
                <img src="./img/kids/yhds.jpeg" className="img-fluid w-100 pt-4 mt-5 top-image" alt="Patience" style={{ height: '50%' }} />
            </div>
            {/* <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '4em' }}>Education</h1>
            
            </div> */}

            <section className="" id="services" style={{ padding: 0 }}>
                <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
                    <div className="row" style={{ padding: 0, margin: 0 }}>
                        <div className="col" style={{ padding: 0, margin: 0 }}>
                            <div className="text-center" style={{ backgroundColor: 'var(--hoacc-blue)', color: 'black' }}>
                                <h1 className="text-uppercase py-3">Education</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                <h3 className="section-subheading">
                                    Businesses and fellow foundations have given their time and support to help us make a difference in children&apos;s lives.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>

                    <div className="row mt-5 d-flex justify-content-center">

                        <div className="col">
                            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="./img/kids/yhdjr.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">Junior Young History Detectives</h5>
                                            <p className="card-text" style={{ overflow: "visible" }}>  Junior Young History Detectives is open to 9-11 year olds, interested in learning Black History, Omaha History in fun and engaging ways. This year&apos;s camps will explore storytelling as a tool to present their discoveries of the people, places and events in North Omaha.
                                                Summer Junior Young History Detectives Program is <strong>Monday-Friday, July 22-26, 2024 10am-5pm, at the University of Nebraska at Omaha</strong>.
                                                <a className="btn btn-info" href="https://form.jotform.com/240456639969171">Junior Young History Detectives Interest Form 2024</a></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        <div className="card mb-3" style={{ maxWidth: "100%" }}>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="./img/kids/yhd.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">Young History Detectives</h5>
                                            <p className="card-text" style={{ overflow: "visible" }}>  Young History Detectives (YHD) is our youth enrichment program. It uses geek culture to promote literacy, critical thinking and digital literacy. The Young History Detectives learn Black History, both regional, national, and across the African Diaspora along with historical research methods to better understand US History. The YHD Summer Camp is <strong>Monday-Friday, July 29- August 9, 2024 10am-5pm, at the University of Nebraska at Omaha</strong>.
                                            <a className="btn btn-info" href="https://form.jotform.com/240456639969171">Young History Detectives Interest Form 2024</a>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <a className="btn btn-success" style={{ marginLeft: "20px" }} href="https://form.jotform.com/240456639969171">Junior Young History Detectives Interest Form 2024</a> */}
                        {/* <div className="card" style={{ width: "18rem" }}>
                                <img src="./img/kids/yhd.png" className="card-img-bottom" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                </div>
                            </div>

                            <Card >

                                <CardMedia
                                    component="img"
                                    height="20%"
                                    width="50%"
                                    image="./img/kids/yhd.png"
                                    alt="Young History Detectives"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ height: 120 }}>
                                        Junior Young History Detectives is open to 9-11 year olds, interested in learning Black History, Omaha History in fun and engaging ways. This year&apos;s camps will explore storytelling as a tool to present their discoveries of the people, places and events in North Omaha.
                                        Summer Junior Young History Detectives Program is <strong>Monday-Friday, July 22-26, 2024 10am-5pm, at the University of Nebraska at Omaha</strong>.
                                    </Typography>
                                </CardContent>
                            </Card>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <a className="btn btn-success" href="https://form.jotform.com/240456639969171">Junior Young History Detectives Interest Form 2024</a>
                            <Card sx={{ maxWidth: "75%" }}>

                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="./img/kids/yhdjr.png"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ height: 120 }}>
                                        Junior Young History Detectives is open to 9-11 year olds, interested in learning Black History, Omaha History in fun and engaging ways. This year&apos;s camps will explore storytelling as a tool to present their discoveries of the people, places and events in North Omaha.
                                        Summer Junior Young History Detectives Program is <strong>Monday-Friday, July 22-26, 2024 10am-5pm, at the University of Nebraska at Omaha</strong>.
                                    </Typography>
                                </CardContent>
                            </Card>
*/}


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

export default EducationPage
