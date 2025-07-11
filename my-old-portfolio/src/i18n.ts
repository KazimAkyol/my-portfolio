import i18n from 'i18next'
import { initReactI18next } from '../node_modules/react-i18next'
import en from './locales/en.json'
import de from './locales/tr.json'
import tr from './locales/tr.json'

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        de: { translation: de },
        tr: { translation: tr },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
})

export default i18n
