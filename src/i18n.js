import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

// translations are already at
// '../public/locales/en/translation.json'
// which is the default for the xhr backend to load from

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available
    preload: ['en'],
    ns: ["translation"],
    defaultNS: 'translation',
    backend: {
        loadPath: 'http://server.ead.vairli.com/public/api/helpers/languages/en'
    }
  });

  console.log(i18n)

export default i18n;