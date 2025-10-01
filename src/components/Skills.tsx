

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript } from "react-icons/si";

// ================= Skills =================
export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden px-4 sm:px-6">
      {/* Floating dots background */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          animate={{ y: [0, -15 + Math.random() * 30, 0], x: [0, -10 + Math.random() * 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 + Math.random() * 3, delay: Math.random() * 2 }}
        />
      ))}

      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-400 mb-12 relative z-10 animate-pulse">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 justify-center relative z-10">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              boxShadow: `0 0 15px ${skill.icon.props.className.includes("text-") ? skill.icon.props.className.split("-")[1] : "white"}, 0 0 30px #60a5fa`,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col justify-center items-center p-6 bg-gray-800/20 rounded-2xl shadow-lg cursor-pointer text-white font-semibold text-lg sm:text-xl md:text-2xl text-center relative"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center mb-3 text-4xl">
              {skill.icon}
            </div>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}





