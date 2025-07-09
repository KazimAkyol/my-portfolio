import './i18n';
import About from '../my-portfolio/src/components/About';
import ThemeToggle from '../my-portfolio/src/components/ThemeToggle';
import LanguageSwitcher from '../my-portfolio/src/components/LanguageSwitcher';

export default function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <header className="flex justify-between items-center p-4">
                <ThemeToggle />
                <LanguageSwitcher />
            </header>
            <main>
                <About />
            </main>
        </div>
    );
}
