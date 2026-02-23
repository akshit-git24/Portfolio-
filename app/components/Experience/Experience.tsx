import styles from './Experience.module.css';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            role: 'Software Engineer Intern (Full Stack)',
            company: 'NV Global Tech',
            duration: 'Sept 2025 - Feb 2026',
            description: 'Architected a secure Django REST authentication system and Razorpay payment subscription gateway with webhook verification. Mentored a junior developer and refactored the authentication module for maintainability.',
            skills: ['Django REST', 'Razorpay', 'Twilio', 'Cron Jobs']
        }
    ];

    return (
        <section className={styles.experience}>
            <div className="container">
                <h2 className={styles.heading}>
                    <span className="gradient-text">Work Experience</span>
                </h2>
                <div className={styles.timeline}>
                    {experiences.map((exp) => (
                        <div key={exp.id} className={`${styles.timelineItem} glass-panel`}>
                            <div className={styles.header}>
                                <div>
                                    <h3>{exp.role}</h3>
                                    <span className={styles.company}>{exp.company}</span>
                                </div>
                                <span className={styles.duration}>{exp.duration}</span>
                            </div>
                            <p className={styles.description}>{exp.description}</p>
                            <div className={styles.skills}>
                                {exp.skills.map((skill) => (
                                    <span key={skill} className={styles.skillTag}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
