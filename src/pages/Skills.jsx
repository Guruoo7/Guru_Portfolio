import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageWrapper from '../components/Layout/PageWrapper'

const skills = [
    { name: 'Python', level: 85, color: '#3776ab', icon: '🐍' },
    { name: 'Dart', level: 88, color: '#02569B', icon: '📱' },
    { name: 'Java', level: 92, color: '#ED8B00', icon: '☕' },
    { name: 'HTML / CSS', level: 75, color: '#e34c26', icon: '🌐' },
    { name: 'TensorFlow / AI-ML', level: 82, color: '#FF6F00', icon: '🤖' },
    { name: 'MySQL / MongoDB', level: 85, color: '#47a248', icon: '🗃️' },
    { name: 'AWS', level: 78, color: '#0db7ed', icon: '☁️' },
    { name: 'Azure Devops', level: 58, color: '#0db7ed', icon: '☁️' },
    { name: 'Django', level: 92, color: '#3776ab', icon: '🐍' },
    { name: 'Flutter/Dart', level: 88, color: '#02569B', icon: '📱' },
    { name: 'Git / GitHub', level: 90, color: '#6e5494', icon: '🔀' },
]

const tools = [
    { name: 'IBM AS/400', icon: '💻' },
    { name: 'Dynatrace', icon: '📊' },
    { name: 'Grafana', icon: '📈' },
    { name: 'Splunk', icon: '🔍' },
    { name: 'Streamlit', icon: '🎈' },
    { name: 'OpenCV', icon: '👁️' },
]

function SkillBar({ skill, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            className="card"
            style={{ padding: '1.5rem' }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, borderColor: skill.color }}
        >
            <div className="flex justify-between items-center" style={{ marginBottom: '0.75rem' }}>
                <div className="flex items-center gap-sm">
                    <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
                    <span className="heading-sm" style={{ fontSize: '1rem' }}>{skill.name}</span>
                </div>
                <motion.span
                    className="text-gradient"
                    style={{ fontWeight: 700 }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                >
                    {skill.level}%
                </motion.span>
            </div>

            <div className="skill-bar">
                <motion.div
                    className="skill-bar-fill"
                    style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: 'easeOut' }}
                />
            </div>
        </motion.div>
    )
}

function Skills() {
    const containerRef = useRef(null)

    return (
        <PageWrapper variant="slideUp">
            <div className="page-content">
                <motion.div style={{ width: '100%', maxWidth: '1000px' }} ref={containerRef}>
                    {/* Header */}
                    <motion.div
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>
                            My <span className="text-gradient">Skills</span>
                        </h1>
                        <p className="text-body-lg">
                            Technologies and tools I work with
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
                        {skills.map((skill, index) => (
                            <SkillBar key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>

                    {/* Tools Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <h2 className="heading-md text-center" style={{ marginBottom: '1.5rem' }}>
                            Platforms & Tools
                        </h2>
                        <div className="flex gap-lg justify-center" style={{ flexWrap: 'wrap' }}>
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={tool.name}
                                    className="card"
                                    style={{
                                        padding: '1rem 1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 + index * 0.1, duration: 0.4, type: 'spring' }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [-2, 2, -2, 0],
                                        transition: { rotate: { duration: 0.4 } }
                                    }}
                                >
                                    <span style={{ fontSize: '1.5rem' }}>{tool.icon}</span>
                                    <span>{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        style={{ marginTop: '3rem' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        <h2 className="heading-md text-center" style={{ marginBottom: '1.5rem' }}>
                            Certifications
                        </h2>
                        <div className="flex gap-lg justify-center" style={{ flexWrap: 'wrap' }}>
                            <motion.div
                                className="card"
                                style={{ padding: '1.5rem', textAlign: 'center' }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>🔐</span>
                                <span className="heading-sm" style={{ fontSize: '0.9rem' }}>Fundamentals of Cybersecurity</span>
                                <p className="text-body" style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>Coursera</p>
                            </motion.div>
                            <motion.div
                                className="card"
                                style={{ padding: '1.5rem', textAlign: 'center' }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>☁️</span>
                                <span className="heading-sm" style={{ fontSize: '0.9rem' }}>AWS Cloud Practitioner</span>
                                <p className="text-body" style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>In Progress</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </PageWrapper>
    )
}

export default Skills
