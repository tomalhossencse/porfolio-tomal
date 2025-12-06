import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'

const Stats = () => {
  const stats = [
    { icon: 'checklist', value: 2450, label: 'Project Completed Done' },
    { icon: 'handshake', value: 1085, label: 'Satisfied Clients' },
    { icon: 'groups', value: 7, label: 'My Team Members' },
    { icon: 'language', value: 2790, label: 'World Wide Customer' }
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))
  const counterRefs = useRef([])

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const counter = { value: 0 }
        gsap.to(counter, {
          value: stat.value,
          duration: 2,
          delay: index * 0.2,
          ease: 'power2.out',
          onUpdate: () => {
            setAnimatedValues(prev => {
              const newValues = [...prev]
              newValues[index] = Math.floor(counter.value)
              return newValues
            })
          }
        })
      })
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <section ref={sectionRef} className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          className="relative border-t border-b border-gray-200 dark:border-gray-700"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div 
            className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700 md:grid-cols-4 md:divide-x md:divide-y-0"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center justify-center p-8 text-center"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.span 
                  className="material-icons-outlined text-gray-800 dark:text-gray-200"
                  variants={iconVariants}
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                  style={{ fontSize: '48px' }}
                >
                  {stat.icon}
                </motion.span>
                <motion.p 
                  ref={el => counterRefs.current[index] = el}
                  className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                >
                  {animatedValues[index].toLocaleString()}
                </motion.p>
                <motion.p 
                  className="mt-2 text-base text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Stats
