// dayjs locales must be imported as well, list: https://github.com/iamkun/dayjs/tree/dev/src/locale
import "dayjs/locale/es";
import "dayjs/locale/it";
import "dayjs/locale/pt-br";
import "dayjs/locale/sv";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import our translations
import en from "~/i18n/locales/en/translation.json";
import es from "~/i18n/locales/es/translation.json";
import it from "~/i18n/locales/it/translation.json";
import pt_BR from "~/i18n/locales/pt_BR/translation.json";
import sv from "~/i18n/locales/sv/translation.json";

export const defaultNS = "translation";
// needs to be aligned with `supportedLocales`
export const resources = {
  en: {
    translation: en.translation,
    common: en.common,
    components: en.components,
  },
  es: {
    translation: es.translation,
    common: es.common,
    components: es.components,
  },
  it: {
    translation: it.translation,
    common: it.common,
    components: it.components,
  },
  "pt-BR": {
    translation: pt_BR.translation,
    common: pt_BR.common,
    components: pt_BR.components,
  },
  sv: {
    translation: sv.translation,
    common: sv.common,
    components: sv.components,
  },
} as const;

// needs to be aligned with `resources`
export const supportedLocales = [
  { locale: "en", label: "English" },
  { locale: "es", label: "Español" },
  { locale: "it", label: "Italiano" },
  { locale: "pt-BR", label: "Português (Brasil)" },
  { locale: "sv", label: "Svenska" },
];

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    //debug: true,
    fallbackLng: "en",
    ns: ["translation", "common", "components"],
    defaultNS,
    resources,
  });

export default i18n;
