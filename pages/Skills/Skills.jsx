import styles from './SkillsStyles.module.css';

const skills = {
    Languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'PHP', 'C', 'C#'],
    'Database Management': ['MySQL'],
    'Frameworks and Libraries': ['ReactJS', 'Node.js', 'Vite', 'CodeIgniter'],
    'Tools and Platforms': ['Unix', 'Figma', 'Adobe XD', 'GitHub', 'Docker']
};

function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.skillsGrid}>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className={styles.skillCategory}>
                        <h3 className={styles.categoryTitle}>{category}</h3>
                        <div className={styles.skillsContainer}>
                            {items.map((skill, index) => (
                                <div key={index} className={styles.skillItem}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
