import styles from './HeroStyles.module.css';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';

function Hero() {
    return (
        <section id="hero" className={styles.container}>
            <div className={styles.info}>
                <h1 className={styles.title}>Adam Counihan</h1>
                <p className={styles.description}>
                    Studying Computer Science at
                    University of Kent (B.Sc.)
                </p>
                <div className={styles.socialMedia}>
                    <a href="https://github.com/adamlcounihan/" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github icon"/>
                    </a>
                    <a href="https://linkedin.com/in/adamlcounihan/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="Linkedin icon"/>
                    </a>
                </div>
            </div>
            <div className={styles.shapeDivider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className={styles.shapeFill}></path>
                </svg>
            </div>
        </section>
    );
}

export default Hero;
