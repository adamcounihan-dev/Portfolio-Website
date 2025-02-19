import styles from './AboutStyles.module.css';
import heroImg from '/src/assets/hero-img.webp';
import { Link } from 'react-router-dom';

import htmlLogo from '/src/assets/skills/html.svg';
import cssLogo from '/src/assets/skills/css.svg';
import javascriptLogo from '/src/assets/skills/javascript.svg';
import reactLogo from '/src/assets/skills/react.svg';
import viteLogo from '/src/assets/skills/vite.svg';
import javaLogo from '/src/assets/skills/java.svg';
import pythonLogo from '/src/assets/skills/python.svg';
import phpLogo from '/src/assets/skills/php.svg';
import cLogo from '/src/assets/skills/c.svg';
import cSharpLogo from '/src/assets/skills/csharp.svg';
import codeigniterLogo from '/src/assets/skills/codeigniter.svg';
import nodejsLogo from '/src/assets/skills/nodejs.svg';
import expressLogo from '/src/assets/skills/express.svg';
import mysqlLogo from '/src/assets/skills/mysql.svg';
import postgresqlLogo from '/src/assets/skills/postgresql.svg';
import unixLogo from '/src/assets/skills/unix.svg';
import figmaLogo from '/src/assets/skills/figma.svg';
import dockerLogo from '/src/assets/skills/docker.svg';

const skills = {
    Frontend: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'React.js', logo: reactLogo },
        { name: 'Vite', logo: viteLogo }
    ],
    Backend: [
        { name: 'Java', logo: javaLogo },
        { name: 'Python', logo: pythonLogo },
        { name: 'PHP', logo: phpLogo },
        { name: 'C', logo: cLogo },
        { name: 'C#', logo: cSharpLogo },
        { name: 'CodeIgniter', logo: codeigniterLogo },
        { name: 'Node.js', logo: nodejsLogo },
        { name: 'Express.js', logo: expressLogo }
    ],
    'Database Management': [
        { name: 'MySQL', logo: mysqlLogo },
        { name: 'PostgreSQL', logo: postgresqlLogo }
    ],
    'Tools and Platforms': [
        { name: 'Unix', logo: unixLogo },
        { name: 'Figma', logo: figmaLogo },
        { name: 'Docker', logo: dockerLogo }
    ]
};

const certifications = [
    {
        title: 'HSBC - Digital Business Services Job Simulation',
        issuer: 'Forage',
        date: 'Issued Dec 2024',
        link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/jCtDBF7kyfRqQpxp6/eLtRmdoYbFE5oHAQj_jCtDBF7kyfRqQpxp6_9hWHmvXoboTYLbFNR_1735413606428_completion_certificate.pdf'
    },
    {
        title: 'Electronic Arts - Software Engineering Job Simulation',
        issuer: 'Forage',
        date: 'Issued Dec 2024',
        link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_9hWHmvXoboTYLbFNR_1733939465854_completion_certificate.pdf'
    },
    {
        title: 'IEUK 2024: Technology',
        issuer: 'Bright Network',
        date: 'Issued Jun 2024',
        link: 'https://www.brightnetwork.co.uk/certificates/ieuk-2024-technology_yubfakdv69wuah/'
    }
];

const quotes = [
    {
        text: "The people who are crazy enough to think they can change the world are the ones who do.",
        author: "Rob Siltanen"
    },
    {
        text: "Pursue your dreams and see the opportunities in life's setbacks.",
        author: "Steve Jobs"
    }
];

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <h1 className={styles.title}>About Me</h1>

            <div className={styles.container}>

                {/* Profile Section */}
                <div className={styles.profileContainer}>
                    <div className={styles.innerGlass}>
                        <h2 className={styles.subTitle}>Profile</h2>
                        <div className={styles.profileContent}>
                            <img src={heroImg} alt="Adam Counihan" className={styles.profileImage} loading="eager"/>
                            <p className={styles.profileText}>
                                Hi, I’m Adam Counihan – a Computer Science student at the University of Kent with a passion
                                for technology and creativity.
                                <br /><br />
                                I’m driven by a love for software development and design, whether it’s building visually
                                appealing web interfaces, creating interactive applications, or crafting efficient
                                algorithms.
                                <br /><br />
                                Whether you’re interested in collaborating, exploring new ideas, or just making connections
                                in the field, I’d love to hear from you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Skills Section */}
                <div className={styles.skillsContainer}>
                    <div className={styles.innerGlass}>
                        <h2 className={styles.subTitle}>Technical Skills</h2>
                        {Object.keys(skills).map(category => (
                            <div key={category} className={styles.skillCategory}>
                                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                                <ul className={styles.skillList}>
                                    {skills[category].map((skill, idx) => (
                                        <li key={idx} className={styles.skillItem}>
                                            <img src={skill.logo} alt={`${skill.name} logo`} className={styles.skillLogo} />
                                            <span>{skill.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quotes Section */}
                <div className={styles.quotesContainer}>
                    <div className={styles.innerGlass}>
                        <h2 className={styles.subTitle}>Favourite Quotes</h2>
                        <ul className={styles.quoteList}>
                            {quotes.map((quote, idx) => (
                                <li key={idx} className={styles.quoteItem}>
                                    <p className={styles.quoteText}>"{quote.text}"</p>
                                    <p className={styles.quoteAuthor}>- {quote.author}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className={styles.certificationsContainer}>
                    <div className={styles.innerGlass}>
                        <h2 className={styles.subTitle}>Certifications</h2>
                        <ul className={styles.certificationList}>
                            {certifications.map((cert, idx) => (
                                <li key={idx} className={styles.certificationItem}>
                                    <p>{cert.title} by {cert.issuer} - {cert.date}</p>
                                    <Link className={styles.certificationLink} to={cert.link} target="_blank"
                                          rel="noopener noreferrer">
                                        View Certificate
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
