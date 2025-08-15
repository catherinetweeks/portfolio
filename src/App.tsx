import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans text-black bg-white">
      {/* nav bar */}
      <nav className="fixed top-0 left-0 w-full bg-white z-50">
        <ul className="flex justify-center gap-8 py-4 text-zinc-400">
          <li>
            <button onClick={() => scrollToSection(homeRef)}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(aboutRef)}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(contactRef)}>Contact</button>
          </li>
        </ul>
      </nav>

      {/* home */}
      <section ref={homeRef} className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl px-4"
        >
          <h1 className="text-3xl md:text-5xl font-light">
            Hello, I'm <span className="italic font-serif">Catherine Weeks</span>, a software engineer,
            front-end developer and design enthusiast.
          </h1>

          {/* clickable icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/catherinetweeks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6"/>
            </a>

            <a
              href="https://www.linkedin.com/in/catherinetweeks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6"/>
            </a>
          </div>

          {/* view my work */}
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="mt-8 px-6 py-3 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
          >
            View my work →
          </button>
        </motion.div>
      </section>

      {/* projects */}
      <section ref={projectsRef} className="h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl">Projects Section</h2>
      </section>

      {/* about */}
      <section ref={aboutRef} className="h-screen flex items-center justify-center">
        <h2 className="text-3xl">About Section</h2>
      </section>

      {/* contact */}
      <section ref={contactRef} className="h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl">Contact Section</h2>
      </section>
    </div>
  );
}