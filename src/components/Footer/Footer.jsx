import styles from './FooterStyles.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    const creationYear = 2024;

    return (
        <section id="footer" className={styles.container}>
            <p>
                &copy; {creationYear}{currentYear > creationYear ? `–${currentYear}` : ''} Adam Counihan <br />
                All Rights Reserved
            </p>
        </section>
    );
}

export default Footer;
