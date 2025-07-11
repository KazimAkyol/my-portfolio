import { useTranslation } from '../../node_modules/react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex gap-2">
            {['en', 'tr', 'de'].map((lng) => (
                <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className="p-1 border rounded"
                >
                    {lng.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
