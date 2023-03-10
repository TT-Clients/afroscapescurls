import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../components/TopNav'
import { ROUTES } from '../resources/routes-constants'

const CommunityEngagementPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.INTRO_ROUTE)
    }

    return (
        <>
            <TopNav title='Community Engagement' />
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '4em' }}>Community Engagement</h1>
                <span style={{ cursor: 'pointer' }} onClick={() => redirectToHomePage()}>
                    Homepage
                </span>
            </div>
            <section className="page-section" id="services">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="text-center">
                        <h1 className="section-heading text-uppercase">Community Engagement</h1>
                        <h3 className="section-subheading">The House celebrates the present state of Black creativity, inno vation, and excellence. 
The House creates a sense of empowerment and agency within  the community by providing opportunities for individuals to en gage in unique activities, discussions, and advocacy work, by  providing access to resources and support networks that may  not be available elsewhere. 
The House uplifts artists, educators, nonprofits, and vendors  who are invested in increasing cross-cultural understanding and  advancing racial diversity, equity, and inclusion.</h3>
                    </div>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-12">
                    <div className="card" >
                        <a href="https://www.youtube.com/@TheHouseLXN"><img src="./img/lxn.png" style={{width:'100%'}}/></a>
                        <div className="card-body">
                            <h5 className="card-title">The League of Excellent/Extraordinary Negroes</h5>
                            <p className="card-text">Check out our youtube channel</p>
                            <a href="https://www.youtube.com/@TheHouseLXN" target="_blank" rel="noreferrer" className="btn btn-primary">Check us out</a>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 mt-2">
                    <div className="card" style={{width: "100%;"}}>
                        <iframe src="https://discord.com/widget?id=756766932434419723&theme=dark" width="100%"
                            height="500"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Join us on Discord</h5>
                            <p className="card-text">We have a growing community.</p>
                            <a href="https://discord.gg/EhWcvQWBu6" target="_blank"  rel="noreferrer" className="btn btn-primary">To Discord!</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mt-2">

                    <div className="card" style={{width: "100%"}}>
                   <img src="./img/Twitch-logo.png" alt=""  />     <div className="card-body">
                            <h5 className="card-title">Watch us on Twitch</h5>
                            <p className="card-text">Check out our upcoming streams!</p>
                            <a href="https://www.twitch.tv/thehouseofafroscapescurls/videos" className="btn btn-primary">To Twitch!</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
        </>
        
    )
}

export default CommunityEngagementPage