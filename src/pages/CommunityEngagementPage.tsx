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
        </>
        
    )
}

export default CommunityEngagementPage