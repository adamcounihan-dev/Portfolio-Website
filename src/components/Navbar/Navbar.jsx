import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarStyles.module.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        if (isMobile) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    return (
        <nav id="navbar" className={styles.navbar}>
            <div className={styles.navLeft}>
                <p className={styles.logo}>Adam Counihan</p>
            </div>
            <div className={styles.navRight}>
                <ul className={`${styles.navList} ${isMobile && isMenuOpen ? styles.menuOpen : ''}`}>
                    <li className={styles.navItem}>
                        <Link
                            to="/"
                            className={styles.navLink}
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link
                            to="/projects"
                            className={styles.navLink}
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link
                            to="/skills"
                            className={styles.navLink}
                            onClick={toggleMenu}
                        >
                            Skills
                        </Link>
                    </li>
                </ul>
                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>
            <div className={`${styles.mobileMenu} ${isMobile && isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <ul className={styles.mobileNavList}>
                    <li className={styles.mobileNavItem}>
                        <Link
                            to="/"
                            className={styles.navLink}
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={styles.mobileNavItem}>
                        <Link
                            to="/projects"
                            className={styles.navLink}
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className={styles.mobileNavItem}>
                        <Link
                            to="/skills"
                            className={styles.navLink}
                            onClick={toggleMenu}
                        >
                            Skills
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
