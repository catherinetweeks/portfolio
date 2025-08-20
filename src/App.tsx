import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useRef } from "react";
import { motion } from "framer-motion";
import HideOnScroll from "./components/HideOnScroll";
import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";

//scroll to section navigation
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
    <div className="font-inter text-black bg-white cursor-default">
      {/* nav bar */}
      <HideOnScroll>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 bg-white rounded-3xl shadow-sm px-8 py-4 hover:translate-y-2 transition-all">
        <ul className="flex justify-center gap-4 sm:gap-10 md:gap-14 text-[clamp(0.6rem,_5vw,_1rem)]">
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
      </HideOnScroll>

      {/* home */}
      <section ref={homeRef} className="h-screen flex items-center justify-center p-5 pt-15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="max-w-4xl px-4"
        >
          <h1 className="text-[clamp(2rem,_5vw,_2.8rem)] font-inter">
            Hello, I'm <span className="italic font-bodoni">Catherine Weeks</span>, a software engineer with a passion for responsive and clean front-end <span className="italic font-bodoni">design</span>.
          </h1>

          {/* clickable icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/catherinetweeks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8 hover:text-zinc-500 transition-all"/>
            </a>

            <a
              href="https://www.linkedin.com/in/catherinetweeks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8 hover:text-zinc-500 transition-all"/>
            </a>
          </div>

          {/* view my work */}
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="mt-14 px-6 py-3 bg-black text-[clamp(0.8rem,_3vw,_1.2rem)] text-white rounded-xl flex items-center gap-2 hover:translate-y-1 transition-all cursor-pointer"
          >
            View my work →
          </button>
        </motion.div>
      </section>

      {/* projects */}
      <motion.section
        ref={projectsRef}
        className="py-20 px-6">
        <h2 className="flex text-[clamp(1.5rem,_3vw,_2rem)] font-inter">Recent Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 justify-items-center m-10 sm:m-10 lg:m-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project}/>
          ))}
        </div>
      </motion.section>

      {/* about */}
      <section ref={aboutRef} className="h-screen flex items-center justify-center">
        <h2 className="text-3xl">About Section</h2>
      </section>

      {/* contact */}
      <section ref={contactRef} className="h-screen flex items-center justify-center bg-gray-50">
        <h2 className="">shoot me an email at catherinetweeks@gmail.com</h2>
      </section>
    </div>
  );
}