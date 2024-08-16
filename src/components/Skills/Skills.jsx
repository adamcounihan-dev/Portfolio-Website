import styles from '../Skills/SkillsStyles.module.css';

const skills = {
    Languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'PHP', 'C', 'C#'],
    'Database Management': ['MySQL'],
    'Frameworks and Libraries': ['ReactJS', 'Node.js', 'Vite'],
    'Tools and Platforms': ['Unix', 'Figma', 'Adobe XD', 'GitHub', 'Docker']
};

function Skills() {
    return (
        <section id="skills" className={styles.skillsContainer}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.gridWrapper}>
                <div className={styles.gridContainer}>
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className={styles.gridCategory}>
                            <h2 className={styles.categoryTitle}>{category}</h2>
                            <div className={styles.gridItems}>
                                {items.map((skill, index) => (
                                    <div key={index} className={styles.gridItem}>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
