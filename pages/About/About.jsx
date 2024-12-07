import styles from './AboutStyles.module.css';
import heroImg from '/src/assets/hero-img.webp';
import { Link } from 'react-router-dom';

const skills = {
    Languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'PHP', 'C', 'C#'],
    'Database Management': ['MySQL'],
    'Frameworks and Libraries': ['ReactJS', 'Node.js', 'Vite', 'CodeIgniter'],
    'Tools and Platforms': ['Unix', 'Figma', 'Adobe XD', 'GitHub', 'Docker']
};

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
                            See My Projects
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
            </div>
        </section>
    );
}

export default About;
