import styles from './Hero.module.css';
import Waves from '../Waves/Waves';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Waves
                lineColor="hsl(var(--primary-h), var(--primary-s), var(--primary-l))"
                backgroundColor="transparent"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
                className={styles.wavesBackground}
            />
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    Hi, I'm <span className="gradient-text">Akshit</span>
                </h1>
                <p className={styles.subtitle}>
                    I craft visually stunning, high-performance web applications.
                </p>
                <div className={styles.actions}>
                    <a href="#projects" className={`btn btn-primary`}>View My Work</a>
                    <a href="#contact" className={`btn btn-secondary`}>Contact Me</a>
                </div>
            </div>
        </section>
    );
}
