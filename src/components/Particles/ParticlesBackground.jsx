import { useCallback, useMemo } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    const options = useMemo(() => ({
        background: {
            color: {
                value: 'transparent',
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                onClick: {
                    enable: true,
                    mode: 'push',
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
                push: {
                    quantity: 4,
                },
            },
        },
        particles: {
            color: {
                value: ['#6366f1', '#8b5cf6', '#a855f7', '#06b6d4'],
            },
            links: {
                color: '#6366f1',
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: true,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 60,
            },
            opacity: {
                value: { min: 0.3, max: 0.7 },
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.3,
                },
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 3 },
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 1,
                },
            },
        },
        detectRetina: true,
    }), [])

    return (
        <Particles
            id="tsparticles"
            className="particles-container"
            init={particlesInit}
            options={options}
        />
    )
}

export default ParticlesBackground
