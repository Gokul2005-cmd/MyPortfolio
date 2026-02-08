import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      style={{ paddingTop: 'var(--navbar-height)' }}
    >

      {/* Subtle Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
          opacity,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-black/5 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 border border-black/5 rounded-full" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y }}
            className="relative flex justify-center"

          >
            {/* Main Photo Container */}
            <div className="relative aspect-[3/4] w-full max-w-xs md:max-w-sm max-h-[420px]">



              {/* Decorative background element */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-black/5 to-black/10 rounded-sm"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Photo frame */}
              <motion.div
                className="relative h-full overflow-hidden rounded-sm shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/images/photo-1.jpg"
                  alt="Gokul H M"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </motion.div>

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-black" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-black" />

              {/* Floating label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-8 -right-8 bg-black text-white px-6 py-3 rounded-sm"
              >
                <p className="text-sm tracking-wider">SOFTWARE DEVELOPER</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ y }}
            className="space-y-8"
          >
            {/* Name with high-fashion font */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                GOKUL
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                H M
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <div className="h-px w-24 bg-black" />
              <p className="text-xl md:text-2xl text-gray-600 tracking-wide">
                Frontend-Developer · Backend-Developer · Full-Stack-Developer · App-Developer
              </p>
              <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                Crafting elegant digital experiences with modern technologies.
                Specialized in building scalable web and mobile applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://www.linkedin.com/in/gokul-hm-07686a302/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/Gokul2005-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:gokulhm2005@gmail.com"
                className="w-14 h-14 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-black/20 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
