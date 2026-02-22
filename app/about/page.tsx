import About from '../components/About/About';

export const metadata = {
    title: 'About | Akshit\'s Portfolio',
    description: 'Learn more about Akshit, a software engineer.',
};

export default function AboutPage() {
    return (
        <main className="main-container">
            <About />
        </main>
    );
}
