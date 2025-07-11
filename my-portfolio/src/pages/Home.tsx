import { useTranslation } from 'react-i18next';
import profileImage from '../assets/images/pp-ich.jpeg';

export default function Home() {
    const { t } = useTranslation();

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/path/to/cv.pdf';
        link.download = 'Kazim_Akyol_CV.pdf';
        link.click();
    };

    return (
        <section className="min-h-screen flex items-center bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Sol kısım: Metinler */}
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">
                            Hi, I'm <span className="text-yellow-400">Kazim Akyol</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-6">Programmer</h2>

                        <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
                            {t('home.subtitle', {
                                defaultValue:
                                    "I am a full-stack web developer with expertise in HTML, CSS, JavaScript, React, TypeScript, Node.js and MongoDB. I have projects on creating both front-end and back-end dynamic and responsive user interfaces, as well as databases using SQL and NoSQL. I am good at implementing intuitive user logic based on end-to-end solutions. I maintain a holistic approach to web development, staying up to date on emerging technologies and adapting to project requirements.",
                            })}
                        </p>

                        <button
                            onClick={downloadCV}
                            className="bg-green-400 hover:bg-green-500 text-gray-900 font-medium py-2 px-6 rounded-md text-sm md:text-base transition duration-200">
                            {t('home.downloadCV', { defaultValue: 'DOWNLOAD CV' })}
                        </button>
                    </div>

                    {/* Sağ kısım: Profil Fotoğrafı */}
                    <div>
                        <img
                            src={profileImage}
                            alt="Kazim Akyol"
                            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-gray-300 shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
