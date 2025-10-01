


import { useState, useEffect, type JSX } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaNodeJs, FaCss3Alt } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    console.log(formData);
    setSuccess("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(""), 4000);
  };

  const stars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black/90 text-white">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e3a8a, #0f172a, #1e3a8a)",
          backgroundSize: "400% 400%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-50"
          style={{ width: star.size, height: star.size, top: star.y, left: star.x }}
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, delay: star.delay }}
        />
      ))}

      {/* Floating Tech Icons around cursor */}
      {[FaReact, FaJsSquare, FaNodeJs, FaCss3Alt].map((Icon, idx) => (
        <motion.div
          key={idx}
          className="absolute text-blue-400 opacity-30"
          style={{
            top: cursorPos.y + Math.sin(idx) * 50,
            left: cursorPos.x + Math.cos(idx) * 50,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear", delay: idx * 0.5 }}
        >
          <Icon size={24} />
        </motion.div>
      ))}

      <motion.div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 gap-12">
        {/* Left Text */}
        <motion.div className="md:w-1/2 space-y-6 text-center md:text-left">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-blue-400"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Let’s Connect
          </motion.h2>
          <motion.p
            className="text-gray-300 leading-relaxed text-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            I’m always excited to collaborate on amazing web projects. Send a message and let's discuss ideas, build beautiful interfaces, or just say hi!
          </motion.p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-black/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col gap-5 relative overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {(["name", "email"] as (keyof FormData)[]).map((field) => (
            <input
              key={field}
              name={field}
              type={field === "email" ? "email" : "text"}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="w-full px-5 py-3 rounded-xl bg-black/70 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          ))}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full px-5 py-3 rounded-xl bg-black/70 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            required
          />

          <motion.button
            type="submit"
            className="mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 rounded-2xl font-semibold text-white shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {success && (
            <motion.p className="text-green-400 mt-2 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {success}
            </motion.p>
          )}
        </motion.form>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-16 text-center text-sm text-gray-400 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        © {new Date().getFullYear()} — Built with 💙 by Samsul Arefin Sohan
      </motion.div>
    </section>
  );
}


