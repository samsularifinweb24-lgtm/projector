


// import { motion, useTransform, useScroll,  } from "framer-motion";
// import { FaGithub, FaLinkedin, FaFacebook, FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode } from "react-icons/fa";
// import { SiRedux, SiTailwindcss } from "react-icons/si";
// import { Typewriter } from "react-simple-typewriter";

// export default function Hero() {
//   const { scrollY } = useScroll();

//   // Parallax transforms
//   const haloYTop = useTransform(scrollY, [0, 500], [0, 40]);
//   const haloYBottom = useTransform(scrollY, [0, 500], [0, -40]);
//   const ringsY1 = useTransform(scrollY, [0, 500], [0, 20]);
//   const ringsY2 = useTransform(scrollY, [0, 500], [0, -20]);
//   const imageY = useTransform(scrollY, [0, 500], [0, 25]);

//   return (
//     <section className="h-screen flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-16 bg-gradient-to-br from-gray-900 via-black to-blue-950 overflow-hidden relative">

//       {/* Left Side: Text Content */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left md:pr-12 relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400"
//         >
//           <Typewriter
//             words={["Frontend Developer ⚡", "Creative UI Designer 🎨", "Modern Web Apps 🚀"]}
//             loop
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1500}
//           />
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="mt-4 text-gray-300 text-lg sm:text-xl md:text-2xl"
//         >
//           Crafting interactive and modern web experiences with passion.
//         </motion.p>

//         <motion.p
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.7 }}
//           className="mt-2 text-gray-400 text-md sm:text-lg md:text-xl"
//         >
//           Skilled in React, Node.js, Tailwind CSS, Redux & modern web technologies.
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.05, boxShadow: "0 0 25px #ec4899" }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-6 px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 transition font-semibold text-white text-base"
//         >
//           See My Work
//         </motion.button>

//         <div className="flex gap-4 sm:gap-6 mt-6 text-2xl sm:text-3xl md:text-4xl text-gray-400">
//           <a href="https://github.com" target="_blank" className="hover:text-white">
//             <FaGithub />
//           </a>
//           <a href="https://linkedin.com" target="_blank" className="hover:text-purple-400">
//             <FaLinkedin />
//           </a>
//           <a href="https://facebook.com" target="_blank" className="hover:text-blue-500">
//             <FaFacebook />
//           </a>
//         </div>
//       </div>

//       {/* Right Side: Profile Image + Parallax Halo + Orbiting Icons + Stars */}
//       <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0 relative">

//         {/* Background stars (different layers for depth) */}
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full opacity-30 shadow-[0_0_4px_1px_rgba(255,255,255,0.5)]"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//             animate={{ y: [0, -10 + Math.random() * 20, 0] }}
//             transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
//           />
//         ))}

//         {/* Top Halo (parallax) */}
//         <motion.div
//           className="absolute w-64 sm:w-72 md:w-80 h-32 sm:h-36 md:h-40 bg-blue-400/25 blur-3xl top-0 left-1/2 -translate-x-1/2"
//           style={{ y: haloYTop }}
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         />

//         {/* Bottom Halo (parallax) */}
//         <motion.div
//           className="absolute w-64 sm:w-72 md:w-80 h-32 sm:h-36 md:h-40 bg-blue-400/25 blur-3xl bottom-0 left-1/2 -translate-x-1/2"
//           style={{ y: haloYBottom }}
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         />

//         {/* Neon Rings (parallax layers) */}
//         <motion.div
//           className="absolute w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 border-2 border-cyan-400/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl"
//           style={{ y: ringsY1 }}
//           animate={{ rotate: [0, 360] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//         />
//         <motion.div
//           className="absolute w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 border-2 border-purple-400/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl"
//           style={{ y: ringsY2 }}
//           animate={{ rotate: [0, -360] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         />

//         {/* Profile Image (parallax) */}
//         <motion.img
//           src="/myphoto.jpg"
//           alt="Profile"
//           className="w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 object-cover shadow-2xl rounded-none relative z-10 cursor-pointer"
//           style={{ y: imageY }}
//           whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05, boxShadow: "0 0 35px #3b82f6" }}
//           transition={{ type: "spring", stiffness: 120 }}
//         />

