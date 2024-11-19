import styles from './HomeStyles.module.css';
import githubIcon from '/src/assets/github.svg';
import linkedinIcon from '/src/assets/linkedin.svg';

function Home() {
    return (
        <section id="hero" className={styles.container}>
            <div className={styles.info}>
                <h1 className={styles.title}>Adam Counihan</h1>
                <p className={styles.description}>
                    A Computer Science student at University of Kent, blending precision with creativity to build solutions that are both technically refined and visually inspiring.
                </p>
                <div className={styles.socialMedia}>
                    <a href="https://github.com/adamlcounihan/" target="_blank" rel="noopener noreferrer">
                        <img className={styles.icon} src={githubIcon} alt="Github icon"/>
                    </a>
                    <a href="https://linkedin.com/in/adamlcounihan/" target="_blank" rel="noopener noreferrer">
                        <img className={styles.icon} src={linkedinIcon} alt="Linkedin icon"/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
