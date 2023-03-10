import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Intro from './pages/Intro'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<Intro />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
