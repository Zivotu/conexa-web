import { useEffect, useRef } from 'react';

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
  const selectRef = useRef<HTMLSelectElement>(null);
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

        const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
        if (combo) {
          combo.classList.add('notranslate');
          combo.setAttribute('translate', 'no');
          combo.querySelectorAll('option').forEach((option) => {
            option.setAttribute('data-label', option.textContent ?? '');
            option.classList.add('notranslate');
            option.setAttribute('translate', 'no');
          });
          const restore = () => {
            combo.querySelectorAll('option').forEach((option) => {
              const label = option.getAttribute('data-label');
              if (label) option.textContent = label;
            });
          };
          combo.addEventListener('change', restore);
          const observer = new MutationObserver(restore);
          observer.observe(combo, { childList: true, subtree: true, characterData: true });
        }
      };
      const script = document.createElement('script');
      script.id = 'google-translate';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    }

    if (selectRef.current) {
      const select = selectRef.current;
      select.classList.add('notranslate');
      select.setAttribute('translate', 'no');
      select.querySelectorAll('option').forEach((option) => {
        option.classList.add('notranslate');
        option.setAttribute('translate', 'no');
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div>
      <select
        onChange={handleChange}
        className="border rounded px-2 py-1 text-sm"
        ref={selectRef}
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code} data-label={label}>
            {label}
          </option>
        ))}
      </select>
      <div id="google_translate_element" className="hidden" />
    </div>
  );
};

export default LanguageSelector;
