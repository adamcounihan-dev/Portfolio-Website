import { useEffect } from "react";
import Button from '../../components/Button/Button.jsx';
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
            <div className={styles.container}>
                <div className={styles.errorNumber}>404</div>
                <h1 className={styles.pageTitle}>Page Not Found</h1>

                <p className={styles.description}>
                    Sorry, the page you are looking for does not exist. The address might have been moved, deleted, or is no longer available.
                </p>

                <div className={styles.buttonContainer}>
                    <Button
                        variant="primary"
                        size="medium"
                        to="/"
                    >
                        Go to Homepage
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
