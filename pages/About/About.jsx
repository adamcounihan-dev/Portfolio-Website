import styles from './AboutStyles.module.css';

function About() {
    return (
        <section id="about" className={styles.about}>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.aboutContent}>
                <div className={styles.profileContainer}>
                    <img
                        src="/src/assets/hero-img.webp"
                        alt="Adam Counihan"
                        className={styles.profileImage}
                    />
                </div>
                <p className={styles.text}>
                    Hi, I’m Adam Counihan – a Computer Science student at the University of Kent with a passion for
                    technology and creativity. <br/>
                    I’m driven by a love for software development and design, whether it’s building visually appealing
                    web interfaces, creating interactive applications, or crafting efficient algorithms.
                    I aim to blend technical precision with creativity to develop meaningful user
                    experiences. <br/><br/>
                    Whether you’re interested in collaborating, exploring new ideas, or just making connections in the
                    field, I’d love to hear from you.
                </p>
            </div>
        </section>
    );
}

export default About;

