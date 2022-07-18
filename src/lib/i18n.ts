import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: object }>("../locales/*.yaml", { eager: true }))
    .map(([key, value]) => [key.slice("../locales/".length, -".yaml".length), { translation: value.default }]),
);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
