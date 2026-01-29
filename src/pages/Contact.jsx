import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/Layout/PageWrapper'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required'
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = validateForm()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)
        setErrors({})

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSuccess(true)
        setFormData({ name: '', email: '', message: '' })

        setTimeout(() => setIsSuccess(false), 5000)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    return (
        <PageWrapper variant="scaleRotate">
            <div className="page-content">
                <motion.div
                    style={{ width: '100%', maxWidth: '600px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {/* Header */}
                    <motion.div
                        style={{ textAlign: 'center', marginBottom: '2.5rem' }}
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>
                            Get in <span className="text-gradient">Touch</span>
                        </h1>
                        <p className="text-body-lg">
                            Have a project in mind? Let's talk about it.
                        </p>

                        {/* Contact Info */}
                        <motion.div
                            className="flex gap-lg justify-center"
                            style={{ marginTop: '1.5rem', flexWrap: 'wrap' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.a
                                href="mailto:mguruprasanth2004@gmail.com"
                                className="text-body"
                                style={{ color: 'var(--accent-primary)' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                📧 mguruprasanth2004@gmail.com
                            </motion.a>
                            <motion.a
                                href="tel:+918778807571"
                                className="text-body"
                                style={{ color: 'var(--accent-cyan)' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                📱 +91 8778807571
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Success Message */}
                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                className="card"
                                style={{
                                    padding: '2rem',
                                    textAlign: 'center',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                    marginBottom: '2rem',
                                }}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <motion.div
                                    style={{ fontSize: '4rem', marginBottom: '1rem' }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [0, 1.2, 1] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    ✅
                                </motion.div>
                                <h3 className="heading-sm" style={{ color: '#10b981' }}>
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-body">I'll get back to you within 24 hours.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="card"
                        style={{ padding: '2rem' }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {/* Name Field */}
                        <motion.div
                            className="form-group"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="form-input"
                                style={{
                                    borderColor: errors.name ? '#ef4444' : undefined,
                                }}
                                whileFocus={{ scale: 1.01 }}
                            />
                            <AnimatePresence>
                                {errors.name && (
                                    <motion.p
                                        className="form-error"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        {errors.name}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                            className="form-group"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="form-input"
                                style={{
                                    borderColor: errors.email ? '#ef4444' : undefined,
                                }}
                                whileFocus={{ scale: 1.01 }}
                            />
                            <AnimatePresence>
                                {errors.email && (
                                    <motion.p
                                        className="form-error"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        {errors.email}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Message Field */}
                        <motion.div
                            className="form-group"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="form-input form-textarea"
                                style={{
                                    borderColor: errors.message ? '#ef4444' : undefined,
                                }}
                                whileFocus={{ scale: 1.01 }}
                            />
                            <AnimatePresence>
                                {errors.message && (
                                    <motion.p
                                        className="form-error"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        {errors.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="glow-btn w-full"
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {isSubmitting ? (
                                <motion.div className="flex items-center gap-sm justify-center">
                                    <motion.div
                                        className="loader"
                                        style={{ width: '20px', height: '20px', borderWidth: '2px' }}
                                    />
                                    Sending...
                                </motion.div>
                            ) : (
                                <>
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        ✉️
                                    </motion.span>
                                    {' '}Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </PageWrapper>
    )
}

export default Contact
