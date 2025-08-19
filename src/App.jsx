import { useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function ScrollToHash({ maxAttempts }) {
    const { pathname, hash } = useLocation();

    // Function to scroll to top of page
    const scrollToTop = () => {
        const performScroll = () => {
            // Force instant scroll first
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

            // Then apply smooth scroll
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 50);
        };

        performScroll();

        // Additional attempts to ensure scroll works
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 200);

        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        });
    };

    // Function to scroll to specific element by ID
    const scrollToElement = (elementId, cancelled) => {
        const findScrollContainer = (el) => {
            let parent = el && el.parentElement;
            while (parent) {
                const style = getComputedStyle(parent);
                if (/(auto|scroll|overlay)/.test(style.overflowY)) return parent;
                parent = parent.parentElement;
            }
            return document.scrollingElement || document.documentElement;
        };

        const getNavbarHeight = () => {
            const nav = document.querySelector('[data-navbar], nav, header, .navbar, #navbar');
            return nav ? Math.ceil(nav.getBoundingClientRect().height) || 0 : 0;
        };

        let attempts = 0;

        const tryScroll = () => {
            if (cancelled.current) return;
            attempts++;
            const el = document.getElementById(elementId);

            if (!el || el.getBoundingClientRect().height === 0) {
                if (attempts < maxAttempts) {
                    requestAnimationFrame(tryScroll);
                }
                return;
            }

            const navbarHeight = getNavbarHeight();
            const scroller = findScrollContainer(el);

            const elRect = el.getBoundingClientRect();
            const scrollerRect = (scroller === document.scrollingElement || scroller === document.documentElement)
                ? { top: 0 }
                : scroller.getBoundingClientRect();

            const scrollerTop = (scroller === document.scrollingElement || scroller === document.documentElement)
                ? (window.scrollY || document.documentElement.scrollTop || 0)
                : scroller.scrollTop || 0;

            const visualOffset = (window.visualViewport && typeof window.visualViewport.offsetTop === "number")
                ? window.visualViewport.offsetTop
                : 0;

            const target = Math.max(0, Math.round(elRect.top - scrollerRect.top + scrollerTop - navbarHeight - visualOffset));

            // Perform scroll
            try {
                if (scroller === document.scrollingElement || scroller === document.documentElement) {
                    window.scrollTo({ top: target, behavior: "smooth" });
                } else {
                    scroller.scrollTo({ top: target, behavior: "smooth" });
                }
            } catch {
                if (scroller === document.scrollingElement || scroller === document.documentElement) {
                    window.scrollTo(0, target);
                } else {
                    scroller.scrollTop = target;
                }
            }

            setTimeout(() => {
                const current = (scroller === document.scrollingElement || scroller === document.documentElement)
                    ? (window.scrollY || document.documentElement.scrollTop || 0)
                    : scroller.scrollTop || 0;

                if (!cancelled.current && Math.abs(current - target) > 5 && attempts < maxAttempts) {
                    requestAnimationFrame(tryScroll);
                }
            }, 120);
        };

        requestAnimationFrame(tryScroll);
    };

    // Main function to determine which scroll function to call
    const handleScroll = () => {
        if (!hash) {
            scrollToTop();
        } else {
            const elementId = hash.replace("#", "");
            const cancelled = { current: false };

            scrollToElement(elementId, cancelled);

            return () => {
                cancelled.current = true;
            };
        }
    };

    useEffect(() => {
        const cleanup = handleScroll();
        return cleanup || (() => {});
    }, [pathname, hash, maxAttempts]);

    return null;
}

ScrollToHash.propTypes = {
    maxAttempts: PropTypes.number
};

ScrollToHash.defaultProps = {
    maxAttempts: 40
};

function AppContent() {
    return (
        <>
            <ScrollToHash />
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
