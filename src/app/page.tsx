import PageWrapper from "./PageWrapper";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ChatButton from "../components/ChatButton";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";
import BlogPreview from "../components/BlogPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0b0b12] to-black text-white">
      <PageWrapper>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <BlogPreview />
        <Contact />
        <Footer />
      </PageWrapper>
      <ChatButton />
    </div>
  );
}
