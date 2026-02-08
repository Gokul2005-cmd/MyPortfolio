import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'September 2025',
  },
  {
    title: 'JavaScript Essentials 2',
    issuer: 'Cisco Networking Academy',
    date: 'September 2025',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'October 2025',
  },
  {
    title: 'Customer Engagement: Communication and Personality Dynamics',
    issuer: 'IBM SkillsBuild',
    date: 'October 2025',
  },
  {
    title: 'Customer Engagement: Problem Solving and Process Controls',
    issuer: 'IBM SkillsBuild',
    date: 'October 2025',
  },
];

export function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

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
            CERTIFICATIONS
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="border border-white/20 p-6 rounded-sm hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award size={20} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl mb-2">{cert.title}</h3>
                    <p className="text-gray-400 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
