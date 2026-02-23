import styles from './Projects.module.css';
import Image from 'next/image';
import Lightning from '../Lightning/Lightning';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'HostelNET - Virtual Hostel Room Allotment System',
            description: 'Microservices-based hostel allocation platform separating authentication and automated room allocation engine.',
            tags: ['Django', 'Go(Gin)', 'FastAPI', 'Nginx', 'Docker'],
            link: '#'
        },
        {
            id: 2,
            title: 'TECHSPARK - UNIVERSITY EVENT MANAGEMENT SYSTEM',
            description: 'Role-based event management portal with Razorpay payment gateway integration and multi-level staff approvals.',
            tags: ['Django', 'HTML', 'Tailwind CSS', 'Render'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <h2 className={styles.heading}>
                    <span className="gradient-text">Featured Work</span>
                </h2>
                <div className={styles.grid}>
                    {projects.map(project => (
                        <div key={project.id} className={`${styles.card} glass-panel`}>
                            <div className={styles.imagePlaceholder}>
                                <Lightning hue={220} intensity={0.8} speed={0.5} size={1.2} />
                                <span className={styles.projectIcon}>{project.title.charAt(0)}</span>
                            </div>
                            <div className={styles.content}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className={styles.link}>
                                    View Project &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
