import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';

const HomeRepairs = () => (
  <Layout>
    <ModuleNav currentId="home-repairs" />
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-poppins font-semibold text-4xl text-gray-900">
          Home Repairs
        </h1>
      </div>
    </section>
  </Layout>
);

export default HomeRepairs;
