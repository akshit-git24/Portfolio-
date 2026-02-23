import styles from './About.module.css';

export default function About() {
    const skills = [
        "Python", "C++", "Go", "JavaScript", "Django",
        "FastAPI", "React.js", "Next.js", "PostgreSQL", "Docker", "Kafka"
    ];

    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <h2 className={styles.heading}>
                    <span className="gradient-text">About Me</span>
                </h2>
                <div className={styles.grid}>
                    <div className={`${styles.card} glass-panel`}>
                        <h3>My Journey</h3>
                        <p>
                            I am a passionate software engineer with a keen eye for design and a drive to build seamless digital experiences. With expertise in modern web technologies, I focus on creating applications that are not just functional, but beautiful and performant.
                        </p>
                        <p>
                            Education: B.Tech in Computer Science from Guru Nanak Dev University (2024 - 2028) and B.S. in Data Science from Indian Institute of Technology Madras (2024 - 2027).
                        </p>
                    </div>
                    <div className={`${styles.card} glass-panel`}>
                        <h3>Core Skills</h3>
                        <div className={styles.skillTags}>
                            {skills.map(skill => (
                                <span key={skill} className={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
