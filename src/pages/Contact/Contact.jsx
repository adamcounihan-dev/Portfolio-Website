import styles from './ContactStyles.module.css';
import githubIcon from '/src/assets/github.svg';
import linkedinIcon from '/src/assets/linkedin.svg';

const Contact = () => {
    const socialLinks = [
        {
            platform: 'GitHub',
            icon: githubIcon,
            url: 'https://github.com/adamcounihan-dev/',
            username: 'adamcounihan-dev'
        },
        {
            platform: 'LinkedIn',
            icon: linkedinIcon,
            url: 'https://linkedin.com/in/adamcounihan-dev/',
            username: 'adamcounihan-dev'
        }
    ];

    return (
        <section id="contact" className={styles.contact} role="main">
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Contact</h1>

                <div className={styles.introSection}>
                    <p className={styles.locationTagline}>Based in the UK (GMT/BST)</p>
                    <p className={styles.introDescription}>
                        With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!
                    </p>
                </div>

                <div className={styles.socialSection}>
                    <p className={styles.socialDescription}>Connect with me on these platforms:</p>
                    <div className={styles.socialLinksGrid}>
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${social.platform} Profile`}
                            >
                                <img
                                    src={social.icon}
                                    alt={`${social.platform} Logo`}
                                    className={styles.socialIcon}
                                />
                                <div className={styles.socialInfo}>
                                    <span className={styles.socialPlatform}>{social.platform}</span>
                                    <span className={styles.socialUsername}>@{social.username}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
