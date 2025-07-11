import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-800 text-white py-8 mt-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo & Copyright */}
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 mt-2">
                            &copy; {new Date().getFullYear()} {t('footer.copyright')}
                        </p>
                    </div>

                    {/* Sosyal Medya Linkleri */}
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/KazimAkyol"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kazim-akyol/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="mailto:akyolkzm.2016493@gmail.com"
                            className="text-gray-300 hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                {/* Alt Menü */}
                <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <nav className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
                        <a href="/privacy" className="text-gray-400 hover:text-white">
                            {t('footer.privacy')}
                        </a>
                        <a href="/terms" className="text-gray-400 hover:text-white">
                            {t('footer.terms')}
                        </a>
                        <a href="/sitemap" className="text-gray-400 hover:text-white">
                            {t('footer.sitemap')}
                        </a>
                    </nav>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm"
                    >
                        {t('footer.backToTop')}
                    </button>
                </div>
            </div>
        </footer>
    );
}