import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslations from './translations/en.json'
import deTranslations from './translations/de.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            de: { translation: deTranslations }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)