import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: "design_services",
      title: "UI-UX\nCreative\nDesign",
      isPrimary: true,
    },
    {
      icon: "brush",
      title: "Visual\nGraphic Design",
      isPrimary: false,
    },
    {
      icon: "hub",
      title: "Strategy &\nDigital\nMarketing",
      isPrimary: false,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with split text effect
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate service cards with stagger
      gsap.from(servicesRef.current.children, {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <motion.header
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-6"
        >
          <motion.hr
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-t border-gray-400 dark:border-gray-600"
          />
          {["FACEBOOK", "LINKDIN", "GITHUB"].map((social, index) => (
            <motion.a
              key={social}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.05 }}
              className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition"
              href="#"
            >
              <i className={`fab fa-${social.toLowerCase()}-f`}></i>
              <span>{social}</span>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition"
            target="_blank"
            href="https://mail.google.com/mail/u/0/?to=tomalhossen78@gmail.com&fs=1&tf=cm"
          >
            <span className="material-icons-outlined text-base">Email : </span>
            <span>tomalhossen78@gmail.com</span>
          </motion.a>
          <motion.hr
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-t border-gray-400 dark:border-gray-600"
          />
        </motion.div>
      </motion.header>

      <main className="mt-24 md:mt-32 relative">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/3"
          >
            <div className="flex items-center space-x-3">
              <motion.hr
                initial={{ width: 0 }}
                animate={isInView ? { width: "2rem" } : { width: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="border-t border-gray-800 dark:border-gray-200"
              />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-sm font-semibold tracking-widest text-gray-600 dark:text-gray-400"
              >
                MY SERVICES ?
              </motion.span>
            </div>
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mt-4 uppercase text-gray-900 dark:text-white leading-tight"
            >
              What I'm
              <br />
              Offering
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full lg:w-2/3 flex flex-col items-start lg:items-end mt-8 lg:mt-0"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-md text-black dark:text-gray-400 text-left lg:text-left"
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-primary text-white dark:text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest hover:opacity-80 transition"
              href="#"
            >
              ALL SERVICE
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 -rotate-90 origin-bottom-left hidden xl:flex items-center space-x-4"
        >
          <span className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 whitespace-nowrap">
            SCROLL DOWN
          </span>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="h-px bg-gray-500 dark:bg-gray-400"
          />
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-br from-green-400 to-green-600 dark:bg-primary rounded-full p-3 transform rotate-90 text-white dark:text-white hover:opacity-80 transition"
          >
            <span className="material-icons-outlined text-2xl">
              arrow_downward
            </span>
          </motion.button>
        </motion.div>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{
                duration: 0.6,
                delay: 1.2 + index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className={`${
                service.isPrimary
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 dark:bg-primary text-white"
                  : "border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-gray-900 dark:text-white hover:border-blue-500 dark:hover:border-white transition"
              } p-10 flex flex-col justify-between h-80 cursor-pointer`}
            >
              <div>
                <motion.span
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="material-icons-outlined inline-block"
                >
                  {service.icon}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className="text-2xl font-bold uppercase mt-6 leading-tight whitespace-pre-line"
                >
                  {service.title}
                </motion.h2>
              </div>
              <motion.a
                whileHover={{ x: 5 }}
                className={`flex items-center text-sm font-bold tracking-widest group ${
                  service.isPrimary ? "" : "text-gray-800 dark:text-gray-200"
                }`}
                href="#"
              >
                <span>READ MORE</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="material-icons-outlined text-lg ml-2"
                >
                  arrow_forward
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
