import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';

const Security = () => (
  <Layout>
    <ModuleNav currentId="security" />
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-poppins font-semibold text-4xl text-gray-900">
          Security
        </h1>
      </div>
    </section>
  </Layout>
);

export default Security;
