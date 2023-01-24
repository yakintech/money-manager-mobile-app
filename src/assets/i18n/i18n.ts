import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { NativeModules, Platform } from 'react-native'


const resources = {
    en: {
        translation: {
            "hello": "Hello!"
        }
    },
    az: {
        translation: {
            "hello": "Salam!"
        }
    },
    tr: {
        translation: {
            "hello": "Merhaba!"
        }
    }
};

const getDeviceLang = () => {
    const appLanguage =
        Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0]
            : NativeModules.I18nManager.localeIdentifier;

    return appLanguage.search(/-|_/g) !== -1
        ? appLanguage.slice(0, 2)
        : appLanguage;
};


let deviceLanguage = getDeviceLang();


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: deviceLanguage,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;