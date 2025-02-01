import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import "./App.css";
import ProjectsShowcase from "./components/Project";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starting state
        whileInView={{ opacity: 1, y: 0 }} // When the element comes
        transition={{ duration: 0.8 }}
      >
        <Navbar />
        <Hero />
        <Sponsors />
        <About />
        <HowItWorks />
        <ProjectsShowcase />
        {/* <Features />
      <Testimonials />
      <Team />
      <Newsletter />
      <FAQ /> */}
        <Footer />
        <ScrollToTop />
      </motion.div>
    </>
  );
}

export default App;
