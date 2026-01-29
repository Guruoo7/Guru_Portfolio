import { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/Layout/PageWrapper'

function Resume() {
    const [isDownloading, setIsDownloading] = useState(false)
    const [downloadComplete, setDownloadComplete] = useState(false)

    const handleDownload = () => {
        setIsDownloading(true)
        // Simulate download
        setTimeout(() => {
            setIsDownloading(false)
            setDownloadComplete(true)
            setTimeout(() => setDownloadComplete(false), 3000)
        }, 2000)
    }

    return (
        <PageWrapper variant="flip">
            <div className="page-content">
                <motion.div
                    style={{ textAlign: 'center', maxWidth: '700px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {/* Title */}
                    <motion.h1
                        className="heading-xl"
                        initial={{ rotateX: 90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ marginBottom: '1rem' }}
                    >
                        My <span className="text-gradient">Resume</span>
                    </motion.h1>

                    <motion.p
                        className="text-body-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        style={{ marginBottom: '3rem' }}
                    >
                        Download my resume to learn more about my skills, experience, and qualifications.
                    </motion.p>

                    {/* Resume Card */}
                    <motion.div
                        className="card"
                        style={{
                            padding: '3rem',
                            perspective: '1000px',
                            transformStyle: 'preserve-3d',
                        }}
                        initial={{ rotateY: -90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                        whileHover={{
                            rotateY: 5,
                            rotateX: -5,
                            boxShadow: '0 25px 50px rgba(99, 102, 241, 0.3)',
                        }}
                    >
                        {/* Document Icon */}
                        <motion.div
                            style={{
                                fontSize: '5rem',
                                marginBottom: '1.5rem',
                            }}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            📄
                        </motion.div>

                        <h2 className="heading-md" style={{ marginBottom: '0.5rem' }}>
                            Guruprasanth M
                        </h2>
                        <p className="text-body" style={{ marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>
                            Programmer Analyst Trainee @ Cognizant
                        </p>
                        <p className="text-body" style={{ marginBottom: '2rem' }}>
                            PDF • B.Tech AI & Data Science • Updated Jan 2026
                        </p>

                        {/* Download Button */}
                        <motion.button
                            className="glow-btn"
                            onClick={handleDownload}
                            disabled={isDownloading}
                            whileHover={{ scale: isDownloading ? 1 : 1.05 }}
                            whileTap={{ scale: isDownloading ? 1 : 0.95 }}
                            style={{
                                minWidth: '200px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {isDownloading ? (
                                <motion.div
                                    className="flex items-center gap-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <motion.div
                                        className="loader"
                                        style={{ width: '20px', height: '20px', borderWidth: '2px' }}
                                    />
                                    Downloading...
                                </motion.div>
                            ) : downloadComplete ? (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    ✓ Downloaded!
                                </motion.span>
                            ) : (
                                <>
                                    <motion.span
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        ⬇️
                                    </motion.span>
                                    {' '}Download Resume
                                </>
                            )}

                            {/* Progress bar during download */}
                            {isDownloading && (
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        height: '3px',
                                        background: 'rgba(255,255,255,0.5)',
                                    }}
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 2, ease: 'linear' }}
                                />
                            )}
                        </motion.button>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        className="grid grid-3"
                        style={{ marginTop: '3rem', gap: '1.5rem' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        {[
                            { icon: '💼', label: 'Cognizant Trainee' },
                            { icon: '🎓', label: 'B.Tech AI & DS' },
                            { icon: '📊', label: 'CGPA 8.26' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                style={{ padding: '1.5rem', textAlign: 'center' }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>
                                    {item.icon}
                                </span>
                                <span className="text-body">{item.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </PageWrapper>
    )
}

export default Resume
