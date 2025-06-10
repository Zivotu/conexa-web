import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { useTranslation } from 'react-i18next';

const Alarm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <ModuleNav currentId="alarm" />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl text-gray-900">
            {t('module_alarm.coming_soon')}
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default Alarm;
