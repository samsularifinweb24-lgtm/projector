

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon, FaSearch } from "react-icons/fa";



// ===== Navbar =====
export function Navbar({ searchText, setSearchText }: { searchText: string; setSearchText: (val: string) => void }) {
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
  const linkHover = darkMode ? "hover:text-blue-300" : "hover:text-blue-600";

  return (
    <nav className={`fixed w-full ${bgColor} backdrop-blur-md shadow-lg z-50 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 relative z-10">
        {/* Logo */}
        <motion.div
          className="cursor-pointer text-lg sm:text-xl md:text-2xl font-bold text-blue-400"
          animate={{ y: [0, -3, 0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Futurist
        </motion.div>

        {/* Desktop Links */}
        <ul className={`hidden md:flex gap-6 md:gap-8 ${textColor}`}>
          {["About", "Skills", "Projects", "Contact"].map((text) => (
            <li key={text}>
              <a href={`#${text.toLowerCase()}`} className={`${linkHover} transition-colors duration-200`}>
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search box on md+ */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search Skills..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={`pl-4 pr-10 py-1 sm:py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ${
                darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-300"
              }`}
            />
            <motion.button
              whileHover={{ scale: 1.2, boxShadow: "0px 0px 10px #3b82f6" }}
              whileTap={{ scale: 0.95 }}
              className={`absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full transition ${
                darkMode ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-blue-400 text-white hover:bg-blue-500"
              }`}
              aria-label="Search"
            >
              <FaSearch />
            </motion.button>
          </div>

          {/* Dark Mode */}
          <button onClick={() => setDarkMode(!darkMode)} className={`text-xl sm:text-2xl ${textColor}`} aria-label="Toggle Dark/Light Mode">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu */}
          <button onClick={() => setOpen(!open)} className={`md:hidden text-2xl sm:text-3xl ${textColor}`} aria-label="Toggle menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
              className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 ${menuBg} backdrop-blur-lg shadow-lg z-50`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <ul className={`flex flex-col items-center gap-6 sm:gap-8 py-20 text-lg sm:text-xl ${textColor}`}>
                {["About", "Skills", "Projects", "Contact"].map((text) => (
                  <li key={text} className="cursor-pointer">
                    <a href={`#${text.toLowerCase()}`} onClick={() => setOpen(false)}>
                      {text}
                    </a>
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

// ===== App =====
export default function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <main className="pt-24 px-4 sm:px-6 md:px-8">
        {/* Content goes here */}
      </main>
    </>
  );
}



