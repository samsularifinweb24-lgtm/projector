


import type { JSX } from "react";


export default function Footer(): JSX.Element {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("newsletter-email") as HTMLInputElement).value;
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    alert(`Thanks — ${email} subscribed (demo).`);
    form.reset();
  };

  return (
    <footer className="relative mt-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-gray-200 overflow-hidden">
      {/* subtle overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand / About */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                SA
              </div>
              <div>
                <h3 className="text-lg font-semibold">Samsul Arefin Sohan</h3>
                <p className="text-sm text-gray-400">Frontend Developer</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              I create modern, accessible and delightful web apps using React, TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-semibold text-white">Stay in touch</h4>
            <p className="mt-2 text-sm text-gray-400">Subscribe for updates — no spam, only cool stuff.</p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-3">
              <input
                name="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium shadow hover:scale-105 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links & Social */}
          <div>
            <h4 className="text-base font-semibold text-white">Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/samsularifinweb24-lgtm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-1.9c-3.3.7-4-1.6-4-1.6-.5-1.3-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0C17.8 5.6 18.8 5.9 18.8 5.9c.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z"
                  />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:samsularifinweb24@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} — Built with ❤️ by <span className="text-pink-400">Samsul Arefin Sohan</span>
        </div>
      </div>
    </footer>
  );
}
