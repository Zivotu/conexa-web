import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import {
  ArrowLeft,
  Calendar,
  Eye,
  Repeat,
  Users,
} from 'lucide-react';

const SharedTasksDetail: React.FC = () => {
  const id = 'shared-tasks';
  const currentIndex = modulesList.findIndex((m) => m.id === id);
  const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;

  const moduleData: { [key: string]: any } = {
    'shared-tasks': {
      id: 'shared-tasks',
      title: 'Shared Tasks (e.g. Snow Shoveling)',
      description:
        'A transparent, automatic scheduler for shared chores—no more confusion about who’s next.',
      subtitle: '',
      extendedDescription:
        'Building reps can create schedules for tasks like snow removal, yard cleaning, or entrance maintenance. Each resident is auto-assigned a day based on the chosen timeframe, and everyone sees the schedule in the app.',
      highlights: [
        {
          icon: Calendar,
          title: 'Automatic Day Assignment',
          description:
            'Select users and timeframe—the app evenly distributes task dates for you.',
        },
        {
          icon: Eye,
          title: 'Clear Schedule Visibility',
          description:
            'Everyone sees who is responsible on which day, eliminating confusion.',
        },
        {
          icon: Repeat,
          title: 'Swaps & Changes',
          description:
            'Can’t do your turn? Send a swap request in one tap and get reassigned instantly.',
        },
        {
          icon: Users,
          title: 'Admin Privileges',
          description:
            'Building reps can edit or adjust the schedule at any time for full control.',
        },
      ],
      benefits: [
        'Fair distribution of responsibilities',
        'Easy swapping without arguments',
        'Transparency and accountability',
        'Automated reminders and clean interface',
      ],
      screenshot: '/assets/Tasks_1.jpg',
    },
  };

  const module = moduleData['shared-tasks'];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-[#f5f5f5] py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className="text-[#617d8d] hover:text-[#4f6670] flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      <ModuleNav currentId="shared-tasks" />

      {/* Hero Section (Image & Text) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Left column: screenshot */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt="Shared Tasks module mock-up"
                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#617d8d] object-contain"
              />
            </div>

            {/* Right column: icon + text */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <Calendar size={56} className="text-[#617d8d]" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                  {module.title}
                </h1>
                <p className="font-inter text-lg lg:text-xl text-gray-600 mb-3">
                  {module.description}
                </p>
                {module.extendedDescription && (
                  <p className="font-inter text-base lg:text-lg text-gray-600 max-w-prose mx-auto lg:mx-0 mt-4">
                    {module.extendedDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      {module.highlights && module.highlights.length > 0 && (
        <section className="py-12 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                Key Features
              </h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {module.highlights.map((item: any, idx: number) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <IconComponent size={32} className="mb-3 text-[#617d8d]" />
                    <h3 className="font-poppins font-semibold text-base lg:text-lg text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm lg:text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {module.benefits && module.benefits.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                Benefits for Residents
              </h2>
            </div>
            <ul className="max-w-3xl mx-auto list-disc list-inside space-y-2 text-gray-700 font-inter">
              {module.benefits.map((benefit: string, idx: number) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default SharedTasksDetail;
