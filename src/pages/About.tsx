import React from "react";

const About = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16">
            <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10 space-y-6">
                <h1 className="text-3xl font-bold text-gray-800 text-center">
                    About me / Über mich
                </h1>

                <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                    <p className="italic text-sm text-gray-500">
                        I transitioned from teaching math to the software world. I develop powerful user interfaces using React, Redux and TypeScript. I write RESTful APIs with Node.js and Express, and manage data securely with MongoDB and PostgreSQL. I'm a team player, open to learning and love to produce.
                    </p>
                    <p className="italic text-sm text-gray-500">
                        Ich bin vom Mathematikunterricht in die Softwarewelt gewechselt. Ich entwickle leistungsstarke Benutzeroberflächen mit React, Redux und TypeScript. Ich schreibe RESTful APIs mit Node.js und Express und verwalte Daten sicher mit MongoDB und PostgreSQL. Ich arbeite gerne im Team, bin offen für Neues und liebe es zu produzieren.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
