import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'profiles', label: 'Profiles' },
    { id: 'contact', label: 'Contact' },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    // Scroll spy functionality
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => ({
                id: link.id,
                element: document.getElementById(link.id)
            }))

            const scrollPosition = window.scrollY + 100

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section.element && section.element.offsetTop <= scrollPosition) {
                    setActiveSection(section.id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
            <a
                href="#hero"
                className="navbar-logo"
                onClick={(e) => scrollToSection(e, 'hero')}
            >
                <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Portfolio
                </motion.span>
            </a>

            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link, index) => (
                    <motion.li
                        key={link.id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                        <a
                            href={`#${link.id}`}
                            className={`navbar-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={(e) => scrollToSection(e, link.id)}
                        >
                            {link.label}
                        </a>
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
