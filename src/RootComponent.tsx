import React from 'react'
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
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
                <Route path="/afroscapescurls" element={<RootRoute />}>
                    <Route path={ROUTES.MAINPAGE_ROUTE} element={<HomePage />} />
                    <Route path={ROUTES.ABOUT_ROUTE} element={<AboutPage />} />
                    <Route path={ROUTES.MEETTEAM_ROUTE} element={<MeetTeamPage />} />
                    <Route path={ROUTES.COMMUNITYENGAGEMENT_ROUTE} element={<CommunityEngagementPage />} />
                    <Route path={ROUTES.EDUCATION_ROUTE} element={<EducationPage />} />
                    <Route path={ROUTES.SPECIALEVENTS_ROUTE} element={<SpecialEventsPage />} />
                    <Route path={ROUTES.SIGNATUREEVENTS_ROUTE} element={<SignatureEventsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

function RootRoute() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default RootComponent