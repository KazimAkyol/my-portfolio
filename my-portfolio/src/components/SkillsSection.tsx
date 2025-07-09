import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiTailwindcss,
    SiGithub,
} from "react-icons/si";

const skills = [
    { id: "javascript", icon: <SiJavascript className="text-yellow-400" /> },
    { id: "typescript", icon: <SiTypescript className="text-blue-500" /> },
    { id: "react", icon: <SiReact className="text-cyan-400" /> },
    { id: "node", icon: <SiNodedotjs className="text-green-500" /> },
    { id: "tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { id: "git", icon: <SiGithub className="text-gray-800 dark:text-gray-200" /> },
];

export const SkillsSection = () => {
    const { t } = useTranslation();

    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6"
        >
            <h2 className="text-2xl font-bold mb-4">{t("skills.title")}</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 transition-colors"
                    >
                        <div className="text-4xl mb-2">{skill.icon}</div>
                        <p className="text-sm text-center font-medium dark:text-white">{t(`skills.list.${skill.id}`)}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
