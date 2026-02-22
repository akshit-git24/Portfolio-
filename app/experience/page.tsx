import Experience from '../components/Experience/Experience';

export const metadata = {
    title: 'Experience | Akshit\'s Portfolio',
    description: 'Akshit\'s professional work experience and history.',
};

export default function ExperiencePage() {
    return (
        <main className="main-container">
            <Experience />
        </main>
    );
}
