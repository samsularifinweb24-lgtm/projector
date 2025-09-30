
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  // ⭐ Mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        x.set(offsetX / 20);
        y.set(offsetY / 20);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-6"
    >
      {/* 🌌 Top & Bottom Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-b from-blue-900/60 to-transparent z-0" />
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-blue-900/60 to-transparent z-0" />

      {/* ✨ Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full shadow-[0_0_6px_2px_rgba(0,0,255,0.6)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 🪞 Main Card */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center gap-6 sm:gap-10 
                   p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-800/30 to-black/60 
                   backdrop-blur-xl shadow-2xl border border-blue-400/20"
      >
        {/* 👤 Profile Image */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg flex-shrink-0">
          <img
            src="/public/sohan4.jpg" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 📖 About Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400 drop-shadow-lg mb-3 sm:mb-4">
            Hi, I’m Sohan 👋
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
            আমি একজন ওয়েব ডেভেলপার।  
            HTML, CSS, JavaScript, React, Redux, Node.js, Tailwind ইত্যাদি ব্যবহার করে 
            আধুনিক ওয়েবসাইট ও অ্যাপ তৈরি করি।  
            আমার লক্ষ্য হলো এমন ডিজাইন বানানো যা শুধু সুন্দরই না, বরং দ্রুত ও ব্যবহারকারীবান্ধব।
          </p>

          {/* 🎛️ Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#cv"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg text-sm sm:text-base"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold shadow-lg text-sm sm:text-base"
            >
              Hire Me
            </a>
          </div>
        </div>
      </motion.div>

      {/* ⚡ Skills Icons */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-10 text-3xl sm:text-4xl md:text-5xl text-blue-400">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJsSquare />
        <FaReact />
        <SiRedux />
        <SiTailwindcss />
        <FaNodeJs />
      </div>
    </section>
  );
}
