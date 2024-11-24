import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import Skills from "../pages/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
      <Router>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>

        <Footer />
      </Router>
  );
}

export default App;
