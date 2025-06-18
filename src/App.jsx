import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname]);

    useEffect(() => {
        const handleLinkClick = (event) => {
            const link = event.target.closest('a[href]');
            if (link) {
                const href = link.getAttribute('href');
                const currentPath = window.location.pathname;

                if (href === currentPath) {
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                }
            }
        };

        document.addEventListener('click', handleLinkClick);
        return () => document.removeEventListener('click', handleLinkClick);
    }, []);

    return null;
}

function AppContent() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
