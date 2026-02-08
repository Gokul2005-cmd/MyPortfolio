import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingCube } from './components/FloatingCube';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-black overflow-x-hidden">
      <FloatingCube />
      <Navigation />

      <main>
        <div className="mb-[32rem]">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>


        <div id="skills">
          <Skills />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="certifications">
          <Certifications />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
