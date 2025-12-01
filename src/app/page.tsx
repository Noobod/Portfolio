import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ChatButton from "../components/ChatButton";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black via-[#0b0b12] to-black text-white min-h-screen">
      <Navbar />
      <Hero/>
      <About />
      <Projects />
      <Skills  />
      <Experience />
      <Contact />
      <ChatButton />
      <Footer />
    </div>
  );
}
