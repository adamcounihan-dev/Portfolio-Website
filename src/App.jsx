import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's a hash, scroll to that element
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        } else {
            // No hash, scroll to top
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }, [pathname, hash]);

    useEffect(() => {
        const handleLinkClick = (event) => {
            const link = event.target.closest('a[href]');
            if (link) {
                const href = link.getAttribute('href');
                const currentPath = window.location.pathname;

                // Check if it's a same-page link without hash
                if (href === currentPath) {
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                }

                // Handle hash links
                if (href.includes('#')) {
                    const [linkPath, hash] = href.split('#');
                    if (linkPath === currentPath || linkPath === '') {
                        event.preventDefault();
                        const element = document.getElementById(hash);
                        if (element) {
                            element.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
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
                <Route path="/contact" element={<Contact />} />
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
