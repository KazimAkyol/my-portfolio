import { useTranslation } from 'react-i18next'
import backgroundImage from '../assets/images/img13.jpg';

export default function About() {
    const { t } = useTranslation()

    return (
        <div
            className="relative min-h-screen  bg-cover bg-center bg-no-repeat bg-fixed opacity-75"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="backdrop-blur-sm bg-black/30 min-h-screen">
                <div className="container mx-auto px-4 py-20 text-white">
                    <h1 className="text-4xl font-bold mb-8">
                        {t('about.title')}
                    </h1>
                    <p className="text-lg max-w-2xl">
                        {t('about.content')}
                    </p>
                </div>
            </div>
        </div>
    )
}