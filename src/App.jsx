import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 font-display text-gray-900 dark:text-gray-100 antialiased transition-colors duration-500">
      <ThemeToggle />
      <Hero />
      <Footer />
      {/* <About /> */}
      {/* <Experience /> */}
      <Projects />
      {/* <Testimonial /> */}
      <Stats />
      <Contact />
    </div>
  );
}

export default App;
