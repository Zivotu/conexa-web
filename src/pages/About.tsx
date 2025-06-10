import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            {t('about_page.title')}
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about_page.tagline')}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-8">
              {t('about_page.mission_title')}
            </h2>
            <p className="font-inter text-xl text-gray-600 leading-relaxed">
              {t('about_page.mission_text')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Timeline */}
      <section className="py-20 bg-conexa-light-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 text-center mb-12">
              {t('about_page.vision_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-conexa-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-poppins font-bold text-lg">2025</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                    {t('about_page.vision1_title')}
                  </h3>
                  <p className="font-inter text-gray-600">
                    {t('about_page.vision1_desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-conexa-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-poppins font-bold text-lg">2026</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                    {t('about_page.vision2_title')}
                  </h3>
                  <p className="font-inter text-gray-600">
                    {t('about_page.vision2_desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-poppins font-bold text-lg">2027</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                    {t('about_page.vision3_title')}
                  </h3>
                  <p className="font-inter text-gray-600">
                    {t('about_page.vision3_desc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Before Global */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-8">
              {t('about_page.local_before_global_title')}
            </h2>
            <div className="mb-8">
              <img 
                src="/assets/local-global-map.png" 
                alt="Local before Global concept map"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </div>
            <p className="font-inter text-xl text-gray-600 leading-relaxed">
              {t('about_page.local_before_global_text')}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20 bg-conexa-light-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <blockquote className="font-inter text-2xl text-gray-700 mb-6">
                  {t('about_page.founder_quote')}
                </blockquote>
                <div>
                  <p className="font-poppins font-semibold text-gray-900 text-lg">
                    Ana Marić
                  </p>
                  <p className="font-inter text-gray-600">
                    {t('about_page.founder_title')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 text-center mb-12">
              {t('about_page.values_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-conexa-primary font-poppins font-bold text-lg">F</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  {t('about_page.friendly')}
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  {t('about_page.friendly_desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-conexa-accent font-poppins font-bold text-lg">I</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  {t('about_page.inclusive')}
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  {t('about_page.inclusive_desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-poppins font-bold text-lg">C</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  {t('about_page.community_centred')}
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  {t('about_page.community_centred_desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-poppins font-bold text-lg">P</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  {t('about_page.practical')}
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  {t('about_page.practical_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-conexa-primary to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-semibold text-3xl text-white mb-4">
            {t('about_page.cta_title')}
          </h2>
          <p className="font-inter text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('about_page.cta_text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-conexa-primary hover:bg-gray-100 font-inter font-medium text-lg px-8 py-6 rounded-lg transition-all hover:scale-105">
              {t('about_page.start_building')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-conexa-primary font-inter font-medium text-lg px-8 py-6 rounded-lg transition-all hover:scale-105">
              {t('about_page.learn_more')}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;