import styles from './HomeStyles.module.css';
import githubIcon from '/src/assets/github.svg';
import linkedinIcon from '/src/assets/linkedin.svg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section id="hero" className={styles.home}>
            <div className={styles.info}>
                <div className={styles.innerGlass}>
                    <h1 className={styles.title}>Adam Counihan</h1>
                    <p className={styles.description}>
                        A Computer Science student at the University of Kent, blending precision with creativity to build products that are both technically refined and visually inspiring.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link to="/projects" className={styles.button}>
                            My Projects
                        </Link>
                        <Link to="/about" className={styles.button}>
                            About Me
                        </Link>
                    </div>
                    <div className={styles.socialMedia}>
                        <a href="https://github.com/adamcounihan-dev/" target="_blank" rel="noopener noreferrer">
                            <img className={styles.icon} src={githubIcon} alt="Github icon" />
                            <span className={styles.label}>GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/adamcounihan-dev/" target="_blank" rel="noopener noreferrer">
                            <img className={styles.icon} src={linkedinIcon} alt="LinkedIn icon" />
                            <span className={styles.label}>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
