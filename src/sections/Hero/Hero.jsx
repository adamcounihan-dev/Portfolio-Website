import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.webp'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'

function Hero() {
    return (
        <section id="hero" className={styles.container}>
            <div>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Adam Counihan"/>
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>Adam Counihan</h1>
                <p className={styles.description}>
                    Studying Computer Science at
                    University of Kent (B.Sc.)
                </p>
                <div className={styles.socialMedia}>
                    <a href="https://github.com/adamlcounihan/" target="_blank">
                        <img src={githubIcon} alt="Github icon"/>
                    </a>
                    <a href="https://linkedin.com/in/adamlcounihan/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon"/>
                    </a>
                </div>
            </div>
        </section>
    );
}


export default Hero;