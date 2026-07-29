import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import localePT from '../locales/pt-br.json'
import localeEN from '../locales/en.json'

i18n.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: localeEN
        },
        'pt-BR': {
            translation: localePT
        }
    },
    lng: "pt-BR",
    fallbackLng: "pt-BR",
    interpolation: {
        escapeValue: false
    }
})

export default i18n
