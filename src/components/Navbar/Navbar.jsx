import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavbarStyles.module.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const location = useLocation();

    // Handle window resize
    const handleResize = () => {
        const mobile = window.innerWidth <= 768;
        setIsMobile(mobile);
        if (!mobile && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        if (isMobile) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Check if current path matches link
    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <>
            <nav
                id="navbar"
                className={styles.navbar}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className={styles.navLeft}>
                    <Link
                        to="/"
                        className={styles.logo}
                        onClick={closeMenu}
                        aria-label="Adam Counihan - Home"
                    >
                        Adam Counihan
                    </Link>
                </div>

                <div className={styles.navRight}>
                    {/* Desktop Navigation */}
                    <ul className={styles.navList} role="menubar">
                        {navItems.map((item) => (
                            <li key={item.path} className={styles.navItem} role="none">
                                <Link
                                    to={item.path}
                                    className={`${styles.navLink} ${isActiveLink(item.path) ? styles.active : ''}`}
                                    onClick={closeMenu}
                                    role="menuitem"
                                    aria-current={isActiveLink(item.path) ? 'page' : undefined}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className={styles.bar} aria-hidden="true"></span>
                        <span className={styles.bar} aria-hidden="true"></span>
                        <span className={styles.bar} aria-hidden="true"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.overlay} ${isMobile && isMenuOpen ? styles.show : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* Mobile Menu */}
            <div
                className={`${styles.mobileMenu} ${isMobile && isMenuOpen ? styles.mobileMenuOpen : ''}`}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
            >
                <ul className={styles.mobileNavList} role="menu">
                    {navItems.map((item) => (
                        <li key={item.path} className={styles.mobileNavItem} role="none">
                            <Link
                                to={item.path}
                                className={`${styles.navLink} ${isActiveLink(item.path) ? styles.active : ''}`}
                                onClick={closeMenu}
                                role="menuitem"
                                aria-current={isActiveLink(item.path) ? 'page' : undefined}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Navbar;
