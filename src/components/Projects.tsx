import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  vercel: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Gym Management System',
    description: 'A complete end-to-end full-stack solution delivered to a client. Built with Node.js and REST APIs, featuring a powerful admin dashboard to manage members, plans, and revenue analytics using MongoDB. Users can pay fees, book tours, and submit complaints through a dedicated portal.',
    tech: ['Node.js', 'MongoDB', 'REST APIs', 'React'],
    image: '/images/project-3.png',
    github: 'https://github.com/Gokul2005-cmd/Gym-Prototype.git',
    vercel: 'https://gym-prototype.vercel.app/',
  },
  {
    id: 2,
    title: 'Agriculture Platform',
    description: 'A comprehensive AI-powered platform for farmers. Features include a Gemini-integrated chatbot for real-time support, extensive crop cultivation guides, and live market data/weather forecasts fetched via third-party APIs. Optimized media handling with Cloudinary.',
    tech: ['React', 'Cloudinary', 'Gemini API', 'Rest APIs'],
    image: '/images/project-1.png',
    github: 'https://github.com/Gokul2005-cmd/College-project-v2.git',
    vercel: 'https://college-project-v2.vercel.app/',
  },
  {
    id: 3,
    title: 'Modern Landing Page',
    description: 'A high-converting product landing page focused on premium aesthetics and fluid animations. Built with a focus on conversion optimization and technical excellence.',
    tech: ['React', 'Motion', 'Tailwind CSS', 'Vite'],
    image: '/images/project-2.png',
    github: 'https://github.com/Gokul2005-cmd/duler.git',
    vercel: 'https://duler-three.vercel.app/',
  },
  {
    id: 4,
    title: 'Hotel Booking Platform',
    description: 'A professional hotel reservation system featuring a modern UI/UX. Offers seamless user authentication and an intuitive search/booking flow with a mobile-first design approach.',
    tech: ['React', 'Tailwind CSS', 'Lucide'],
    image: '/images/project-5.png',
    github: 'https://github.com/Gokul2005-cmd',
    vercel: '',
  },
  {
    id: 5,
    title: 'Smart Notes (Android)',
    description: 'A full-featured CRUD notes application built to explore native mobile development. Features include Local Storage persistence, Dark Mode support, RecyclerView-based dynamic lists, and a clean Material Design UI.',
    tech: ['Java', 'Android SDK', 'Material Design', 'Local Storage'],
    image: '/images/project-4.png',
    github: 'https://github.com/Gokul2005-cmd/Smart-Notes.git',
    vercel: '',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl mb-16 tracking-tight"
            style={{ y }}
          >
            SELECTED PROJECTS
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-sm mb-6 aspect-video bg-gray-100 border border-black/10">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                      filter: hoveredProject === project.id ? 'grayscale(0%)' : 'grayscale(100%)',
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.vercel && (
                      <motion.a
                        href={project.vercel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} className="text-black" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} className="text-black" />
                    </motion.a>
                  </motion.div>
                </div>

                <h3 className="text-2xl mb-3 tracking-wide">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: idx * 0.1 + techIdx * 0.05 }}
                      className="px-3 py-1 bg-black text-white text-sm rounded-full"
                    >
                      {tech}
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
