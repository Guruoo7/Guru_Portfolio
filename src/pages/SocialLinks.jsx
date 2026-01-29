import { motion } from 'framer-motion'
import PageWrapper from '../components/Layout/PageWrapper'

const socialLinks = [
    {
        name: 'LinkedIn',
        icon: '💼',
        url: 'https://linkedin.com/in/guru-prasanth-m',
        color: '#0a66c2',
        handle: '@guru-prasanth-m',
    },
    {
        name: 'GitHub',
        icon: '🐙',
        url: 'https://github.com',
        color: '#6e5494',
        handle: '@guruprasanth-m',
    },
    {
        name: 'Twitter',
        icon: '🐦',
        url: 'https://twitter.com',
        color: '#1da1f2',
        handle: '@guruprasanth',
    },
    {
        name: 'Instagram',
        icon: '📸',
        url: 'https://instagram.com',
        color: '#e1306c',
        handle: '@guruprasanth',
    },
    {
        name: 'YouTube',
        icon: '🎬',
        url: 'https://youtube.com',
        color: '#ff0000',
        handle: '@guruprasanth',
    },
    {
        name: 'Email',
        icon: '📧',
        url: 'mailto:mguruprasanth2004@gmail.com',
        color: '#ea4335',
        handle: 'mguruprasanth2004@gmail.com',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
}

const iconVariants = {
    hidden: {
        scale: 0,
        opacity: 0,
        rotate: -180,
    },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
        },
    },
}

function SocialLinks() {
    return (
        <PageWrapper variant="scale">
            <div className="page-content">
                <motion.div style={{ width: '100%', maxWidth: '900px' }}>
                    {/* Header */}
                    <motion.div
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>
                            Let's <span className="text-gradient">Connect</span>
                        </h1>
                        <p className="text-body-lg">
                            Follow me on social media for updates and behind-the-scenes content
                        </p>
                    </motion.div>

                    {/* Social Grid */}
                    <motion.div
                        className="grid grid-3"
                        style={{ gap: '1.5rem' }}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card"
                                style={{
                                    padding: '2rem',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                variants={iconVariants}
                                whileHover={{
                                    scale: 1.08,
                                    y: -10,
                                    borderColor: social.color,
                                    boxShadow: `0 20px 40px ${social.color}30`,
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Background Glow */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: `radial-gradient(circle at 50% 50%, ${social.color}20 0%, transparent 70%)`,
                                        opacity: 0,
                                    }}
                                    whileHover={{ opacity: 1 }}
                                />

                                {/* Icon */}
                                <motion.div
                                    style={{
                                        fontSize: '3rem',
                                        marginBottom: '0.75rem',
                                        position: 'relative',
                                        zIndex: 1,
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: [0, -15, 15, 0],
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {social.icon}
                                </motion.div>

                                {/* Name */}
                                <h3
                                    className="heading-sm"
                                    style={{
                                        fontSize: '1.1rem',
                                        marginBottom: '0.5rem',
                                        position: 'relative',
                                        zIndex: 1,
                                    }}
                                >
                                    {social.name}
                                </h3>

                                {/* Handle */}
                                <motion.span
                                    style={{
                                        fontSize: '0.8rem',
                                        color: social.color,
                                        fontWeight: 500,
                                        position: 'relative',
                                        zIndex: 1,
                                        wordBreak: 'break-all',
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {social.handle}
                                </motion.span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        style={{
                            textAlign: 'center',
                            marginTop: '3rem',
                            padding: '2rem',
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <p className="text-body-lg" style={{ marginBottom: '1.5rem' }}>
                            Want to collaborate? Send me a message!
                        </p>
                        <motion.a
                            href="/contact"
                            className="glow-btn"
                            style={{ display: 'inline-flex' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ✉️ Get In Touch
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </PageWrapper>
    )
}

export default SocialLinks
