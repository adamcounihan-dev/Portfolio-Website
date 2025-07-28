import styles from './HomeStyles.module.css';
import heroImg from '/src/assets/hero-img.webp';
import githubIcon from '/src/assets/github.svg';
import linkedinIcon from '/src/assets/linkedin.svg';
import Button from '/src/components/Button/Button.jsx';
import { Link } from 'react-router-dom';
import { primarySkills, achievements, coreProjects } from '/src/data';

const Home = () => {
    return (
        <section id="home" className={styles.home} role="main">
            <div className={styles.container}>
                {/* Hero Section */}
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>

                            <h1 className={styles.name}>Adam Counihan</h1>
                            <h2 className={styles.title}>Computer Science Student & Aspiring Software Developer</h2>

                            <p className={styles.heroDescription}>
                                Second-year CS student at the University of Kent with <strong>strong academic
                                performance </strong>
                                and a passion for building innovative web applications. Experienced in full-stack
                                development
                                and committed to creating user-centric solutions that solve real-world problems.
                            </p>

                            <div className={styles.achievements}>
                                {achievements.map((achievement, index) => (
                                    <div key={index} className={styles.achievementCard}>
                                        <span className={styles.achievementIcon}>{achievement.icon}</span>
                                        <div className={styles.achievementContent}>
                                            <span className={styles.achievementValue}>{achievement.value}</span>
                                            <span className={styles.achievementLabel}>{achievement.label}</span>
                                            <span className={styles.achievementSubtitle}>{achievement.subtitle}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.ctaButtons}>
                                <Button
                                    variant="primary"
                                    size="large"
                                    to="/about"
                                >
                                    Get to Know Me
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="large"
                                    to="/projects"
                                >
                                    See My Work
                                </Button>
                            </div>

                            <div className={styles.socialLinks}>
                                <a
                                    href="https://github.com/adamcounihan-dev/"
                                    className={styles.socialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                >
                                    <img src={githubIcon} alt="GitHub Logo" className={styles.socialIcon}/>
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/adamcounihan-dev/"
                                    className={styles.socialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                >
                                    <img src={linkedinIcon} alt="LinkedIn Logo" className={styles.socialIcon}/>
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className={styles.heroImage}>
                        <div className={styles.imageContainer}>
                                <img
                                    src={heroImg}
                                    alt="Professional headshot of Adam Counihan"
                                    className={styles.profileImage}
                                    loading="eager"
                                />
                                <div className={styles.imageOverlay}>
                                    <div className={styles.universityBadge}>
                                        <span>🎓</span>
                                        University of Kent
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Skills Section */}
                <div className={styles.skillsSection}>
                    <h3 className={styles.sectionTitle}>Core Technical Skills</h3>
                    <div className={styles.skillsGrid}>
                        {primarySkills.map((skill, index) => (
                            <div key={index} className={styles.skillCard}>
                                <img
                                    src={skill.logo}
                                    alt={`${skill.name} logo`}
                                    className={styles.skillLogo}
                                />
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.skillsFooter}>
                        <Link to="/about#skills" className={styles.skillsLink}>
                            <span>View complete skills</span>
                        </Link>
                    </div>
                </div>

                {/* Featured Projects Section */}
                <div className={styles.projectsSection}>
                    <h3 className={styles.sectionTitle}>Featured Projects</h3>
                    <div className={styles.projectsGrid}>
                        {coreProjects.map((project, index) => (
                            <div key={index} className={styles.projectCard}>
                                <div className={styles.projectHeader}>
                                    <h4 className={styles.projectName}>{project.name}</h4>
                                    <span className={styles.projectDate}>{project.date}</span>
                                </div>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <div className={styles.projectTech}>
                                    <span className={styles.techLabel}>Tech Stack:</span>
                                    <span className={styles.techList}>{project.tech}</span>
                                </div>

                                <div className={styles.projectButtons}>
                                    <Button
                                        variant="primary"
                                        size="small"
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View on GitHub
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.projectsFooter}>
                        <Link to="/projects" className={styles.projectsLink}>
                            <span>View all projects</span>
                        </Link>
                    </div>
                </div>

                {/* Experience Overview Section */}
                <div className={styles.experienceSection}>
                    <h3 className={styles.sectionTitle}>Experience Overview</h3>
                    <div className={styles.experienceGrid}>
                        <div className={styles.experienceCard}>
                            <div className={styles.experienceHeader}>
                                <span className={styles.experienceIcon}>🎓</span>
                                <div>
                                    <h4 className={styles.experienceTitle}>Education</h4>
                                    <p className={styles.experienceCompany}>University of Kent</p>
                                </div>
                            </div>
                            <p className={styles.experienceRole}>Computer Science BSc (Hons)</p>
                            <p className={styles.experienceDate}>2023 - 2026</p>
                            <p className={styles.experienceDescription}>
                                Distinction in Year 1 (78.3% average). Strong foundation in Java,
                                JavaScript, databases, and human-computer interaction.
                            </p>
                        </div>
                        <div className={styles.experienceCard}>
                            <div className={styles.experienceHeader}>
                                <span className={styles.experienceIcon}>💼</span>
                                <div>
                                    <h4 className={styles.experienceTitle}>Work Experience</h4>
                                    <p className={styles.experienceCompany}>McDonald's</p>
                                </div>
                            </div>
                            <p className={styles.experienceRole}>Crew Member</p>
                            <p className={styles.experienceDate}>2021 - Present</p>
                            <p className={styles.experienceDescription}>
                                Coordinated with team members in fast-paced environment to streamline operations
                                and addressed customer complaints using effective problem-solving skills.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact CTA Section */}
                <div className={styles.contactSection}>
                    <h3 className={styles.contactTitle}>Let's connect and collaborate!</h3>
                    <p className={styles.contactDescription}>
                        Whether you're interested in discussing technology, exploring potential collaborations,
                        or just connecting with a fellow developer, I'd love to hear from you.
                    </p>
                    <Button
                        variant="primary"
                        size="medium"
                        to="/contact"
                    >
                        Get in Touch
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Home;
