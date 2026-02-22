import styles from './Experience.module.css';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            role: 'Senior Software Engineer',
            company: 'Tech Innovators Inc.',
            duration: '2021 - Present',
            description: 'Led a team of 5 developers building scalable microservices. Improved system performance by 40% using Go and PostgreSQL.',
            skills: ['Go', 'PostgreSQL', 'Kubernetes', 'AWS']
        },
        {
            id: 2,
            role: 'Frontend Developer',
            company: 'Digital Solutions LLC',
            duration: '2019 - 2021',
            description: 'Developed interactive dashboards and unified the design system across multiple enterprise applications.',
            skills: ['React', 'TypeScript', 'Redux', 'Sass']
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
