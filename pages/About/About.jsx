import styles from './AboutStyles.module.css';
import heroImg from '/src/assets/hero-img.webp';
import { Link } from 'react-router-dom';

const skills = {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vite'],
    'Backend': ['Java', 'Python', 'PHP', 'C', 'C#', 'Node.js', 'Express.js', 'CodeIgniter'],
    'Database Management': ['MySQL'],
    'Tools and Platforms': ['Unix', 'Figma', 'Adobe XD', 'GitHub', 'Docker']
};

const certifications = [
    { title: 'IEUK 2024: Technology', issuer: 'Bright Network', date: 'Issued Jun 2024', link: 'https://www.brightnetwork.co.uk/certificates/ieuk-2024-technology_yubfakdv69wuah/' },
];

function About() {
    return (
        <section id="about" className={styles.about}>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.contentContainer}>
                <div className={styles.profileContainer}>
                    <img
                        src={heroImg}
                        alt="Adam Counihan"
                        className={styles.profileImage}
                    />
                    <div className={styles.buttonsContainer}>
                        <Link to="/projects" className={styles.button}>
                            Projects
                        </Link>
                    </div>
                </div>
                <div className={styles.bioContainer}>
                    <p className={styles.text}>
                        Hi, I’m Adam Counihan – a Computer Science student at the University
                        of Kent with a passion for technology and creativity. <br /><br />
                        I’m driven by a love for software development and design, whether it’s
                        building visually appealing web interfaces, creating interactive
                        applications, or crafting efficient algorithms. I aim to blend
                        technical precision with creativity to develop meaningful user
                        experiences. <br /><br />
                        Whether you’re interested in collaborating, exploring new ideas, or
                        just making connections in the field, I’d love to hear from you.
                    </p>
                </div>

                <div className={styles.skillsContainer}>
                    <h2 className={styles.containerTitle}>Technical Skills</h2>
                    {Object.keys(skills).map((category) => (
                        <div className={styles.skillCategory} key={category}>
                            <h3 className={styles.skillCategoryTitle}>{category}</h3>
                            <ul className={styles.skillList}>
                                {skills[category].map((skill, index) => (
                                    <li key={index} className={styles.skillItem}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.certificationsContainer}>
                    <h2 className={styles.containerTitle}>Certifications</h2>
                    <ul className={styles.certificationList}>
                        {certifications.map((cert, index) => (
                            <li key={index} className={styles.certificationItem}>
                                <a
                                    href={cert.link}
                                    className={styles.certificationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong>{cert.title}</strong> - {cert.issuer} ({cert.date})
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.resumeContainer}>
                    <h2 className={styles.containerTitle}>Resume</h2>
                    <p className={styles.text}>My resume can be downloaded below, where you’ll find details on my
                        education, work experience, and projects.</p>
                    <a href="/path/to/cv.pdf" className={styles.button} download>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
