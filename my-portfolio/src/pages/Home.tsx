import { useTranslation } from 'react-i18next';
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import profileImage from '../assets/images/pp-ich.jpeg';

export default function Home() {
    const { t } = useTranslation();

    // const downloadCV = () => {
    //     const link = document.createElement('a');
    //     link.href = '/path/to/cv.pdf';
    //     link.download = 'Kazim_Akyol_CV.pdf';
    //     link.click();
    // };

    return (
        <div className="bg-[#121121] pb-[4rem] pt-[4rem] md:pt-[8rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[20rem] items-center ">
                <div>
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        Programmer
                    </h1>
                    <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[3rem] font-bold text-white">
                        Hi, I'm <span className="text-yellow-400">Kazim Akyol</span>
                    </h2>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            {t('home.subtitle', {
                                defaultValue:
                                    "I am a full-stack web developer with expertise in HTML, CSS, JavaScript, React, TypeScript, Node.js and MongoDB. I have projects on creating both front-end and back-end dynamic and responsive user interfaces, as well as databases using SQL and NoSQL. I am good at implementing intuitive user logic based on end-to-end solutions. I maintain a holistic approach to web development, staying up to date on emerging technologies and adapting to project requirements.",
                            })}
                        </p>
                    </div>
                    <a href="/data/Muhammet_SOLMAZ.pdf" download="MUhammet_SOLMAZCV.pdf">
                        <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                            <p>Dowland CV</p>
                            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                        </button></a>
                </div>
                <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative ">
                    <img
                        src={profileImage}
                        alt="Kazim Akyol"
                        className="relative z-[11] w-[100%] h-[100%] object-contain"
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[2rem]"></div> */}
                </div>
            </div>
        </div>
    );
}
