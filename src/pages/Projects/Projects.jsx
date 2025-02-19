import styles from './ProjectsStyles.module.css';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'React Portfolio Website',
        description: 'This site you are currently exploring is built with React to showcase my skills in web development.',
        link: 'https://github.com/adamlcounihan/Portfolio-Website',
        languages: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        title: 'Revamplify',
        description: 'A redesign of the Spotify Web Player.',
        link: 'https://github.com/adamlcounihan/Revamplify',
        languages: ['HTML', 'CSS', 'JavaScript', 'React', 'Express']
    },
    {
        title: 'The Land of Nasrin',
        description: 'A Unity platformer game that I created for my A-Level Computer Science coursework.',
        link: 'https://github.com/adamlcounihan/TheLandOfNasrin',
        languages: ['C#', 'Unity']
    },
    {
        title: 'Slot Machine',
        description: 'A text-based slot machine written in C.',
        link: 'https://github.com/adamlcounihan/SlotMachine',
        languages: ['C']
    }
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <h1 className={styles.title}>Projects</h1>

            <div className={styles.container}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectContainer}>
                        <div className={styles.innerGlass}>
                            <h2 className={styles.projectTitle}>{project.title}</h2>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <Link to={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                                View Project Code
                            </Link>
                            <ul className={styles.languagesList}>
                                {project.languages.map((language, langIndex) => (
                                    <li key={langIndex} className={styles.languageItem}>{language}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
