
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon, FaSearch, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

// ================= Navbar =================
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) setDarkMode(savedTheme === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const bgColor = darkMode ? "bg-black/70" : "bg-white/70";
  const menuBg = darkMode ? "bg-black/95" : "bg-white/95";
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <nav className={`fixed w-full ${bgColor} backdrop-blur-md shadow-lg z-50 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3 sm:p-4 md:p-6">
        <motion.div
          className="cursor-pointer text-blue-400 font-bold text-lg sm:text-xl md:text-2xl"
          animate={{ y: [0, -3, 0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Futurist
        </motion.div>

        <ul className={`hidden md:flex gap-4 sm:gap-6 ${textColor} text-sm sm:text-base`}>
          {["About", "Skills", "Projects", "Contact"].map((text) => (
            <li key={text}>
              <a href={`#${text.toLowerCase()}`} className="hover:text-blue-400 transition">{text}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className={`text-base sm:text-xl ${textColor} hover:text-blue-400 transition`}><FaSearch /></button>
          <button onClick={() => setDarkMode(!darkMode)} className={`text-base sm:text-xl ${textColor}`} aria-label="Toggle Dark/Light Mode">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setOpen(!open)} className={`md:hidden text-xl sm:text-2xl ${textColor}`} aria-label="Toggle menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              style={{ backgroundColor: darkMode ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className={`fixed top-0 right-0 h-full w-2/3 ${menuBg} backdrop-blur-lg shadow-lg z-50`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <ul className={`flex flex-col items-center gap-6 sm:gap-8 py-20 text-lg sm:text-xl ${textColor}`}>
                {["About", "Skills", "Projects", "Contact"].map((text) => (
                  <li key={text}>
                    <a href={`#${text.toLowerCase()}`} onClick={() => setOpen(false)}>{text}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ================= Hero =================
export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-r from-gray-800 via-black to-gray-900 px-4 sm:px-6">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          animate={{ y: [0, -20 + Math.random() * 40, 0], x: [0, -10 + Math.random() * 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 + Math.random() * 3, delay: Math.random() * 2 }}
        />
      ))}

      <motion.img
        src="/public/myphoto.jpg"
        alt="Profile"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-500 shadow-xl mb-4 sm:mb-6 object-cover relative z-10"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent z-10"
      >
        Futuristic Landing
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-2 sm:mt-4 text-base sm:text-lg md:text-2xl text-gray-300 relative z-10"
      >
        Immersive, Neon, Modern Web Design
      </motion.p>

      <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-gray-400 relative z-10">
        <a href="https://github.com" target="_blank" className="hover:text-white"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400"><FaLinkedin /></a>
        <a href="https://facebook.com" target="_blank" className="hover:text-blue-500"><FaFacebook /></a>
      </div>
    </section>
  );
}

// ================= Skills =================
export function Skills() {
  const skills = ["HTML","CSS","JavaScript","React","TailwindCSS","Redux","Node.js","TypeScript"];
  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden px-4 sm:px-6">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          animate={{ y: [0, -15 + Math.random() * 30, 0], x: [0, -10 + Math.random() * 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 + Math.random() * 3, delay: Math.random() * 2 }}
        />
      ))}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-400 mb-8 sm:mb-12 relative z-10 animate-pulse">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 relative z-10">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{
              scale: 1.2,
              rotate: [0, 3, -3, 0],
              textShadow: "0 0 12px #3b82f6, 0 0 25px #60a5fa",
              boxShadow: "0 0 20px #3b82f6, 0 0 35px #60a5fa"
            }}
            transition={{ type:"spring", stiffness:300 }}
            className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl cursor-pointer shadow-lg transition-all"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}



