import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const profiles = [
    {
        name: 'GitHub',
        username: '@guruprasanth-m',
        icon: '🐙',
        stats: { label: 'Repositories', value: '20+' },
        color: '#6e5494',
        url: 'https://github.com',
    },
    {
        name: 'LeetCode',
        username: '@guruprasanth',
        icon: '🧩',
        stats: { label: '50 Days Badge', value: '🏅' },
        color: '#ffa116',
        url: 'https://leetcode.com',
    },
    {
        name: 'LinkedIn',
        username: '@guru-prasanth-m',
        icon: '💼',
        stats: { label: 'Connections', value: '500+' },
        color: '#0a66c2',
        url: 'https://linkedin.com/in/guru-prasanth-m',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const cardVariants = {
    hidden: {
        scale: 0.8,
        opacity: 0,
        y: 50,
    },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
        },
    },
}

function ProfilesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="profiles" className="section">
            <motion.div ref={ref} style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="heading-xl" style={{ marginBottom: '1rem' }}>
                        Coding <span className="text-gradient">Profiles</span>
                    </h2>
                    <p className="text-body-lg">
                        Connect with me across various coding platforms
                    </p>
                </motion.div>

                {/* Profiles Grid */}
                <motion.div
                    className="grid grid-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {profiles.map((profile) => (
                        <motion.a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card"
                            style={{
                                padding: '2rem',
                                textAlign: 'center',
                                cursor: 'pointer',
                                textDecoration: 'none',
                            }}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: `0 20px 40px ${profile.color}40`,
                                borderColor: profile.color,
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Icon */}
                            <motion.div
                                style={{ fontSize: '3rem', marginBottom: '1rem' }}
                                whileHover={{
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: 1.1,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {profile.icon}
                            </motion.div>

                            {/* Name */}
                            <h3
                                className="heading-sm"
                                style={{ marginBottom: '0.25rem', color: profile.color }}
                            >
                                {profile.name}
                            </h3>

                            {/* Username */}
                            <p className="text-body" style={{ marginBottom: '1rem' }}>
                                {profile.username}
                            </p>

                            {/* Stats */}
                            <motion.div
                                style={{
                                    padding: '0.75rem 1rem',
                                    background: `${profile.color}15`,
                                    borderRadius: 'var(--radius-md)',
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span
                                    className="heading-md"
                                    style={{
                                        display: 'block',
                                        fontSize: '1.5rem',
                                        color: profile.color,
                                    }}
                                >
                                    {profile.stats.value}
                                </span>
                                <span className="text-body" style={{ fontSize: '0.875rem' }}>
                                    {profile.stats.label}
                                </span>
                            </motion.div>

                            {/* Visit Link */}
                            <motion.div
                                style={{
                                    marginTop: '1rem',
                                    fontSize: '0.875rem',
                                    color: 'var(--text-muted)',
                                }}
                                whileHover={{ color: profile.color }}
                            >
                                Visit Profile →
                            </motion.div>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default ProfilesSection
