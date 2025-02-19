import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './NotFoundStyles.module.css';

function NotFound() {
    useEffect(() => {
        document.title = "404 Not Found";

        return () => {
            document.title = "Adam Counihan Portfolio";
        };
    }, []);


    return (
        <section id="not-found" className={styles.notFound}>
            <div className={styles.notFoundContainer}>
                <div className={styles.innerGlass}>
                    <h1 className={styles.title}>Error Code: 404</h1>
                    <p className={styles.text}>
                        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
                    </p>
                    <p className={styles.text}>Here are some helpful links instead:</p>
                    <ul className={styles.linkList}>
                        <li className={styles.linkItem}>
                            <Link to="/" className={styles.link}>Home</Link>
                        </li>
                        <li className={styles.linkItem}>
                            <Link to="/about" className={styles.link}>About</Link>
                        </li>
                        <li className={styles.linkItem}>
                            <Link to="/projects" className={styles.link}>Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
