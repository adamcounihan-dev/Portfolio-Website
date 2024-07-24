import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.webp'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'

function Hero() {
    return <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile picture of Adam Counihan"/>
        </div>
        <div className={styles.info}>
            <h1>Adam <br/> Counihan</h1>
            <h2>Computer Science Student</h2>
            <span>
                <a href="https://github.com/adamlcounihan/" target="_blank">
                    <img src={githubIcon} alt="Github icon"/>
                </a>
            </span>
            <span>
                <a href="https://linkedin.com/in/adamlcounihan/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon"/>
                </a>
            </span>
            <p>Studying at University of Kent (B.Sc.)</p>
        </div>
    </section>;
}

export default Hero;