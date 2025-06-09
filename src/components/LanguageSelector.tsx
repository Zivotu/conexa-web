import i18n from '@/lib/i18n';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'hr', label: 'HR' },
  { code: 'es', label: 'ES' },
];

const LanguageSelector = () => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <select onChange={handleChange} className="border rounded px-2 py-1 text-sm">
      {languages.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
