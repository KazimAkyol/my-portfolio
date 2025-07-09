import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          about: {
            title: "About Me",
            text: "I'm a passionate full-stack developer...",
          },
        },
      },
      de: {
        translation: {
          about: {
            title: "Über mich",
            text: "Ich bin ein leidenschaftlicher Full-Stack-Entwickler...",
          },
        },
      },
      tr: {
        translation: {
          about: {
            title: "Hakkımda",
            text: "Ben tutkulu bir full-stack geliştiricisiyim...",
          },
        },
      },
    },
  });

export default i18n;
