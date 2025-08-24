import { FaGithub, FaLinkedin, FaLocationArrow, FaGraduationCap, FaHeart } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { skills } from "./data/skills";
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
    <div className="font-inter text-black bg-white cursor-default selection:bg-blue-800 selection:text-white">
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
      <section
        ref={projectsRef}
        className="py-20 px-6">
        <h2 className="flex justify-center text-[clamp(1.5rem,_3vw,_1.8rem)] font-bodoni-italic mb-10">Recent Projects</h2>
        <motion.div
          initial={{ y: 40}}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mr-10 ml-10 lg:mr-20 lg-ml-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project}/>
            ))}
          </div>
        </motion.div>
      </section>

{/* about */}
      <section
        ref={aboutRef}
        className="flex flex-col items-center py-20 px-6"
      >
        <h2 className="flex justify-center text-[clamp(1.5rem,_3vw,_1.8rem)] font-bodoni-italic mb-10">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl w-full">
          {/* Left Column (1/3) */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-start gap-3">
              <FaLocationArrow className="w-4 h-4 mt-1" />
              <p className="font-semibold">Boston</p>
            </div>

            <div className="flex items-start gap-3">
              <FaGraduationCap className="w-4 h-4 mt-1" />
              <p className="font-semibold">Smith College</p>
            </div>

            <div className="flex items-start gap-3">
              <FaHeart className="w-4 h-4 mt-1" />
              <p className="font-semibold">
                Running, ceramics, art history, classic literature
              </p>
            </div>
          </div>

          {/* Right Column (2/3) */}
          <div className="space-y-4 text-lg md:col-span-2">
            <p>
              I&apos;m a Computer Science student at Smith College located in the
              Boston area.
            </p>
            <p>
              I&apos;m currently looking for opportunities to grow as a front-end
              developer and work on products that help people feel more creative and
              organized. Check out my recent projects, and contact me here.
            </p>
          </div>
        </div>

              {/* Skills Section */}
              <div className="flex flex-wrap justify-center gap-2 mt-10 max-w-md">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="text-md bg-gray-200 text-gray-700 px-2 py-1 rounded-full hover:translate-y-0.5 transition-all"
                  >
                    {skill.tool}
                  </div>
                ))}
              </div>
      </section>

      {/* contact */}
      <section ref={contactRef} className="flex flex-col items-center justify-center py-20">
        <h2 className="flex justify-center text-[clamp(1.5rem,_3vw,_1.8rem)] font-bodoni-italic mb-10">Contact Me!</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaGithub className="w-4 h-4 mt-1" />
              <div>
                <a href="https://github.com/catherinetweeks" 
                target="_blank"
                rel="noopener noreferrer"
                className="">github.com/catherinetweeks</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaLinkedin className="w-4 h-4 mt-1" />
              <div>
                <a 
                href="https://www.linkedin.com/in/catherinetweeks"
                target="_blank"
                rel="noopener noreferrer"
                className=""> 
                www.linkedin.com/in/catherinetweeks
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IoIosMail className="w-5 h-5 mt-1" />
              <div>
                <p className="">
                  catherinetweeks@gmail.com
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-500 pt-15">This site was handmade with React, Vite, Typescript, Tailwind, and Framer Motion, and love.</p>
      </section>
    </div>
  );
}