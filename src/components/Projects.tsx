

import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Personal Project One",
      description: "This is my first project card with my own photo.",
      image: "/sohan3.jpg",
      gradient: "from-blue-400 to-cyan-300",
      shadow: "shadow-blue-500/50",
      bg: "bg-gray-900",
    },
    {
      title: "Personal Project Two",
      description: "Another styled project card with hover pink effect.",
      image: "/sohan1.jpg",
      gradient: "from-pink-400 to-pink-300",
      shadow: "shadow-pink-500/50",
      bg: "bg-gray-800",
    },
    {
      title: "Personal Project Three",
      description: "Third card with green glowing shadow hover effect.",
      image: "/sohan2.jpg",
      gradient: "from-green-400 to-green-300",
      shadow: "shadow-green-500/50",
      bg: "bg-gray-700",
    },
  ];

  const { scrollY } = useScroll();
  const cardY = useTransform(scrollY, [0, 800], [0, -30]);
  const haloY = useTransform(scrollY, [0, 800], [0, 20]);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-blue-950"
    >
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-center">
        My Projects
      </h2>

      {/* Floating Particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-20 shadow-[0_0_4px_1px_rgba(255,255,255,0.5)]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -10 + Math.random() * 20, 0] }}
          transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={{ y: cardY }}
            whileHover={{ scale: 1.07 }}
            className={`p-6 ${project.bg} rounded-3xl shadow-xl relative overflow-hidden transition-transform duration-300 cursor-pointer`}
          >
            {/* Top Glow */}
            <motion.div
              style={{ y: haloY }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-72 md:w-80 h-20 sm:h-24 md:h-28 bg-gradient-to-b from-white/20 to-transparent blur-3xl pointer-events-none"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Bottom Glow */}
            <motion.div
              style={{ y: haloY }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-72 md:w-80 h-20 sm:h-24 md:h-28 bg-gradient-to-t from-white/20 to-transparent blur-3xl pointer-events-none"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-64 sm:h-72 md:h-80 object-cover shadow-lg"
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.5 }}
            />

            {/* Title */}
            <h3
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} mb-2`}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl">{project.description}</p>

            {/* Neon Glowing overlay */}
            <motion.div
              className={`absolute inset-0 rounded-3xl pointer-events-none ${project.shadow} opacity-0`}
              whileHover={{ opacity: 0.45 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

