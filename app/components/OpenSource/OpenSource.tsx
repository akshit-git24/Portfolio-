import styles from './OpenSource.module.css';

export default function OpenSource() {
    const contributions = [
        {
            id: 1,
            repo: 'vercel/next.js',
            description: 'Fixed a core routing bug in the App Router that improved navigation performance.',
            link: '#',
            stars: '120k'
        },
        {
            id: 2,
            repo: 'facebook/react',
            description: 'Contributed improvements to the official documentation regarding Hooks.',
            link: '#',
            stars: '210k'
        },
        {
            id: 3,
            repo: 'vitejs/vite',
            description: 'Optimized development build times by resolving a caching issue in the core bundler.',
            link: '#',
            stars: '60k'
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
