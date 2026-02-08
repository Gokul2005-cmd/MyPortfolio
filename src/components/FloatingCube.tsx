import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function FloatingCube() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Futuristic rotating geometric shape */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          perspective: '1200px',
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        }}
      >
        <motion.div
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Octahedron structure */}
          {/* Top pyramid */}
          <div
            className="absolute w-0 h-0 border-l-[150px] border-r-[150px] border-b-[200px] border-l-transparent border-r-transparent"
            style={{
              borderBottomColor: 'rgba(0, 0, 0, 0.04)',
              transform: 'translateZ(0px) rotateX(0deg)',
            }}
          />
          
          {/* Bottom pyramid */}
          <div
            className="absolute w-0 h-0 border-l-[150px] border-r-[150px] border-t-[200px] border-l-transparent border-r-transparent"
            style={{
              borderTopColor: 'rgba(0, 0, 0, 0.04)',
              transform: 'translateZ(0px) rotateX(180deg)',
            }}
          />

          {/* Wireframe edges */}
          {[0, 90, 180, 270].map((rotation) => (
            <div
              key={rotation}
              className="absolute w-px h-64 bg-gradient-to-b from-black/10 via-black/5 to-transparent"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: 'center',
                transform: `translate(-50%, -50%) rotateY(${rotation}deg) rotateX(45deg) translateZ(100px)`,
              }}
            />
          ))}

          {/* Glowing center core */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)',
              boxShadow: '0 0 40px rgba(0,0,0,0.1)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Orbiting particles */}
          {[0, 120, 240].map((angle) => (
            <motion.div
              key={angle}
              className="absolute w-2 h-2 rounded-full bg-black/20"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [
                  Math.cos((angle * Math.PI) / 180) * 120,
                  Math.cos(((angle + 360) * Math.PI) / 180) * 120,
                ],
                y: [
                  Math.sin((angle * Math.PI) / 180) * 120,
                  Math.sin(((angle + 360) * Math.PI) / 180) * 120,
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
                delay: angle / 360,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Animated grid lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-black/5 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
