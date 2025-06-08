import Layout from '@/components/Layout';

const Languages = () => {
  const languages = [
    { name: 'English', flag: '🇬🇧' },
    { name: 'Croatian', flag: '🇭🇷' },
    { name: 'German', flag: '🇩🇪' },
    { name: 'French', flag: '🇫🇷' },
    { name: 'Turkish', flag: '🇹🇷' },
    { name: 'Norwegian', flag: '🇳🇴' },
    { name: 'Portuguese', flag: '🇵🇹' },
    { name: 'Finnish', flag: '🇫🇮' },
    { name: 'Greek', flag: '🇬🇷' },
    { name: 'Spanish', flag: '🇪🇸' },
    { name: 'Italian', flag: '🇮🇹' },
    { name: 'Russian', flag: '🇷🇺' }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            Supported Languages in Conexa
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Conexa currently supports the following languages:
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {languages.map((lang) => (
              <div key={lang.name} className="flex flex-col items-center space-y-3">
                <span className="text-5xl" role="img" aria-label={lang.name + ' flag'}>{lang.flag}</span>
                <span className="font-inter text-lg text-gray-700">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Languages;
