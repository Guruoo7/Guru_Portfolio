import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
    {
        id: 1,
        company: 'Cognizant Technology Solutions',
        role: 'Software Engineer Trainee',
        duration: 'Mar 2025 - Present',
        location: 'Chennai, India',
        type: 'Full-time',
        description: 'Working on enterprise-level applications and monitoring systems for critical business operations.',
        responsibilities: [
            'Developing and testing new application modules in IBM iSeries (AS/400) environment',
            'Designing and creating database files in SQL-supported formats to ensure modern data compatibility',
            'Writing functional business logic based on requirement documents following Agile methodology',
            'Participating in sprint planning, development, testing, and deployment activities',
            'Received structured training in Azure DevOps from an external corporate trainer',
            'Completed hands-on training in monitoring and observability tools including Splunk, Dynatrace, and Grafana'
        ],
        technologies: ['IBM AS/400', 'SQL', 'Dynatrace', 'Grafana', 'Splunk', 'Azure'],
        color: '#6366f1',
        icon: '💼',
    },
    {
        id: 2,
        company: 'Blaze Web Services',
        role: 'Django Developer',
        duration: 'July 2023 - Aug 2023',
        location: 'India',
        type: 'Intern',
        description: 'Built a Django-based stock analysis web app with REST APIs for data processing and financial insights.',
        responsibilities: [
            'Developed and debugged RESTful backend services using Django to support data ingestion and application workflows',
            'Designed backend data pipelines that replaced manual analysis workflows, reducing analyst effort by - 60%',
            'Optimized database queries and API responses, reducing dashboard load time by -40%',
            'Investigated API failures, handled edge cases and fixed data validation issues to improve system reliability',
        ],
        technologies: ['Django', 'Python', 'Rest API'],
        color: '#8b5cf6',
        icon: '🏆',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
}

function ExperienceCard({ experience, index, isInView }) {
    return (
        <motion.div
            className="timeline-item"
            variants={itemVariants}
            style={{
                position: 'relative',
                paddingLeft: '2rem',
                paddingBottom: '2rem',
            }}
        >
            {/* Timeline line */}
            <motion.div
                style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: `linear-gradient(180deg, ${experience.color} 0%, ${experience.color}40 100%)`,
                }}
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
            />

            {/* Timeline dot */}
            <motion.div
                style={{
                    position: 'absolute',
                    left: '-8px',
                    top: '0',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: experience.color,
                    border: '3px solid var(--bg-primary)',
                    boxShadow: `0 0 20px ${experience.color}60`,
                }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.2, type: 'spring', stiffness: 200 }}
            />

            {/* Card */}
            <motion.div
                className="card"
                style={{
                    padding: '1.5rem',
                    marginLeft: '1rem',
                }}
                whileHover={{
                    scale: 1.02,
                    borderColor: experience.color,
                    boxShadow: `0 10px 40px ${experience.color}30`,
                }}
            >
                {/* Header */}
                <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                        <div className="flex items-center gap-sm" style={{ marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>{experience.icon}</span>
                            <h3 className="heading-sm" style={{ color: experience.color }}>
                                {experience.company}
                            </h3>
                        </div>
                        <p className="text-body" style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                            {experience.role}
                        </p>
                        <div className="flex gap-md text-body" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                            <span>📅 {experience.duration}</span>
                            <span>📍 {experience.location}</span>
                        </div>
                    </div>
                    <motion.span
                        style={{
                            padding: '0.25rem 0.75rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            background: `${experience.color}20`,
                            color: experience.color,
                            borderRadius: 'var(--radius-full)',
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {experience.type}
                    </motion.span>
                </div>

                {/* Description */}
                <p className="text-body" style={{ marginBottom: '1rem' }}>
                    {experience.description}
                </p>

                {/* Responsibilities */}
                <ul style={{ marginBottom: '1rem', paddingLeft: '1.25rem' }}>
                    {experience.responsibilities.map((resp, i) => (
                        <motion.li
                            key={i}
                            className="text-body"
                            style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + 0.3 + i * 0.1 }}
                        >
                            {resp}
                        </motion.li>
                    ))}
                </ul>

                {/* Technologies */}
                <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                    {experience.technologies.map((tech, i) => (
                        <motion.span
                            key={i}
                            style={{
                                padding: '0.25rem 0.75rem',
                                fontSize: '0.75rem',
                                background: `${experience.color}15`,
                                border: `1px solid ${experience.color}40`,
                                borderRadius: 'var(--radius-full)',
                                color: experience.color,
                            }}
                            whileHover={{ scale: 1.1 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

function WorkExperience() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="experience" className="section">
            <motion.div
                ref={ref}
                style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}
            >
                {/* Header */}
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="heading-xl" style={{ marginBottom: '1rem' }}>
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-body-lg">
                        My professional journey and key achievements
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    className="timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={exp.id}
                            experience={exp}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default WorkExperience
