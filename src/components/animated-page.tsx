import { motion, Transition, Variants } from 'framer-motion'
import { ReactNode } from 'react'

const animations: Variants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "-100%"
  }
}

const transition: Transition = {
  ease: "easeOut",
  duration: .3
}

const AnimatedPage = ({ children }: { children: ReactNode }) => (
  <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={transition}>
    {children}
  </motion.div>
)

export default AnimatedPage
