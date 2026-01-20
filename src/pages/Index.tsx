import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Resume from "@/components/Resume";
import MyLearning from "@/components/MyLearning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Projects /> */}
        <Skills />
        <Blog />
        {/* <Testimonials /> */}
        {/* <Resume /> */}
        <MyLearning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
