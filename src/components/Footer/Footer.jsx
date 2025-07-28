import { Link } from 'react-router-dom';
import styles from './FooterStyles.module.css';
import githubIcon from '/src/assets/github.svg';
import linkedinIcon from '/src/assets/linkedin.svg';

function Footer() {
    const currentYear = new Date().getFullYear();
    const creationYear = 2024;

    return (
        <footer id="footer" className={styles.footer} role="contentinfo">
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    {/* Footer Links */}
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Quick Links</h4>
                        <nav className={styles.footerNav} aria-label="Footer navigation">
                            <Link to="/" className={styles.footerLink}>Home</Link>
                            <Link to="/about" className={styles.footerLink}>About</Link>
                            <Link to="/projects" className={styles.footerLink}>Projects</Link>
                            <Link to="/contact" className={styles.footerLink}>Contact</Link>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Connect</h4>
                        <div className={styles.socialLinks}>
                            <a
                                href="https://github.com/adamcounihan-dev/"
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my GitHub profile"
                            >
                                <img src={githubIcon} alt="" className={styles.socialIcon} />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/adamcounihan-dev/"
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my LinkedIn profile"
                            >
                                <img src={linkedinIcon} alt="" className={styles.socialIcon} />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Site Resources */}
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Resources</h4>
                        <div className={styles.resourceInfo}>
                            <a
                            href="/sitemap.xml"
                            className={styles.footerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Sitemap
                        </a>
                    </div>
                </div>
                </div>

                {/* Copyright */}
                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        <p>
                            &copy; {creationYear}–{currentYear} Adam Counihan. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
