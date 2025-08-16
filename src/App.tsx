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
    <div className="font-inter text-black bg-white">
      {/* nav bar */}
      <nav className="fixed top-0 left-0 w-full bg-white">
        <ul className="flex justify-center gap-4 sm:gap-6 md:gap-8 py-4 text-zinc-400">
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
      <section ref={homeRef} className="h-screen flex items-center justify-center p-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="max-w-4xl px-4"
        >
          <h1 className="text-[clamp(1.8rem,_6vw,_3rem)] font-inter">
            Hello, I'm <span className="italic font-bodoni">Catherine Weeks</span>, a software engineer with a passion for front-end design.
          </h1>

          {/* clickable icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/catherinetweeks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8"/>
            </a>

            <a
              href="https://www.linkedin.com/in/catherinetweeks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8"/>
            </a>
          </div>

          {/* view my work */}
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="mt-14 px-6 py-3 bg-black text-[clamp(0.8rem,_3vw,_1.2rem)] text-white rounded-xl flex items-center gap-2 hover:-translate-y-1"
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