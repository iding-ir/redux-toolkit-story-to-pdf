import { languages, ILanguage } from ".";

const getLanguage = (defaultLanguage?: string) => {
  const browserLanguage = navigator.language.toLowerCase();

  const fallbackLanguage = Object.values(languages)[0].value;

  const claculatedLanguage = Object.values(languages).find(
    (language: ILanguage) => language.value.includes(browserLanguage)
  )?.value;

  const iLanguage = defaultLanguage || claculatedLanguage || fallbackLanguage;

  return { iLanguage };
};

export default getLanguage;
