

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/contact";  
import Skills from "./components/Skills";     
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}



