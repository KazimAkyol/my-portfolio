import { useTranslation } from 'react-i18next';
import backgroundImage from '../assets/images/img11.jpg';

type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
};

export default function Projects() {
    const { t } = useTranslation();

    const projects: Project[] = [
        {
            id: 1,
            title: t('NBA Legends'),
            description: t('projects.project1.description'),
            technologies: ['React', 'Sass', 'React-Bootstrap'],
            link: 'https://nba-legends-indol.vercel.app/'
        },
        {
            id: 2,
            title: t('Movie App'),
            description: t('projects.project2.description'),
            technologies: ['React', 'Firebase', 'Axios'],
            link: 'https://movie-app-lilac-mu.vercel.app/'
        },
        {
            id: 3,
            title: t('Shopping Card'),
            description: t('projects.project2.description'),
            technologies: ['React', 'Firebase', 'Axios'],
            link: 'https://shopping-card-project-mocha.vercel.app/'
        },
    ];

    return (
        <div className="container mx-auto p-4 py-8 w-full">
            <h1 className="text-4xl font-bold mb-8 text-center">{t('projects.title')}</h1>

            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed opacity-75"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-1/2">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                                >
                                    {t('projects.viewProject')}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}