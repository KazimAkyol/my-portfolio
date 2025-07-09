import React from "react";

const Home: React.FC = () => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello I'm</h3>
                <h1 className="name">Kazim Akyol</h1>
                <h3 className="title">And I'm a Fullstack Developer</h3>
                <p className="info">
                    As an energetic and innovative Software developer, meet my passion for
                    pushing the boundaries of technology and writing better code every
                    day. Specialized as a Full Stack developer with a focus on React, my
                    goal is not only software but also enhancing user experiences,
                    building sustainable solutions, and staying one step ahead with each
                    project.
                </p>

                <p className="text-base text-gray-700">
                    I transitioned from teaching mathematics to full-stack development. I build dynamic interfaces with React, Redux, and TypeScript, and develop scalable APIs using Node.js and Express. I'm experienced with MongoDB and PostgreSQL. I'm a strong team player, a fast learner, and I love creating useful products.
                </p>


                <div className="social-media">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </div>

                <a href="#" className="btn">
                    Download CV
                </a>
            </div>

            <div className="home-img">
                <img src="/images/gözlüklü Avatar.jpg" alt="Kazim Akyol Avatar" />
            </div>
        </section>
    );
};

export default Home;
