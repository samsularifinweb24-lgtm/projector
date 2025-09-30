
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-950 px-4 sm:px-6">

      {/* Floating Particles */}
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full opacity-60 shadow-[0_0_6px_2px_rgba(255,255,255,0.5)]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30 + Math.random() * 60, 0],
            x: [0, -20 + Math.random() * 40, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Profile Image with Halo */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Halo */}
        <motion.div
          className="absolute w-44 h-44 sm:w-56 md:w-72 rounded-full bg-blue-400/20 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src="/myphoto.jpg"
          alt="Profile"
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-[0_0_40px_rgba(0,0,255,0.8)] object-cover relative z-10"
        />

        {/* Orbiting Tech Icons */}
        <div className="absolute inset-0">
          {[
            { icon: <FaReact className="text-cyan-400" />, angle: 0 },
            { icon: <FaJs className="text-yellow-400" />, angle: 60 },
            { icon: <FaHtml5 className="text-orange-500" />, angle: 120 },
            { icon: <FaCss3Alt className="text-blue-400" />, angle: 180 },
            { icon: <SiRedux className="text-purple-500" />, angle: 240 },
            { icon: <SiTailwindcss className="text-sky-400" />, angle: 300 },
            { icon: <FaNode className="text-green-500" />, angle: 360 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-xl sm:text-2xl md:text-3xl"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${item.angle}deg) translate(80px) rotate(-${item.angle}deg)`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        {/* Neon Rings */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-44 sm:w-56 md:w-72 h-44 sm:h-56 md:h-72 rounded-full border-2 border-cyan-400/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 text-2xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 relative z-10"
      >
        <Typewriter
          words={[
            "Frontend Developer ⚡",
            "Creative UI Designer 🎨",
            "Building Modern Web Apps 🚀",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mt-4 text-sm sm:text-lg md:text-2xl text-gray-300 relative z-10"
      >
        Passionate about creating interactive and modern web solutions.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #3b82f6" }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-white text-sm sm:text-base relative z-10"
      >
        See My Work
      </motion.button>

      {/* Social Icons */}
      <div className="flex gap-4 sm:gap-6 mt-6 text-xl sm:text-2xl md:text-3xl text-gray-400 relative z-10">
        <a href="https://github.com" target="_blank" className="hover:text-white">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com" target="_blank" className="hover:text-blue-500">
          <FaFacebook />
        </a>
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 cursor-pointer text-gray-400 text-lg sm:text-xl md:text-2xl"
      >
        ▼
      </motion.div>
    </section>
  );
}





