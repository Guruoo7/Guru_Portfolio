import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedIcons from '../components/3D/AnimatedIcons'

const achievements = [
    { number: '200+', label: 'LeetCode Problems' },
    { number: '8.26', label: 'CGPA' },
    { number: '4+', label: 'Hackathon Finalist' },
    { number: '0+', label: 'Years Experience' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12,
        },
    },
}

function HeroSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="section" style={{ position: 'relative' }}>
            {/* 3D Animated Icons Background */}
            <AnimatedIcons />

            <motion.div
                ref={ref}
                className="hero-container"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}
            >
                {/* Greeting */}
                <motion.p
                    variants={itemVariants}
                    className="text-body-lg"
                    style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}
                >
                    👋 Hello, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="heading-xl"
                    style={{ marginBottom: '1.5rem' }}
                >
                    <span className="text-gradient">Guruprasanth M</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="text-body-lg"
                    style={{ maxWidth: '700px', margin: '0 auto 1.5rem' }}
                >
                    Software Engineer Trainee @ Cognizant | AI & Data Science Engineer
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-body"
                    style={{ maxWidth: '600px', margin: '0 auto 2rem' }}
                >
                    Specializing in Django, Flutter, Python, and AI/ML. Building enterprise solutions
                    with hands-on experience in Azure, Dynatrace, and IBM AS/400.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex gap-md"
                    style={{ justifyContent: 'center', marginBottom: '4rem', flexWrap: 'wrap' }}
                >
                    <motion.button
                        onClick={() => scrollToSection('projects')}
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View My Work
                    </motion.button>
                    <motion.button
                        onClick={() => scrollToSection('contact')}
                        className="btn btn-outline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>

                {/* Achievements Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-4"
                    style={{ gap: '1.5rem' }}
                >
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card"
                            style={{ padding: '1.5rem', textAlign: 'center' }}
                            whileHover={{ scale: 1.05, borderColor: 'var(--accent-primary)' }}
                        >
                            <motion.span
                                className="heading-lg text-gradient"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                            >
                                {item.number}
                            </motion.span>
                            <p className="text-body" style={{ marginTop: '0.5rem' }}>
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                onClick={() => scrollToSection('skills')}
                style={{ cursor: 'pointer' }}
            >
                <div className="scroll-indicator-mouse">
                    <div className="scroll-indicator-wheel"></div>
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection
