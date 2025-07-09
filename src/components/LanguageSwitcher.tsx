import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    return (
        <div className="flex gap-2">
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button onClick={() => i18n.changeLanguage("de")}>DE</button>
            <button onClick={() => i18n.changeLanguage("tr")}>TR</button>

            <LanguageSwitcher />
        </div>
    );
};
