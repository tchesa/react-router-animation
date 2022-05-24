import { motion, Transition, Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { useHistory } from 'react-router-dom'

const transition: Transition = {
  type: 'spring',
  bounce: 0,
  duration: 0.4,
}

const variants: Variants = {
  exit: (action: string) => {
    return {
      x: action === 'POP' ? '100%' : '-100%',
      transition,
    }
  },

  enter: () => {
    return {
      x: 0,
      transition,
    }
  },
}

const AnimatedPage = ({ className, children }: { className?: string, children: ReactNode }) => {
  const { action } = useHistory()

  return (
    <motion.div
      initial={{ x: action === 'POP' ? '-100%' : '100%' }}
      exit="exit"
      animate="enter"
      variants={variants}
      transition={transition}
      className={['animated-page', className].join(' ')}
    >
      <div style={{ border: '1px solid red' }}>
        {children}
      </div>
    </motion.div>
  )
}

export default AnimatedPage
