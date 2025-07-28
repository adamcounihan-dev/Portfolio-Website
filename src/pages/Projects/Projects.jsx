import { useState, useMemo } from 'react';
import styles from './ProjectsStyles.module.css';
import Button from '../../components/Button/Button.jsx';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown.jsx';
import { allProjects } from '../../data';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All Projects');

    // Extract unique technologies from projects
    const techOptions = useMemo(() => {
        const allTech = new Set();

        allProjects.forEach(project => {
            const techs = project.tech.split(',').map(tech => tech.trim());
            techs.forEach(tech => allTech.add(tech));
        });

        const sortedTech = Array.from(allTech).sort();
        return ['All Projects', ...sortedTech];
    }, []);

    // Filter projects based on active filter
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All Projects') return allProjects;

        return allProjects.filter(project => {
            const techArray = project.tech.split(',').map(tech => tech.trim());
            return techArray.includes(activeFilter);
        });
    }, [activeFilter]);

    return (
        <section id="projects" className={styles.projects} role="main">
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Projects</h1>

                <div className={styles.filterContainer}>
                    <FilterDropdown
                        options={techOptions}
                        value={activeFilter}
                        onChange={setActiveFilter}
                        placeholder="Select Technology"
                        label="Filter by:"
                    />
                </div>

                <div className={styles.projectsList}>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <div key={index} className={styles.projectCard}>
                                <img
                                    src={project.image}
                                    alt={`${project.name} screenshot`}
                                    className={styles.projectImage}
                                />

                                <div className={styles.projectContent}>
                                    <div className={styles.projectHeader}>
                                        <h2 className={styles.projectTitle}>{project.name}</h2>
                                        <span className={styles.projectDate}>{project.date}</span>
                                    </div>

                                    <p className={styles.projectDescription}>{project.description}</p>

                                    <div className={styles.projectFooter}>
                                        <div className={styles.projectTech}>
                                            <span className={styles.techLabel}>Tech:</span>
                                            <span className={styles.techList}>{project.tech}</span>
                                        </div>

                                        <div className={styles.projectActions}>
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
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noResults}>
                            <p>No projects found using "{activeFilter}".</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
