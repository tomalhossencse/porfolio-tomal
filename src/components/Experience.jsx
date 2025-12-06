import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const experiencesRef = useRef([])

  const experiences = [
    {
      id: 1,
      title: 'Micro-interactions Awwwards Team',
      company: 'Focus Lab Agency - United State',
      duration: 'JOB DURATION - 2 YEARS',
      isPrimary: true
    },
    {
      id: 2,
      title: 'Senior UI Designer',
      company: 'User-Hub - Bangladesh',
      duration: 'JOB DURATION - 1 YEAR',
      isPrimary: false
    },
    {
      id: 3,
      title: 'Product Design',
      company: 'Zomato Digial Agency - India',
      duration: 'JOB DURATION - 2 YEARS',
      isPrimary: false
    },
    {
      id: 4,
      title: 'Webflow Team Manager',
      company: 'Google Team - UK',
      duration: 'JOB DURATION - 2 YEARS',
      isPrimary: false
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      // Staggered experience cards animation
      experiencesRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-16 sm:py-24 max-w-4xl">
      <header ref={headerRef} className="relative text-center mb-16">
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'backOut' }}
        >
          <span className="star-icon">●</span>
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 -mt-4"
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'backOut' }}
        >
          <div className="scribble-icon"></div>
        </motion.div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-widest text-gray-900 dark:text-white">
          EXPERIENCE
        </h1>
        <p className="mt-4 max-w-md mx-auto text-sm text-black dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>
      </header>

      <main className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            ref={(el) => (experiencesRef.current[index] = el)}
            className={`${
              exp.isPrimary
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-primary text-white'
                : 'bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700'
            } p-6 sm:p-8 flex items-center space-x-6 rounded`}
            whileHover={{ 
              scale: 1.02,
              boxShadow: exp.isPrimary 
                ? '0 10px 30px rgba(0, 0, 0, 0.3)' 
                : '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className={`flex-shrink-0 ${
                exp.isPrimary ? 'bg-white/20' : 'bg-gradient-to-br from-green-400 to-green-600 dark:bg-gray-300 text-white dark:text-black'
              } w-10 h-10 flex items-center justify-center font-bold text-lg rounded`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {exp.id}
            </motion.div>
            <div className="flex-grow">
              <h2 className={`text-xl font-bold ${exp.isPrimary ? '' : 'text-gray-900 dark:text-white'}`}>
                {exp.title}
              </h2>
              <p className={`text-sm ${exp.isPrimary ? 'text-gray-300' : 'text-black dark:text-gray-400'}`}>
                {exp.company}
              </p>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className={`w-px h-8 ${exp.isPrimary ? 'bg-gray-500' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
              <p className={`text-xs font-semibold tracking-wider ${exp.isPrimary ? '' : 'text-gray-500 dark:text-gray-400'}`}>
                {exp.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  )
}

export default Experience
