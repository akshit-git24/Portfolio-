import Projects from '../components/Projects/Projects';

export const metadata = {
    title: 'Projects | Akshit\'s Portfolio',
    description: 'View Akshit\'s latest projects and work.',
};

export default function ProjectsPage() {
    return (
        <main className="main-container">
            <Projects />
        </main>
    );
}
