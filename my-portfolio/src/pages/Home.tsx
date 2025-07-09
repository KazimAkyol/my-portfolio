import React from "react";
import { NavLink } from 'react-router-dom';
// Font Awesome ikonları için (isteğe bağlı)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-8">
            {/* Sol Taraf - İçerik */}
            <div className="md:w-1/2 space-y-6">
                <h3 className="text-lg text-gray-600 dark:text-gray-300">Hello I'm</h3>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Kazim Akyol
                </h1>
                <h3 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400">
                    And I'm a Fullstack Developer
                </h3>

                <p className="text-gray-700 dark:text-gray-300">
                    As an energetic and innovative Software developer, meet my passion for
                    pushing the boundaries of technology and writing better code every
                    day. Specialized as a Full Stack developer with a focus on React, my
                    goal is not only software but also enhancing user experiences,
                    building sustainable solutions, and staying one step ahead with each
                    project.
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                    I transitioned from teaching mathematics to full-stack development. I build dynamic interfaces with React, Redux, and TypeScript, and develop scalable APIs using Node.js and Express. I'm experienced with MongoDB and PostgreSQL. I'm a strong team player, a fast learner, and I love creating useful products.
                </p>

                {/* Sosyal Medya */}
                <div className="flex space-x-4">
                    <NavLink
                        to="https://www.linkedin.com/in/kazim-akyol/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-300 text-2xl"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </NavLink>
                    <NavLink
                        to="https://github.com/KazimAkyol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white text-2xl"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </NavLink>
                    <NavLink
                        to="https://facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-300 text-2xl"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </NavLink>
                    <NavLink
                        to="https://wa.me/yournumber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 dark:hover:text-green-300 text-2xl"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </NavLink>
                </div>

                <NavLink
                    to="/path-to-cv"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                    Download CV
                </NavLink>
            </div>

            {/* Sağ Taraf - Avatar */}
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="/images/gözlüklü-avatar.jpg"
                    alt="Kazim Akyol Avatar"
                    className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl border-4 border-white dark:border-gray-800"
                />
            </div>
        </section>
    );
};

export default Home;