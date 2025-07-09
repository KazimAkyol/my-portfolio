import { useEffect } from "react";
import { useThemeStore } from '../store/themeStore';


const ThemeToggle = () => {
    const { isDark, toggle } = useThemeStore();

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    <ThemeToggle />

    return <button
        onClick={toggle}>{isDark ? "☀️ Light" : "🌙 Dark"}
    </button>;
};
