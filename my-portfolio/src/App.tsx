import LanguageSwitcher from './components/LanguageSwitcher'
import ThemeToggle from './components/ThemeToggle'
import About from './pages/About'
import Home from './pages/Home'

function App() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <About />
            <Home />
            <ThemeToggle />
            <LanguageSwitcher />
        </main>
    )
}

export default App
