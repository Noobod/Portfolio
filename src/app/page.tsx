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
import Education from "../components/Education";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* SAFE: wrapped in client animation */}
      <PageWrapper>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </PageWrapper>

      {/* VERY IMPORTANT: BlogPreview must be OUTSIDE client wrapper */}
      <BlogPreview />

      {/* SAFE again */}
      <PageWrapper>
        <Contact />
        <Footer />
      </PageWrapper>

      <ChatButton />
    </div>
  );
}
