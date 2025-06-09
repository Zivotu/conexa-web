import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '@/lib/i18n';

const LanguageSelector = () => {
  const { i18n: i18next } = useTranslation();
  const [lang, setLang] = useState(i18next.language);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18next.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <select value={lang} onChange={handleChange} className="border rounded px-2 py-1 text-sm">
      {supportedLanguages.map((code) => {
        const label = new Intl.DisplayNames([i18next.language], { type: 'language' }).of(code);
        return (
          <option key={code} value={code}>
            {label ?? code.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};

export default LanguageSelector;
