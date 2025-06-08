import Layout from '@/components/Layout';

const Languages = () => {
  const languages = [
    'English',
    'Croatian',
    'German',
    'French',
    'Turkish',
    'Norwegian',
    'Portuguese',
    'Finnish',
    'Greek',
    'Spanish',
    'Italian',
    'Russian'
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
          <ul className="mt-6 space-y-2 font-inter text-gray-700">
            {languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Languages;
