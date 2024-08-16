import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx"

function App() {
  return<>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Skills/>
    <Footer/>
  </>
}

export default App
