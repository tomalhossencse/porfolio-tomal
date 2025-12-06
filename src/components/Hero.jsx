import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Hero = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const wavyLineRef = useRef(null);

  useEffect(() => {
    // GSAP animations for title
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Animate image with rotation and scale
      gsap.from(imageRef.current, {
        scale: 0.8,
        rotation: -10,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      // Continuous wavy line animation
      gsap.to(wavyLineRef.current, {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "linear",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="container mx-auto px-10 md:px-12 py-8 relative">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full blur-3xl dark:from-cyan-300 dark:via-pink-400 dark:to-yellow-300 dark:opacity-20 pointer-events-none"
      />

      <header className="flex justify-between items-start">
        <motion.a
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold border-b-2 border-blue-600 dark:border-primary text-gray-900 dark:text-white pb-1"
          href="#"
        >
          it's me
        </motion.a>
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex space-x-12"
        >
          {[
            {
              title: "My Projects",
              desc: "See all of nice project I have done.",
            },
            { title: "About Me", desc: "Learn about my self what i do" },
            { title: "Contact me", desc: "tomalhossen78@gmail.com" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <a
                className="flex items-center text-gray-900 dark:text-white font-semibold border-b border-gray-900 dark:border-white pb-1"
                href="#"
              >
                {item.title}
                {index < 2 && (
                  <span className="material-symbols-outlined text-xl ml-1">
                    arrow_outward
                  </span>
                )}
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.nav>
      </header>

      <main className="mt-10 md:mt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left" ref={titleRef}>
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="text-3xl inline-block"
          ></motion.span>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mt-2">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-bold inline-block"
            >
              I'm Md. Tomal Hossen
            </motion.span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center mt-6 justify-center md:justify-start"
          >
            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="border-t border-gray-900 dark:border-white mr-4"
            />
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              Fontend Developer
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-black dark:text-gray-400 mt-8 max-w-lg mx-auto md:mx-0"
          >
            Hello! I'm Md. Tomal Hossen. I'm a{" "}
            <span className="font-semibold text-black dark:text-white">
              Frontend Developer.
            </span>{" "}
            I build end-to-end web applications using MongoDB, Express, React,
            and Node.js — focused on performance, scalability, and real user
            value.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="space-y-3 mt-8 inline-block text-left"
          >
            {[
              "Authentic products",
              "Elegant solutions to real problems",
              "Driven by users & feedback",
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                className="flex items-center"
              >
                <span className="material-symbols-outlined text-xl text-blue-600 dark:text-white mr-3">
                  check
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex items-center space-x-6 mt-12 justify-center md:justify-start"
          >
            <motion.a
              href="https://wa.me/8801824443725"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-primary text-white py-3 px-8 rounded-full font-semibold hover:opacity-80 transition-opacity"
            >
              Let's Talk
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              className="flex items-center font-semibold border-b border-gray-900 dark:border-white pb-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              href="https://docs.google.com/document/d/1nKEVO4-PpFwoUo4CQNpPangq3nS3zi5Q/edit?usp=sharing&ouid=100805599083116373830&rtpof=true&sd=true"
            >
              Download Cv
              <span className="material-symbols-outlined ml-1">download</span>
            </motion.a>
          </motion.div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
          <motion.img
            ref={imageRef}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            alt="Portrait of Madhu, a product designer with curly hair and glasses, smiling warmly."
            className="rounded-lg z-10 w-full max-w-md"
            src="https://i.ibb.co.com/hJxg9yz6/tomal-img.png"
          />

          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 z-50 bg-white/30 w-[450px] rounded-b-xl p-2"
          >
            <motion.span
              animate={{ rotate: [180, 0] }}
              transition={{ duration: 2, repeat: 0, ease: "linear" }}
              className="material-symbols-outlined text-2xl text-gray-900 dark:text-white ml-4"
            >
              <img
                className="rounded-full w-12"
                src="https://skillicons.dev/icons?i=javascript"
                alt=""
              />
            </motion.span>

            <motion.span
              animate={{ rotate: [180, 0] }}
              transition={{ duration: 2, repeat: 0, ease: "linear" }}
              className="material-symbols-outlined text-2xl text-gray-900 dark:text-white ml-4"
            >
              <img
                className="rounded-full w-12"
                src="https://skillicons.dev/icons?i=react"
                alt=""
              />
            </motion.span>
            <motion.span
              animate={{ rotate: [180, 0] }}
              transition={{ duration: 2, repeat: 0, ease: "linear" }}
              className="material-symbols-outlined text-2xl text-gray-900 dark:text-white ml-4"
            >
              <img
                className="rounded-full w-12"
                src="https://skillicons.dev/icons?i=next"
                alt=""
              />
            </motion.span>
            <motion.span
              animate={{ rotate: [180, 0] }}
              transition={{ duration: 2, repeat: 0, ease: "linear" }}
              className="material-symbols-outlined text-2xl text-gray-900 dark:text-white ml-4"
            >
              <img
                className="rounded-full w-12"
                src="https://skillicons.dev/icons?i=firebase"
                alt=""
              />
            </motion.span>
            <motion.span
              animate={{ rotate: [180, 0] }}
              transition={{ duration: 2, repeat: 0, ease: "linear" }}
              className="material-symbols-outlined text-2xl text-gray-900 dark:text-white ml-4"
            >
              <img
                className="rounded-full w-12"
                src="https://skillicons.dev/icons?i=express"
                alt=""
              />
            </motion.span>
            <motion.span
              animate={{ rotate: [180, 0] }}
              transition={{ duration: 2, repeat: 0, ease: "linear" }}
              className="material-symbols-outlined text-2xl text-gray-900 dark:text-white ml-4"
            >
              <img
                className="rounded-full w-12"
                src="https://skillicons.dev/icons?i=mongodb"
                alt=""
              />
            </motion.span>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
