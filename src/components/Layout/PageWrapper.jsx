import { motion } from 'framer-motion'

// Different animation variants for each page
const pageVariants = {
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    },
    slideLeft: {
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -100, opacity: 0 }
    },
    slideUp: {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -50, opacity: 0 }
    },
    scale: {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 }
    },
    scaleRotate: {
        initial: { scale: 0.8, opacity: 0, rotate: -5 },
        animate: { scale: 1, opacity: 1, rotate: 0 },
        exit: { scale: 0.9, opacity: 0, rotate: 5 }
    },
    blur: {
        initial: { opacity: 0, filter: 'blur(20px)' },
        animate: { opacity: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, filter: 'blur(20px)' }
    },
    flip: {
        initial: { rotateY: 90, opacity: 0 },
        animate: { rotateY: 0, opacity: 1 },
        exit: { rotateY: -90, opacity: 0 }
    },
    cascade: {
        initial: { y: 50, opacity: 0, scale: 0.95 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: -30, opacity: 0, scale: 0.98 }
    },
    bounce: {
        initial: { y: -50, opacity: 0, scale: 0.9 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: 30, opacity: 0, scale: 0.95 }
    }
}

const pageTransition = {
    type: 'tween',
    ease: [0.34, 1.56, 0.64, 1],
    duration: 0.6
}

function PageWrapper({ children, variant = 'fade', className = '' }) {
    const variants = pageVariants[variant] || pageVariants.fade

    return (
        <motion.div
            className={`page ${className}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper
