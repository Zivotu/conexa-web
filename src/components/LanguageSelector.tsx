import { useState } from 'react';
import i18n, { supportedLanguages } from '@/lib/i18n';

const LanguageSelector = () => {
  const [lang, setLang] = useState(i18n.language);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <select value={lang} onChange={handleChange} className="border rounded px-2 py-1 text-sm">
      {supportedLanguages.map((code) => (
        <option key={code} value={code}>
          {code.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
