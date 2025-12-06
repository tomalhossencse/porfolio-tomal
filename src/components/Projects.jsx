import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowAltCircleLeft, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header elements scroll animation
      gsap.from(".projects-icon", {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".projects-description", {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });

      // Project cards stagger animation
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <header ref={headerRef} className="relative text-center mb-24">
        <motion.div
          className="absolute top-0 left-0 -translate-y-12"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="dot-grid">
            {Array.from({ length: 72 }).map((_, i) => {
              const opacity = i % 6 >= 4 ? (i % 6 === 4 ? "/70" : "/40") : "";
              return (
                <motion.div
                  key={i}
                  className={`dot bg-primary${opacity} dark:bg-gray-200${opacity}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.01,
                    ease: "backOut",
                  }}
                ></motion.div>
              );
            })}
          </div>
        </motion.div>
        <img
          alt="Starburst icon"
          className="projects-icon w-12 h-12 mx-auto mb-6 dark:invert"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcHYLVdNx91nd1I0MSqSupVpMyg9ZhAhG5cNdWhMXWG3f9jRAWFgAtkTyU4Kn7W4EDT-Awg5GsUXgVnQ6ienDvB9yH_BqQGFVurwltA9l5aZXE_ZqIJnqN3RAQfZ4GOSdjnOV9pWH4e3yZm6T0MeCZsfQYMXcRtbTgSYAGqiC4IYujtZUjGQyh1bKNJq3UYAug1iTOwxcC0yhyb7Liq1NXAlAeeACNQrcmxJRBvsYG-oN4R2XsqhpmkJUyK_Q_xjKFDCXHMoFlE_k"
        />
        <h1 className="projects-title text-5xl font-bold tracking-wider text-primary dark:text-gray-100">
          MY RECENT PROJECTS
        </h1>
        <p className="projects-description mt-4 max-w-lg mx-auto text-gray-600 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </header>

      <main ref={cardsRef} className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <motion.div
            className="project-card bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <header className="flex justify-between items-center mb-6">
              <motion.div
                className="font-bold text-primary dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                showcasy.
              </motion.div>
              <div className="flex items-center space-x-2">
                <motion.a
                  className="text-sm px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.a>
                {/* <motion.button
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="material-icons text-xl">menu</span>
                </motion.button> */}
              </div>
            </header>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Featured Project
              </p>
              <h2 className="text-4xl font-bold text-primary dark:text-white leading-tight">
                Donor Point{" "}
                <span className="text-gray-300 dark:text-gray-600">
                  Blood Donation Platform
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.img
                alt="Portrait of a designer named Ivan"
                className="w-full h-auto rounded-lg object-cover"
                src="https://i.ibb.co.com/5gkpK74p/donate-point-vercel-app.png"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* <motion.div
            className="project-card bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col justify-between"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          > */}
          {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h3 className="text-2xl font-bold text-primary dark:text-white">
                A visual company
              </h3>
              <p className="text-lg text-gray-400 dark:text-gray-500 mt-2">
                pipefy
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                UIUX & Branding <br />
                2022
              </p>
            </motion.div> */}
          {/* <motion.div
              className="mt-8 self-end w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  alt="Black award trophy with a W logo"
                  className="w-20 h-auto mx-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ-r61J3nPh_S-zKaEhPXq-Wzw8WKb4xjyBcGhvN7jiwqiHeifZowMZAuvnVNVUc0CC2ja1JNGtBpQ8I1gzsKd32gsX_Xb9tG9pfDK5K_2ymlpZ39NHShJ1CFzjGTzq8L6SqetaUkqwPhIICCnRg0GHiIVyu2NNHl8pHUHPINRu0U1WshwSZ010Q3XTnX5fzSt9OSHwg4_Rm0eSFJ4KTImOscqaw-eGyCUP_VHr46OdL519DQTIfv7lG6M242CZT2zYwNKTxy2-Is"
                  animate={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.div>
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <p className="text-sm font-medium text-primary dark:text-white">
                  Honorable Mention
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  2022 - AWWWARDS
                </p>
              </motion.div>
            </motion.div> */}
          {/* </motion.div> */}
        </div>

        <div className="flex flex-col justify-center text-left h-full px-0 lg:px-12">
          <motion.span
            className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full self-start mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            NEXT JS
          </motion.span>
          <motion.h2
            className="text-5xl font-bold text-primary dark:text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            A MERN Stack Project for Doner Point.
          </motion.h2>
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed my-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Donor Point is a React-based web application that helps users
            quickly find blood donors by blood group and location. It includes
            secure authentication, real-time donor data, and an easy-to-use
            interface to save lives faster.
          </motion.p>

          {[
            "Full-stack web app connecting blood donors with patients",
            "Search donors by blood group and location",
            "Secure user and donor registration and login",
            "Technology : Next.js , React.js, Node.js, Express.js, MongoDB, Firebase Auth",
          ].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              className="flex items-center my-2"
            >
              <span className="material-symbols-outlined text-xl text-blue-600 dark:text-white mr-3">
                check
              </span>
              {item}
            </motion.li>
          ))}

          <motion.a
            className="inline-flex items-center space-x-3  text-lg font-medium text-primary dark:text-white mt-12 group"
            href="https://donate-point.vercel.app/"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ x: 100 }}
          >
            <div className="pb-1 flex justify-between hover:text-blue-600 duration-200 transition-all gap-2 items-center border-b border-primary dark:border-white">
              <span> See Details</span>
              <span>
                <FaArrowRight size={12} />
              </span>
            </div>
            {/* <motion.span
              className="material-icons text-2xl"
              animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              arrow_outward
            </motion.span> */}
          </motion.a>
        </div>
      </main>
    </div>
  );
};

export default Projects;
