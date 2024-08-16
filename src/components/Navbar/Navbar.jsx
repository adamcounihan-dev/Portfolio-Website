import { Link } from 'react-scroll';
import styles from './NavbarStyles.module.css';

function Navbar() {
    return (
        <nav id="navbar" className={styles.navbar}>
            <div className={styles.navLeft}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link
                            to="hero"
                            smooth={true}
                            duration={500}
                            offset={-64}
                            className={styles.navLink}
                        >
                            Adam Counihan
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.navRight}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-64}
                            className={styles.navLink}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            offset={-64}
                            className={styles.navLink}
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
