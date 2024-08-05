import styles from './ProjectsStyles.module.css';

function getProjects() {
    return [
        {
            title: 'React Portfolio Website',
            description: 'This site you are currently exploring is built with React to showcase my skills in web development.',
            link: 'https://github.com/adamlcounihan/Portfolio-Website',
            languages: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            title: 'Legacy Portfolio Website',
            description: 'My original portfolio website, a static site created using HTML, CSS, and JavaScript.',
            link: 'https://github.com/adamlcounihan/Legacy-Portfolio-Website',
            languages: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'The Land of Nasrin',
            description: 'A Unity platformer game that I created for my A-Level Computer Science coursework.',
            link: 'https://github.com/adamlcounihan/TheLandOfNasrin',
            languages: ['C#', 'Unity']
        },
        {
            title: 'Slot Machine',
            description: 'A text based slot machine written in C.',
            link: 'https://github.com/adamlcounihan/SlotMachine',
            languages: ['C']
        },
    ];
}

function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <h1 className={styles.title}>Projects</h1>
            {getProjects().map((project, index) => (
                <div key={index} className={styles.projectContainer}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <a
                        href={project.link}
                        className={styles.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project Code
                    </a>
                    <div className={styles.languagesContainer}>
                        <ul className={styles.languagesList}>
                            {project.languages.map((language, langIndex) => (
                                <li key={langIndex} className={styles.languageItem}>
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Projects;
