import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <h2 className={styles.heading}>
                    <span className="gradient-text">Get In Touch</span>
                </h2>

                <div className={styles.content}>
                    <p className={styles.description}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <form className={`${styles.form} glass-panel`}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required placeholder="John Doe" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="john@example.com" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} required placeholder="Hello..."></textarea>
                        </div>

                        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                            Send Message
                        </button>
                    </form>

                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink}>GitHub</a>
                        <a href="#" className={styles.socialLink}>LinkedIn</a>
                        <a href="#" className={styles.socialLink}>Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
