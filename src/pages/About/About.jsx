import styles from './AboutStyles.module.css';
import { certifications, favouriteQuotes, skillCategories } from '../../data';
import Button from '../../components/Button/Button.jsx';

const About = () => {
    return (
        <section id="about" className={styles.about} role="main">
            <div className={styles.container}>
                {/* About Intro Section */}
                <div className={styles.aboutSection}>
                    <h1 className={styles.pageTitle}>About Me</h1>
                    <div className={styles.aboutContent}>
                        <p className={styles.aboutParagraph}>Hi, I'm Adam.</p>
                        <p className={styles.aboutParagraph}>
                            I'm a Computer Science student currently studying at the University of Kent.
                            I created this website because I thought it would be funny to casually tell people I have one,
                            little did I realise how much time I would end up spending to make it look just right.
                        </p>
                        <p className={styles.aboutParagraph}>
                            I combine <strong>technical skills with creativity</strong>, focusing
                            on building software that works for the users both in terms of design and functionality.
                            User experience
                            matters a lot to me. It's not enough for software to simply work, it has to be <strong>intuitive,
                            accessible,
                            and truly useful</strong> to the people who rely on it.
                        </p>

                        <div className={styles.ctaSection}>
                            <p className={styles.ctaText}>
                                Curious about my work or want to get in touch?
                            </p>
                            <div className={styles.ctaButtons}>
                                <Button
                                    variant="primary"
                                    size="medium"
                                    to="/projects"
                                >
                                    View My Work
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="medium"
                                    to="/contact"
                                >
                                    Get in Touch
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className={styles.techSection} id="skills">
                    <h2 className={styles.sectionTitle}>Tech Stack</h2>
                    <div className={styles.skillsCategoriesGrid}>
                        {skillCategories.map((category, index) => (
                            <div key={index} className={styles.skillCategory}>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                                <div className={styles.skillsList}>
                                    {category.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className={styles.skillItem}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* When I'm Not Coding Section */}
                <div className={styles.personalSection}>
                    <h2 className={styles.sectionTitle}>When I'm Not Coding</h2>
                    <div className={styles.personalContent}>
                        <div className={styles.personalCards}>
                            <div className={styles.personalCard}>
                                <div className={styles.personalIcon}>🏊‍♂️</div>
                                <div className={styles.personalText}>
                                    <h3 className={styles.personalTitle}>Swimming</h3>
                                    <p className={styles.personalDescription}>
                                        I've always loved swimming. My fastest stroke is backstroke, but I mostly swim
                                        laps to relax rather than competitively.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.personalCard}>
                                <div className={styles.personalIcon}>📸</div>
                                <div className={styles.personalText}>
                                    <h3 className={styles.personalTitle}>Photography & Exploring</h3>
                                    <p className={styles.personalDescription}>
                                        I enjoy exploring new places and taking photos of beautiful landscapes, such as
                                        ancient woodlands or dramatic coastal views.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.quotesContainer}>
                            <h3 className={styles.quotesTitle}>Quotes I Like</h3>
                            <div className={styles.quotesGrid}>
                                {favouriteQuotes.map((item, index) => (
                                    <div key={index} className={styles.quoteCard}>
                                        <p className={styles.quoteText}>"{item.quote}"</p>
                                        <p className={styles.quoteAuthor}>- {item.author}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className={styles.certificationsSection}>
                    <h2 className={styles.sectionTitle}>Certifications</h2>
                    <div className={styles.certificationsContainer}>
                        <div className={styles.certificationsGrid}>
                            {certifications.map((cert, index) => (
                                <div key={index} className={styles.certificationCard}>
                                    <div className={styles.certificationContent}>
                                        <h3 className={styles.certificationTitle}>{cert.title}</h3>
                                        <p className={styles.certificationIssuer}>{cert.issuer}</p>
                                        <p className={styles.certificationDate}>Issued {cert.date}</p>
                                    </div>
                                    <div className={styles.certificationActions}>
                                        <Button
                                            variant="primary"
                                            size="small"
                                            href={cert.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Certificate
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
