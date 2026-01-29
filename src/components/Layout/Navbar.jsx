import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/articles', label: 'Articles' },
    { path: '/profiles', label: 'Profiles' },
    { path: '/contact', label: 'Contact' },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
            <Link to="/" className="navbar-logo">
                <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Portfolio
                </motion.span>
            </Link>

            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link, index) => (
                    <motion.li
                        key={link.path}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                        <Link
                            to={link.path}
                            className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    </motion.li>
                ))}
            </ul>

            <button
                className="navbar-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                <motion.span
                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.span
                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                />
            </button>
        </motion.nav>
    )
}

export default Navbar
