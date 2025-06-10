import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLang(e.target.value)}
      className="border rounded-md p-1 text-sm"
    >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
      <option value="hr">Hrvatski</option>
    </select>
  );
}
