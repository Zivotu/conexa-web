import Layout from "@/components/Layout";

const Languages = () => {
  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "العربية", flag: "🇦🇪" },
    { name: "বাংলা", flag: "🇧🇩" },
    { name: "Bosanski", flag: "🇧🇦" },
    { name: "Dansk", flag: "🇩🇰" },
    { name: "Deutsch", flag: "🇩🇪" },
    { name: "Español", flag: "🇪🇸" },
    { name: "فارسی", flag: "🇮🇷" },
    { name: "Suomi", flag: "🇫🇮" },
    { name: "Français", flag: "🇫🇷" },
    { name: "हिन्दी", flag: "🇮🇳" },
    { name: "Hrvatski", flag: "🇭🇷" },
    { name: "Magyar", flag: "🇭🇺" },
    { name: "Bahasa Indonesia", flag: "🇮🇩" },
    { name: "Íslenska", flag: "🇮🇸" },
    { name: "Italiano", flag: "🇮🇹" },
    { name: "日本語", flag: "🇯🇵" },
    { name: "한국어", flag: "🇰🇷" },
    { name: "Nederlands", flag: "🇳🇱" },
    { name: "Norsk", flag: "🇳🇴" },
    { name: "Polski", flag: "🇵🇱" },
    { name: "Português", flag: "🇵🇹" },
    { name: "Română", flag: "🇷🇴" },
    { name: "Русский", flag: "🇷🇺" },
    { name: "Slovensko", flag: "🇸🇰" },
    { name: "Srpski", flag: "🇷🇸" },
    { name: "Svenska", flag: "🇸🇪" },
    { name: "ไทย", flag: "🇹🇭" },
    { name: "Türkçe", flag: "🇹🇷" },
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            Supported Languages in Conexa
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            The following languages are supported in the Conexa application:
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex flex-col items-center space-y-3"
              >
                <span
                  className="text-5xl"
                  role="img"
                  aria-label={lang.name + " flag"}
                >
                  {lang.flag}
                </span>
                <span className="font-inter text-lg text-gray-700">
                  {lang.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Languages;
