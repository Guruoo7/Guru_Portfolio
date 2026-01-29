import { useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import PageWrapper from '../components/Layout/PageWrapper'

const projects = [
    {
        id: 1,
        title: 'EntrepreneurialHub SaaS',
        description: 'Django-based SaaS platform to automate approval workflows for entrepreneurs and officials. Finalist among 25,000 participants.',
        image: '🏆',
        tags: ['Django', 'Python', 'AWS S3', 'Power BI'],
        color: '#6366f1',
        link: '#',
    },
    {
        id: 2,
        title: 'AI-Powered OCR Pipeline',
        description: 'TrOCR + NER + Regex pipeline to automatically extract and validate documents, reducing manual verification by ~60%.',
        image: '🤖',
        tags: ['TrOCR', 'NER', 'Machine Learning', 'Python'],
        color: '#8b5cf6',
    },
    {
        id: 3,
        title: 'Smart India Hackathon 2023',
        description: 'Built a real-time collaboration platform enabling rescue agencies to communicate through secure audio, video, and messaging.',
        image: '🚀',
        tags: ['Flutter', 'Dart', 'WebRTC'],
        color: '#06b6d4',
    },
    {
        id: 4,
        title: 'AI Legal Assistant',
        description: 'Patent-pending AI assistant for filing First Information Reports (FIR). Automated document processing with NLP.',
        image: '📜',
        tags: ['NLP', 'Python', 'AI', 'Legal Tech'],
        color: '#f97316',
    },
]

function ProjectCard({ project, index }) {
    const cardRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useTransform(y, [-100, 100], [15, -15])
    const rotateY = useTransform(x, [-100, 100], [-15, 15])

    const springConfig = { stiffness: 300, damping: 30 }
    const rotateXSpring = useSpring(rotateX, springConfig)
    const rotateYSpring = useSpring(rotateY, springConfig)

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set(e.clientX - centerX)
        y.set(e.clientY - centerY)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
        setIsHovered(false)
    }

    return (
        <motion.div
            ref={cardRef}
            className="card card-3d"
            style={{
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformPerspective: 1000,
                cursor: 'pointer',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            whileHover={{
                scale: 1.02,
                boxShadow: `0 20px 40px ${project.color}40`,
            }}
        >
            {/* Project Icon */}
            <motion.div
                style={{
                    fontSize: '4rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                animate={isHovered ? { scale: 1.1, rotate: [0, -10, 10, 0] } : { scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {project.image}
            </motion.div>

            {/* Title */}
            <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-body" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                {project.tags.map((tag, i) => (
                    <motion.span
                        key={i}
                        style={{
                            padding: '0.25rem 0.75rem',
                            fontSize: '0.75rem',
                            background: `${project.color}20`,
                            border: `1px solid ${project.color}40`,
                            borderRadius: 'var(--radius-full)',
                            color: project.color,
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        {tag}
                    </motion.span>
                ))}
            </div>

            {/* Hover Glow Effect */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 'var(--radius-lg)',
                    background: `radial-gradient(circle at 50% 50%, ${project.color}20 0%, transparent 70%)`,
                    pointerEvents: 'none',
                }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    )
}

function Projects() {
    return (
        <PageWrapper variant="cascade">
            <div className="page-content">
                <motion.div style={{ width: '100%', maxWidth: '1200px' }}>
                    {/* Header */}
                    <motion.div
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>
                            My <span className="text-gradient">Projects</span>
                        </h1>
                        <p className="text-body-lg">
                            Real-world applications and hackathon achievements
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-3">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    )
}

export default Projects
