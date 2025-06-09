import { useEffect } from 'react';

const languages = [
  { code: 'hr', label: 'HR' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'it', label: 'IT' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
  { code: 'nl', label: 'NL' },
  { code: 'pl', label: 'PL' },
  { code: 'bs', label: 'BS' }
];

const LanguageSelector = () => {
  useEffect(() => {
    if (!(window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'hr',
            includedLanguages: languages.map((l) => l.code).join(','),
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };
      const script = document.createElement('script');
      script.id = 'google-translate';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    }
  }, []);

  const hideBanner = () => {
    const frame = document.querySelector<HTMLIFrameElement>('iframe.goog-te-banner-frame');
    if (frame) {
      frame.style.display = 'none';
    }
    document.body.style.top = '0px';
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change'));
      hideBanner();
    }
  };

  return (
    <div className="notranslate" translate="no">
      <select
        onChange={handleChange}
        className="notranslate border rounded px-2 py-1 text-sm"
        translate="no"
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code} className="notranslate" translate="no">
            {label}
          </option>
        ))}
      </select>
      <div id="google_translate_element" className="hidden" />
    </div>
  );
};

export default LanguageSelector;
