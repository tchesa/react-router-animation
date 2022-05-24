import { motion, Transition, Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { useHistory } from 'react-router-dom'

const forwardAnimation: Variants = {
  initial: {
    // opacity: 0,
    x: "100%",
  },
  animate: {
    // opacity: 1,
    x: 0,
  },
  exit: {
    // opacity: 0,
    x: "-100%"
  }
}

const backwardAnimation: Variants = {
  initial: {
    // opacity: 0,
    x: "-100%",
  },
  animate: {
    // opacity: 1,
    x: 0,
  },
  exit: {
    // opacity: 0,
    x: "100%"
  }
}

const transition: Transition = {
  ease: "easeOut",
  duration: .2
}

const AnimatedPage = ({ children }: { children: ReactNode }) => {
  const { action } = useHistory()

  return (
    <motion.div
      variants={action === 'POP' ? backwardAnimation : forwardAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      <div style={{ border: '1px solid red' }}>
        {children}
      </div>
    </motion.div>
  )
}

export default AnimatedPage
