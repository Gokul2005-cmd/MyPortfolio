import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black text-white py-32 px-6 overflow-hidden mt-48 md:mt-64"
    >

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl mb-16 tracking-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            ABOUT ME
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Left Column - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ y }}
              className="lg:col-span-1"
            >
              <div className="relative aspect-square">
                {/* Decorative frame */}
                <motion.div
                  className="absolute -inset-3 border border-white/20"
                  animate={{
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Photo container */}
                <div className="relative h-full overflow-hidden border border-white/30">
                  <img
                    src="/images/photo-2.jpg"
                    alt="Developer at work"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Corner accents */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-white" />

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-6 left-0 bg-white text-black px-4 py-2 text-sm tracking-wider"
                >
                  Software Engineer
                </motion.div>
              </div>
            </motion.div>

            {/* Middle Column - Text */}
            <motion.div
              className="lg:col-span-2 space-y-12"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8"
                >
                  Enthusiastic BCA student with a strong foundation in web development,
                  specializing in React, Tailwind CSS, and MongoDB. Passionate about building
                  modern, responsive applications with secure web applications for the enterprise.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  Quick learner actively exploring opportunities in full-stack development
                  and software engineering. Currently employed as a Frontend Developer at
                  Pixelkube Technologies.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div className="h-px w-16 bg-white mb-6" />
                  <h3 className="text-2xl mb-6 tracking-wide">EDUCATION</h3>
                  <div className="space-y-6">
                    <motion.div
                      className="border-l-2 border-white/20 pl-6"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-gray-500 mb-1">2023 - 2026</p>
                      <p className="text-lg">DR. N.S.A.M FIRST GRADE COLLEGE</p>
                      <p className="text-gray-400">BCA - 8.5 CGPA</p>
                    </motion.div>
                    <motion.div
                      className="border-l-2 border-white/20 pl-6"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-gray-500 mb-1">2021 - 2023</p>
                      <p className="text-lg">BEL COMP. PRE UNIVERSITY</p>
                      <p className="text-gray-400">PCME - 70%</p>
                    </motion.div>
                    <motion.div
                      className="border-l-2 border-white/20 pl-6"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-gray-500 mb-1">2010 - 2021</p>
                      <p className="text-lg">ST. PHILOMENA'S ENGLISH SCHOOL</p>
                      <p className="text-gray-400">ICSE - 85%</p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="space-y-12"
                >
                  <div>
                    <div className="h-px w-16 bg-white mb-6" />
                    <h3 className="text-2xl mb-6 tracking-wide">CONTACT</h3>
                    <div className="space-y-3 text-gray-400">
                      <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        gokulhm2005@gmail.com
                      </motion.p>
                      <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        +91 6363761412
                      </motion.p>
                      <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        Bangalore, India
                      </motion.p>
                    </div>
                  </div>

                  <div>
                    <div className="h-px w-16 bg-white mb-6" />
                    <h3 className="text-2xl mb-6 tracking-wide">LANGUAGES</h3>
                    <p className="text-gray-400">English · Hindi · Telugu · Kannada</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
