import en from './language/en.json';
import vi from './language/vi.json';

const languages: { [key: string]: any } = {
  en,
  vi,
};

const DEFAULT_LANGUAGE = 'en';

// Get the current language from localStorage or use the default
const getLanguage = (): string => {
  const savedLanguage = localStorage.getItem('language');
  return savedLanguage || DEFAULT_LANGUAGE;
};

// Get translations based on the current language
const translate = (key: string): string => {
  const language = getLanguage();
  const translations = languages[language] || languages[DEFAULT_LANGUAGE];
  return translations[key] || key;
};

export default { translate, getLanguage };