//         {/* Orbiting Tech Icons */}
//         {[
//           { icon: <FaReact className="text-cyan-400" />, angle: 0 },
//           { icon: <FaJs className="text-yellow-400" />, angle: 60 },
//           { icon: <FaHtml5 className="text-orange-500" />, angle: 120 },
//           { icon: <FaCss3Alt className="text-blue-400" />, angle: 180 },
//           { icon: <SiRedux className="text-purple-500" />, angle: 240 },
//           { icon: <SiTailwindcss className="text-sky-400" />, angle: 300 },
//           { icon: <FaNode className="text-green-500" />, angle: 360 },
//         ].map((item, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-2xl sm:text-3xl md:text-4xl"
//             style={{
//               top: "50%",
//               left: "50%",
//               transform: `rotate(${item.angle}deg) translate(110px) rotate(-${item.angle}deg)`,
//             }}
//             animate={{ rotate: 360 }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             whileHover={{ scale: 1.3, textShadow: "0 0 12px #fff" }}
//           >
//             {item.icon}
//           </motion.div>
//         ))}
//       </div>

//       {/* Scroll Down */}
//       <motion.div
//         animate={{ y: [0, 12, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-2xl cursor-pointer"
//       >
//         ▼
//       </motion.div>
//     </section>
//   );
// }



import { motion, useTransform, useScroll } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax transforms
  const haloYTop = useTransform(scrollY, [0, 500], [0, 40]);
  const haloYBottom = useTransform(scrollY, [0, 500], [0, -40]);
  const ringsY1 = useTransform(scrollY, [0, 500], [0, 20]);
  const ringsY2 = useTransform(scrollY, [0, 500], [0, -20]);
  const imageY = useTransform(scrollY, [0, 500], [0, 25]);

  return (
    <section className="h-screen flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-16 bg-gradient-to-br from-gray-900 via-black to-blue-950 overflow-hidden relative">

      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left md:pr-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400"
        >
          <Typewriter
            words={["Frontend Developer ⚡", "Creative UI Designer 🎨", "Modern Web Apps 🚀"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-gray-300 text-lg sm:text-xl md:text-2xl"
        >
          Crafting interactive and modern web experiences with passion.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-2 text-gray-400 text-md sm:text-lg md:text-xl"
        >
          Skilled in React, Node.js, Tailwind CSS, Redux & modern web technologies.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px #ec4899" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 transition font-semibold text-white text-base"
        >
          See My Work
        </motion.button>

        <div className="flex gap-4 sm:gap-6 mt-6 text-2xl sm:text-3xl md:text-4xl text-gray-400">
          <a href="https://github.com" target="_blank" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-purple-400">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-500">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Side: Profile Image + Halo + Orbiting Icons */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0 relative">

        {/* Background stars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full opacity-30 shadow-[0_0_4px_1px_rgba(255,255,255,0.5)]"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -10 + Math.random() * 20, 0] }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}

        {/* Halo layers */}
        <motion.div
          className="absolute w-64 sm:w-72 md:w-80 h-32 sm:h-36 md:h-40 bg-blue-400/25 blur-3xl top-0 left-1/2 -translate-x-1/2"
          style={{ y: haloYTop }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-64 sm:w-72 md:w-80 h-32 sm:h-36 md:h-40 bg-purple-400/25 blur-3xl bottom-0 left-1/2 -translate-x-1/2"
          style={{ y: haloYBottom }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbiting rings */}
        <motion.div
          className="absolute w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 border-2 border-cyan-400/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl"
          style={{ y: ringsY1 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 border-2 border-purple-400/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl"
          style={{ y: ringsY2 }}
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Profile Image with neon-glow design */}
        <motion.div
          className="w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 relative group flex items-center justify-center"
          style={{ y: imageY }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {/* Glow layers */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 opacity-30 blur-xl"></div>

          {/* Image */}
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl relative z-10">
            <img
              src="/myphoto.jpg"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Outer halo */}
          <div className="absolute -inset-3 rounded-full border-2 border-blue-400 opacity-50 blur-xl animate-ping"></div>
        </motion.div>

        {/* Orbiting tech icons */}
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
            className="absolute text-2xl sm:text-3xl md:text-4xl"
            style={{ top: "50%", left: "50%", transform: `rotate(${item.angle}deg) translate(110px) rotate(-${item.angle}deg)` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.3, textShadow: "0 0 12px #fff" }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-2xl cursor-pointer"
      >
        ▼
      </motion.div>
    </section>
  );
}





