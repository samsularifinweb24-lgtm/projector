

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("");
      return;
    }
    console.log(formData);
    alert("");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-center overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Form */}
      <motion.form
        className="relative w-full max-w-xl mx-auto flex flex-col gap-4 sm:gap-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none"
          required
        />
        <motion.button
          type="submit"
          className="mt-3 px-6 py-3 sm:py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl font-semibold text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Footer Text */}
      <motion.div
        className="mt-12 sm:mt-16 text-blue-300 text-xs sm:text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        © 2025 Sohan. Crafted with 💙 using React, Tailwind & Framer Motion.
      </motion.div>

      {/* Extra Footer Quote / Description */}
      <motion.p
        className="mt-2 sm:mt-4 text-blue-400 text-xs sm:text-sm md:text-base italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        "Let’s build something amazing together! Reach out and say hi."
      </motion.p>

      {/* Optional extra decorative text */}
      <motion.div
        className="mt-1 sm:mt-6 text-blue-200 text-xs sm:text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.7 }}
      >
        We usually reply within 24 hours.
      </motion.div>
    </section>
  );
}









