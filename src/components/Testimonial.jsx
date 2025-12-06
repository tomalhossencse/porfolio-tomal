import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Testimonial = () => {
  const containerRef = useRef(null)
  const labelRef = useRef(null)
  const quoteRef = useRef(null)
  const wavyLineRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return

    const ctx = gsap.context(() => {
      // Label animation with border growth
      gsap.from(labelRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      // Quote text stagger animation
      gsap.from(quoteRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      // Continuous wavy line animation
      gsap.to(wavyLineRef.current, {
        x: 20,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })
    }, containerRef)

    return () => ctx.revert()
  }, [isInView])

  return (
    <div ref={containerRef} className="bg-white w-full max-w-5xl mx-auto p-8 sm:p-12 md:p-16 relative overflow-hidden">
      <motion.button
        aria-label="Close testimonial"
        className="absolute top-8 right-8 sm:top-12 sm:right-12 text-black"
        initial={{ opacity: 0, rotate: -90, scale: 0 }}
        animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3, type: 'spring', bounce: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col">
          <div className="mb-8">
            <motion.p
              ref={labelRef}
              className="text-sm font-bold tracking-widest text-black uppercase pb-1 border-b-2 border-black inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
            >
              Client Feedback
            </motion.p>
          </div>
          <blockquote className="mb-12">
            <p ref={quoteRef} className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
              "I just wanted to share a quick note and let you know that you guys do a really good job."
            </p>
          </blockquote>
          <motion.div
            className="mt-auto"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.p
              className="text-xl font-bold text-black"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              Rohan Sing
            </motion.p>
            <motion.p
              className="text-base text-gray-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              Project Manager, Airflow Tech Inc
            </motion.p>
            <motion.svg
              ref={wavyLineRef}
              className="mt-6 w-32 h-auto text-black"
              fill="none"
              viewBox="0 0 131 11"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ transformOrigin: 'left' }}
            >
              <path
                d="M1 5.39999C12.4 -2.20001 21.3333 1.73332 28.5 5.39999C35.6667 9.06665 44.4 12.2 54.5 5.39999C64.6 -1.40001 77.5 -0.800006 85.5 5.39999C93.5 11.6 102.833 10.2667 110 5.39999C117.167 0.533322 124.6 -1.20001 130 5.39999"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
            </motion.svg>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring', bounce: 0.3 }}
        >
          <motion.div
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <img
              alt="Portrait of Rohan Sing smiling, wearing glasses and a black hoodie."
              className="w-full h-full object-cover star-clip"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrXRgJXIF-DgeeCbegXAvE4SDMEixOfcwvnvb5qnne5RMfzdtnbQWLwIt2Xk_iVbKjmu0asrzZ-38nucaNbdU6XuGqY3QsUbvGUQxCVwhdnG8qdgjJFKAQjuWJvwCp9ULT8Yzk0Lf3fogVW2R7WO2mv-O8Tnjz_LoljHpRU3rrLkqqYmS7lzuWRotOzypE3Sz8jU6J1Ro0FUANGagtnnzni0QRecYMbRpDEHuZVCydV99BZHQLD1lcRJw7IryB6foivD41Y_0cvfw"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 opacity-50 text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 0.5, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.svg
          fill="none"
          height="20"
          viewBox="0 0 60 20"
          width="60"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M1 5C5.83333 1.66667 9.8 0.6 13.5 5C17.2 9.4 21.3333 10.3333 25 5C28.6667 -0.333333 33.1667 -0.333333 36.5 5C40.1667 10.3333 44.5 9.83333 48.5 5C52.5 0.166667 56.1667 1.16667 59 5"
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1 15C5.83333 11.6667 9.8 10.6 13.5 15C17.2 19.4 21.3333 20.3333 25 15C28.6667 9.66667 33.1667 9.66667 36.5 15C40.1667 20.3333 44.5 19.8333 48.5 15C52.5 10.1667 56.1667 11.1667 59 15"
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Testimonial
