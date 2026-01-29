import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/Layout/PageWrapper'

function CallToAction() {
    return (
        <PageWrapper variant="blur">
            <div className="page-content">
                <motion.div
                    style={{ textAlign: 'center', maxWidth: '800px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Headline */}
                    <motion.h1
                        className="heading-xl"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{ marginBottom: '1.5rem' }}
                    >
                        Ready to Build Something{' '}
                        <span className="text-gradient">Amazing?</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        className="text-body-lg"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}
                    >
                        Let's collaborate and turn your vision into reality.
                        I'm available for freelance projects and full-time opportunities.
                    </motion.p>

                    {/* Glowing CTA Buttons */}
                    <motion.div
                        className="flex gap-lg"
                        style={{ justifyContent: 'center', flexWrap: 'wrap' }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <Link to="/contact">
                            <motion.button
                                className="glow-btn"
                                whileHover={{
                                    scale: 1.08,
                                    boxShadow: '0 0 80px rgba(99, 102, 241, 0.7), 0 0 150px rgba(139, 92, 246, 0.5)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                style={{ position: 'relative' }}
                            >
                                <motion.span
                                    initial={{ opacity: 1 }}
                                    whileHover={{ opacity: 0 }}
                                    style={{ position: 'relative', zIndex: 2 }}
                                >
                                    ✉️ Contact Me
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
                                    whileHover={{ opacity: 1 }}
                                    style={{ width: '100%', textAlign: 'center' }}
                                >
                                    Let's Talk! 🚀
                                </motion.span>
                            </motion.button>
                        </Link>

                        <Link to="/resume">
                            <motion.button
                                className="glow-btn"
                                style={{
                                    background: 'var(--gradient-secondary)',
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    boxShadow: '0 0 80px rgba(6, 182, 212, 0.7), 0 0 150px rgba(99, 102, 241, 0.5)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                📄 Hire Me
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Floating decorative elements */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '20%',
                            left: '10%',
                            width: '100px',
                            height: '100px',
                            background: 'var(--gradient-primary)',
                            borderRadius: '50%',
                            filter: 'blur(60px)',
                            opacity: 0.4,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 20, 0],
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        style={{
                            position: 'absolute',
                            bottom: '25%',
                            right: '15%',
                            width: '150px',
                            height: '150px',
                            background: 'var(--gradient-warm)',
                            borderRadius: '50%',
                            filter: 'blur(80px)',
                            opacity: 0.3,
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            x: [0, -30, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>
            </div>
        </PageWrapper>
    )
}

export default CallToAction
