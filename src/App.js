import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>

      <NavBar />
       <Home />
      <About />
      <Projects />
      <Experience />
      <Contact /> 
      <SocialLinks /> 
      </ThemeProvider>
  );
}

export default App;
