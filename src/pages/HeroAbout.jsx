import { motion } from 'framer-motion'
import PageWrapper from '../components/Layout/PageWrapper'
import AnimatedIcons from '../components/3D/AnimatedIcons'

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

const achievements = [
    { number: '50+', label: 'LeetCode Problems' },
    { number: '8.26', label: 'CGPA' },
    { number: '2+', label: 'Hackathon Finalist' },
    { number: '0+', label: 'Years Experience' },
]

function HeroAbout() {
    return (
        <PageWrapper variant="scale">
            {/* 3D Animated Icons Background */}
            <AnimatedIcons />

            <div className="page-content" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    className="hero-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ textAlign: 'center', maxWidth: '900px' }}
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
                        Programmer Analyst Trainee @ Cognizant | AI & Data Science Engineer
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
                        <motion.a
                            href="/projects"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="/contact"
                            className="btn btn-outline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
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
                                    animate={{ opacity: 1, scale: 1 }}
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
                >
                    <div className="scroll-indicator-mouse">
                        <div className="scroll-indicator-wheel"></div>
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    )
}

export default HeroAbout
