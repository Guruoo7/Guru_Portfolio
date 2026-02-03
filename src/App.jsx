import Navbar from './components/Layout/Navbar'
import ParticlesBackground from './components/Particles/ParticlesBackground'
import SinglePage from './pages/SinglePage'

function App() {
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

            {/* Single Page Content */}
            <SinglePage />
        </>
    )
}

export default App
