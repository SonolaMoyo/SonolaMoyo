import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Solutions from "@/components/Solutions";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Solutions />
        <Blog />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
