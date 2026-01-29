import { motion } from 'framer-motion'
import PageWrapper from '../components/Layout/PageWrapper'

const articles = [
    {
        id: 1,
        title: 'Building AI-Powered OCR Pipelines with TrOCR',
        excerpt: 'How I reduced manual document verification by 60% using AI at EntrepreneurialHub.',
        date: 'Jan 15, 2025',
        readTime: '8 min read',
        category: 'AI/ML',
        color: '#8b5cf6',
    },
    {
        id: 2,
        title: 'My Journey at Cognizant: From Trainee to Production',
        excerpt: 'Lessons learned debugging enterprise IBM iSeries applications and optimizing SQL queries.',
        date: 'Jan 10, 2025',
        readTime: '6 min read',
        category: 'Career',
        color: '#ec4899',
    },
    {
        id: 3,
        title: 'Smart India Hackathon 2023: Building a Rescue Platform',
        excerpt: 'How we built a real-time collaboration tool for rescue agencies using Flutter and Dart.',
        date: 'Dec 28, 2024',
        readTime: '7 min read',
        category: 'Hackathon',
        color: '#06b6d4',
    },
    {
        id: 4,
        title: 'Django REST APIs: Best Practices from Production',
        excerpt: 'Backend data pipeline patterns that reduced dashboard load time by 40%.',
        date: 'Dec 20, 2024',
        readTime: '10 min read',
        category: 'Django',
        color: '#10b981',
    },
    {
        id: 5,
        title: '50 Days of LeetCode: My Problem-Solving Journey',
        excerpt: 'Tips and strategies that helped me earn the 50 Days Badge on LeetCode.',
        date: 'Dec 15, 2024',
        readTime: '5 min read',
        category: 'DSA',
        color: '#f97316',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
}

function Articles() {
    return (
        <PageWrapper variant="cascade">
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
                            Featured <span className="text-gradient">Articles</span>
                        </h1>
                        <p className="text-body-lg">
                            Thoughts, tutorials, and insights from my journey
                        </p>
                    </motion.div>

                    {/* Articles List */}
                    <motion.div
                        className="flex flex-col gap-lg"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {articles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                className="card"
                                style={{
                                    padding: '1.5rem 2rem',
                                    cursor: 'pointer',
                                }}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.02,
                                    x: 10,
                                    boxShadow: `0 10px 30px ${article.color}30`,
                                    borderColor: article.color,
                                }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                    <div style={{ flex: 1, minWidth: '250px' }}>
                                        {/* Category Badge */}
                                        <motion.span
                                            style={{
                                                display: 'inline-block',
                                                padding: '0.25rem 0.75rem',
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                background: `${article.color}20`,
                                                color: article.color,
                                                borderRadius: 'var(--radius-full)',
                                                marginBottom: '0.75rem',
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {article.category}
                                        </motion.span>

                                        {/* Title */}
                                        <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>
                                            {article.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-body" style={{ marginBottom: '0.75rem' }}>
                                            {article.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex gap-md text-body" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                            <span>{article.date}</span>
                                            <span>•</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <motion.div
                                        style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}
                                        whileHover={{ x: 10, color: article.color }}
                                    >
                                        →
                                    </motion.div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Load More */}
                    <motion.div
                        style={{ textAlign: 'center', marginTop: '2rem' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <motion.button
                            className="btn btn-outline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Load More Articles
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </PageWrapper>
    )
}

export default Articles
