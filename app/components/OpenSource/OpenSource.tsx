import styles from './OpenSource.module.css';

export default function OpenSource() {
    const contributions = [
        {
            id: 1,
            repo: '50+ DSA Problems',
            description: 'Solved 50+ Data Structures and Algorithms problems on LeetCode and CodeStudio.',
            link: '#',
            stars: '50+'
        },
        {
            id: 2,
            repo: 'SWOC-26 Contributor',
            description: 'Improved backend scalability by implementing deterministic pagination, standardized JSON errors, and optimized query paths.',
            link: '#',
            stars: 'PR Merged'
        }
    ];

    return (
        <section className={styles.openSource}>
            <div className="container">
                <h2 className={styles.heading}>
                    <span className="gradient-text">Open Source</span>
                </h2>
                <p className={styles.intro}>
                    I believe in giving back to the community. Here are some of my proudest open-source contributions.
                </p>

                <div className={styles.grid}>
                    {contributions.map(item => (
                        <a key={item.id} href={item.link} className={`${styles.card} glass-panel`} target="_blank" rel="noopener noreferrer">
                            <div className={styles.header}>
                                <h3>{item.repo}</h3>
                                <span className={styles.stars}>⭐ {item.stars}</span>
                            </div>
                            <p>{item.description}</p>
                            <div className={styles.footer}>
                                <span className={styles.viewLink}>View Pull Request &rarr;</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
