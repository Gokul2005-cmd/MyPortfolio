import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const responsibilities = [
    'Serve as a key frontend developer responsible for the development and maintenance of the company\'s real-time meeting room booking system (Duler)',
    'Spearheaded the development of the user interface (UI) across a multi-platform ecosystem, including tablet displays (PixRoom), mobile applications (PixMob), and web administration portals (PixWeb)',
    'Ensured seamless synchronization and consistent user experience across all three client applications',
    'Focused on client-side logic, API integration and presentation, utilizing modern frontend frameworks like React JS and Next JS',
    'Collaborated closely with the backend and design teams to translate business requirements into functional, aesthetically pleasing features',
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-black text-white py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl mb-16 tracking-tight"
            style={{ y }}
          >
            EXPERIENCE
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="border border-white/20 p-8 md:p-12 rounded-sm hover:border-white/40 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-3xl mb-2 tracking-wide">FRONTEND DEVELOPER</h3>
                <p className="text-xl text-gray-400">Pixelkube Technologies</p>
              </motion.div>
              <motion.div
                className="text-gray-500 mt-4 md:mt-0"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p>June 2025 - Present</p>
                <p className="text-sm">Currently Employed</p>
              </motion.div>
            </div>

            <div className="space-y-4">
              {responsibilities.map((responsibility, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
