import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
    const { t } = useTranslation();

    return (
        <motion.section
            className="p-4 max-w-3xl mx-auto text-center dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
            <p className="text-lg">{t('about.description')}</p>
        </motion.section>
    );
}
