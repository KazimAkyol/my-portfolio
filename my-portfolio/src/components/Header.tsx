import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
    const { t } = useTranslation()

    return (
        <header className="bg-gray-800 text-white p-4 w-full">
            <div className="container mx-auto flex items-center">

                {/* <div
                    className="min-h-screen  bg-cover bg-center bg-no-repeat bg-fixed opacity-75"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                </div> */}

                {/* 2. Tam Ortada Eşit Aralıklı Linkler */}
                <nav className="flex justify-center w-4/4">
                    <ul className="flex justify-between w-full max-w-md">
                        <li>
                            <Link to="/"
                                className="hover:text-gray-300 px-3 py-1">
                                {t('home.title')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/about"
                                className="hover:text-gray-300 px-3 py-1">
                                {t('about.title')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects"
                                className="hover:text-gray-300 px-3 py-1">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact"
                                className="hover:text-gray-300 px-3 py-1">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* 3. Sağ Tarafta Dil Seçici */}
                <div className="flex justify-end w-1/4">
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    )
}