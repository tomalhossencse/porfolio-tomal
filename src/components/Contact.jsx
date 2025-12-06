import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([])
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const arrowRef = useRef(null)
  const formRef = useRef(null)
  const dotsRef = useRef(null)
  
  const services = [
    'Mobile App',
    'Website Design',
    'Branding',
    'Webflow development',
    'App design',
    'Graphic design',
    'Wordpress'
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header text
      gsap.from(headerRef.current.children, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })

      // Animate arrow
      gsap.from(arrowRef.current, {
        scrollTrigger: {
          trigger: arrowRef.current,
          start: 'top 80%',
        },
        x: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
      })

      // Continuous arrow pulse
      gsap.to(arrowRef.current, {
        x: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Animate form inputs
      gsap.from(formRef.current.querySelectorAll('.form-field'), {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      })

      // Animate decorative dots
      if (dotsRef.current) {
        gsap.from(dotsRef.current.children, {
          scrollTrigger: {
            trigger: dotsRef.current,
            start: 'top 80%',
          },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: {
            amount: 0.8,
            from: 'random'
          },
          ease: 'back.out(1.7)'
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const toggleService = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16 sm:py-24 relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-300/30 to-green-300/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/20 to-teal-200/20 dark:from-indigo-500/15 dark:to-violet-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <main className="max-w-4xl mx-auto">
        <header ref={headerRef} className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            <span className="text-gray-400 dark:text-gray-500">Say Hi!</span> and tell me about
          </h1>
          <div className="flex items-center justify-center gap-4 mt-2">
            <svg ref={arrowRef} className="w-24 h-6 text-blue-600 dark:text-cyan-400" fill="none" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H98M98 12L86 2M98 12L86 22" stroke="currentColor" strokeWidth="3"></path>
            </svg>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
              your idea
            </h1>
          </div>
          <p className="mt-8 text-lg text-black dark:text-gray-300 font-semibold">
            Have a nice works? reach out and let's chat.
          </p>
        </header>

        <form ref={formRef} className="mt-16 relative bg-gradient-to-br from-white/90 via-blue-50/60 to-green-50/60 dark:from-slate-800/90 dark:via-slate-800/80 dark:to-slate-900/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-blue-200/70 dark:border-cyan-500/30">
          <div aria-hidden="true" className="absolute top-0 right-0 -mr-8 -mt-8 hidden lg:block">
            <div ref={dotsRef} className="grid grid-cols-5 gap-2">
              {Array.from({ length: 25 }).map((_, i) => (
                <motion.div 
                  key={i} 
                  className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-emerald-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <motion.div 
              className="form-field"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-sm font-bold text-black dark:text-cyan-300 mb-1" htmlFor="name">
                Name*
              </label>
              <input
                className="mt-2 block w-full bg-white dark:bg-slate-700/50 border-0 border-b-2 border-blue-200 dark:border-slate-600 p-3 focus:ring-0 focus:border-blue-600 focus:shadow-lg focus:shadow-blue-500/30 dark:focus:border-cyan-400 dark:focus:shadow-cyan-400/30 placeholder:text-gray-500 dark:placeholder:text-slate-400 text-black dark:text-gray-100 transition-all duration-300 rounded-t-xl"
                id="name"
                name="name"
                placeholder="Hello.."
                type="text"
              />
            </motion.div>

            <motion.div 
              className="form-field"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-sm font-bold text-black dark:text-blue-300 mb-1" htmlFor="email">
                Email*
              </label>
              <input
                className="mt-2 block w-full bg-white dark:bg-slate-700/50 border-0 border-b-2 border-indigo-200 dark:border-slate-600 p-3 focus:ring-0 focus:border-indigo-600 focus:shadow-lg focus:shadow-indigo-500/30 dark:focus:border-blue-400 dark:focus:shadow-blue-400/30 placeholder:text-gray-500 dark:placeholder:text-slate-400 text-black dark:text-gray-100 transition-all duration-300 rounded-t-xl"
                id="email"
                name="email"
                placeholder="Where can i reply"
                type="email"
              />
            </motion.div>

            <motion.div 
              className="md:col-span-2 form-field"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-sm font-bold text-black dark:text-purple-300 mb-1" htmlFor="company">
                Company name
              </label>
              <input
                className="mt-2 block w-full bg-white dark:bg-slate-700/50 border-0 border-b-2 border-emerald-200 dark:border-slate-600 p-3 focus:ring-0 focus:border-emerald-600 focus:shadow-lg focus:shadow-emerald-500/30 dark:focus:border-purple-400 dark:focus:shadow-purple-400/30 placeholder:text-gray-500 dark:placeholder:text-slate-400 text-black dark:text-gray-100 transition-all duration-300 rounded-t-xl"
                id="company"
                name="company"
                placeholder="Your company or website?"
                type="text"
              />
            </motion.div>

            <div className="md:col-span-2 form-field">
              <label className="block text-sm font-bold text-black dark:text-pink-300 mb-1">
                What's in your mind?*
              </label>
              <div className="mt-4 flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <motion.button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2.5 text-sm font-semibold border-2 rounded-full transition-all duration-300 ${
                      selectedServices.includes(service)
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white border-transparent dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 shadow-xl shadow-blue-500/50 dark:shadow-cyan-500/50'
                        : 'border-blue-300 dark:border-slate-600 bg-white dark:bg-slate-700/50 text-black dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 dark:hover:bg-slate-600/50 hover:border-blue-500 dark:hover:border-cyan-400 hover:shadow-md dark:hover:shadow-cyan-400/20'
                    }`}
                  >
                    {service}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className="mt-16 flex justify-end items-center form-field"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-right">
              <div className="flex items-center gap-4">
                <motion.button
                  className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 text-white px-10 py-4 rounded-full font-bold shadow-2xl shadow-blue-500/60 dark:shadow-cyan-500/60 overflow-hidden group"
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">Send Me</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-purple-500 dark:via-pink-500 dark:to-rose-500"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Send Me</span>
                </motion.button>
                <motion.svg 
                  className="w-8 h-8 text-blue-600 dark:text-cyan-400" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                  animate={{ 
                    rotate: [0, 10, -10, 10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <path d="M13.1444 3.0125C12.8315 4.90253 11.2384 7.02554 11.0543 8.97063C10.8702 10.9157 12.3552 13.0371 11.9615 14.9707C11.5678 16.9044 9.17937 18.0645 7.82063 19.3875"></path>
                  <path d="M17.0625 10.5C15.8118 11.8318 13.916 13.3888 12.4375 14.25"></path>
                  <path d="M11.25 21C11.25 21 15.375 16.125 16.5 14.25C17.625 12.375 21 7.5 21 7.5"></path>
                </motion.svg>
              </div>
              <p className="text-xs text-black dark:text-slate-300 mt-3 font-semibold">
                I'll must get back to you within 24 hours
              </p>
            </div>
          </motion.div>
        </form>
      </main>

      <motion.footer 
        className="mt-24 pt-8 border-t-2 border-blue-200 dark:border-slate-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <motion.div 
              className="w-8 h-8 border-2 border-blue-600 dark:border-cyan-400 flex items-center justify-center rotate-45 bg-gradient-to-br from-blue-500/30 to-emerald-500/30 dark:from-cyan-500/30 dark:to-purple-500/30"
              whileHover={{ rotate: 225, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-6 h-6 border-2 border-blue-600 dark:border-cyan-400 flex items-center justify-center">
                <span className="w-0.5 h-4 bg-blue-600 dark:bg-cyan-400 -rotate-45"></span>
                <span className="w-4 h-0.5 bg-blue-600 dark:bg-cyan-400 absolute"></span>
              </div>
            </motion.div>
            <nav className="flex items-center gap-6 text-sm font-semibold text-black dark:text-slate-300">
              <motion.a 
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors" 
                href="#"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Dribbble
              </motion.a>
              <motion.a 
                className="hover:text-indigo-600 dark:hover:text-blue-400 transition-colors" 
                href="#"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Linkdin
              </motion.a>
              <motion.a 
                className="hover:text-emerald-600 dark:hover:text-purple-400 transition-colors" 
                href="#"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Instagram
              </motion.a>
              <motion.a 
                className="hover:text-green-600 dark:hover:text-pink-400 transition-colors" 
                href="#"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Behance
              </motion.a>
            </nav>
          </div>
          <p className="text-sm text-black dark:text-slate-300 font-semibold">Personal portfolio©2024</p>
        </div>
      </motion.footer>
    </div>
  )
}

export default Contact
