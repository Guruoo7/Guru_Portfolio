import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Layout/Navbar'
import ParticlesBackground from './components/Particles/ParticlesBackground'
import HeroAbout from './pages/HeroAbout'
import CallToAction from './pages/CallToAction'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Articles from './pages/Articles'
import CodingProfiles from './pages/CodingProfiles'
import SocialLinks from './pages/SocialLinks'

function App() {
    const location = useLocation()

    return (
        <>
            {/* Animated Gradient Background */}
            <div className="gradient-blur-bg">
                <div className="gradient-orb gradient-orb-1"></div>
                <div className="gradient-orb gradient-orb-2"></div>
                <div className="gradient-orb gradient-orb-3"></div>
            </div>

            {/* Interactive Particles */}
            <ParticlesBackground />

            {/* Navigation */}
            <Navbar />

            {/* Page Routes with AnimatePresence */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HeroAbout />} />
                    <Route path="/cta" element={<CallToAction />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/profiles" element={<CodingProfiles />} />
                    <Route path="/social" element={<SocialLinks />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
