import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import CommunityEngagementPage from './pages/CommunityEngagementPage'
import EducationPage from './pages/EducationPage'
import HomePage from './pages/HomePage'
import Intro from './pages/Intro'
import MeetTeamPage from './pages/MeetTeamPage'
import NotFoundPage from './pages/NotFoundPage'
import SignatureEventsPage from './pages/SignatureEventsPage'
import SpecialEventsPage from './pages/SpecialEventsPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.INTRO_ROUTE} element={<Intro />} />
                <Route path={ROUTES.MAINPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.ABOUT_ROUTE} element={<AboutPage />} />
                <Route path={ROUTES.MEETTEAM_ROUTE} element={<MeetTeamPage />} />
                <Route path={ROUTES.COMMUNITYENGAGEMENT_ROUTE} element={<CommunityEngagementPage />} />
                <Route path={ROUTES.EDUCATION_ROUTE} element={<EducationPage />} />
                <Route path={ROUTES.SPECIALEVENTS_ROUTE} element={<SpecialEventsPage />} />
                <Route path={ROUTES.SIGNATUREEVENTS_ROUTE} element={<SignatureEventsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent