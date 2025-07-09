import { useThemeStore } from '../store/themeStore'
import { useEffect } from 'react'

const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useThemeStore()

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
    }, [darkMode])

    return (
        <button onClick={toggleDarkMode} className="p-2 text-sm">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
    )
}

export default ThemeToggle
