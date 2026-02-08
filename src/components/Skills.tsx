import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'FRONTEND',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'MUI'],
  },
  {
    title: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'AWS (S3, EC2, Lambda)', 'MERN Stack'],
  },
  {
    title: 'LANGUAGES',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C', 'Java'],
  },
  {
    title: 'DATABASES',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'TOOLS & PLATFORMS',
    skills: ['Keycloak', 'REST APIs', 'Axios', 'VS Code', 'Git/GitHub'],
  },
  {
    title: 'SOFT SKILLS',
    skills: ['Problem-Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-white py-32 px-6 overflow-hidden">
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
            TECHNICAL SKILLS
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="border-t-2 border-black pt-6"
              >
                <h3 className="text-xl mb-6 tracking-wide">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: idx * 0.1 + skillIdx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 border border-black/20 rounded-full text-sm hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
