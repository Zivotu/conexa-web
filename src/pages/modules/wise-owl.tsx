import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  MessageSquare,
  Bell,
  Star,
  Users,
  Calendar,
  Lock,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const WiseOwlDetail: React.FC = () => {
  const id = 'wise-owl';
  const currentIndex = modulesList.findIndex((m) => m.id === id);
  const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;

  const moduleData: { [key: string]: any } = {
    'wise-owl': {
      id: 'wise-owl',
      title: 'Wise Owl – Feed the Mind, Inspire the Community',
      description:
        'Receive daily motivational quotes and helpful tips straight to your device.',
      subtitle: 'Start your day with inspiration curated for your community.',
      extendedDescription:
        'Wise Owl delivers handpicked quotes, quick advice, and mental wellness tips every morning. Save your favorites, share with neighbors, and track your personal growth over time.',
      highlights: [
        {
          icon: MessageSquare,
          title: 'Daily Inspiration',
          description: 'Receive a new motivational quote every morning.',
        },
        {
          icon: Bell,
          title: 'Notifications',
          description: 'Enable push notifications to never miss a quote.',
        },
        {
          icon: Star,
          title: 'Favorite Quotes',
          description: 'Save and revisit your favorite quotes any time.',
        },
        {
          icon: Users,
          title: 'Share with Neighbors',
          description: 'Share inspiring quotes directly with your community.',
        },
        {
          icon: Calendar,
          title: 'Quote History',
          description: 'Browse past quotes via the integrated archive.',
        },
        {
          icon: Lock,
          title: 'Privacy First',
          description: 'Your preferences and data are protected and private.',
        },
      ],
      testimonial: {
        quote:
          '“Wise Owl brightens my mornings and keeps me motivated throughout the week.”',
        author: 'Engaged Resident',
      },
      screenshot: '/assets/Education_1.jpg',
      faq: [
        {
          question: 'How often do I receive quotes?',
          answer:
            'Quotes are delivered daily at a time you choose in settings.',
        },
        {
          question: 'Can I share quotes?',
          answer:
            'Yes, tap the share icon to send quotes to neighbors or external apps.',
        },
        {
          question: 'How do I save favorite quotes?',
          answer:
            'Tap the star icon on any quote to add it to your Favorites.',
        },
        {
          question: 'Can I browse previous quotes?',
          answer:
            'Yes, the Quote History section lets you browse all past daily quotes.',
        },
        {
          question: 'Is my data secure?',
          answer:
            'All data and preferences are encrypted and only accessible by you.',
        },
      ],
    },
  };

  const module = moduleData['wise-owl'];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-[#f5f5f5] py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className="text-[#008dea] hover:text-[#006bbd] flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      <ModuleNav currentId="wise-owl" />

      {/* Hero Section (Image & Text) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Left: screenshot */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt="Wise Owl module mock-up"
                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#008dea] object-contain"
              />
            </div>

            {/* Right: icon + text */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <MessageSquare size={56} className="text-[#008dea]" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                  {module.title}
                </h1>
                <p className="font-inter text-lg lg:text-xl text-gray-600 mb-3">
                  {module.description}
                </p>
                {module.subtitle && (
                  <p className="font-inter text-base lg:text-lg text-gray-500 max-w-prose mx-auto lg:mx-0">
                    {module.subtitle}
                  </p>
                )}
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
                Highlights
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
                    <IconComponent size={32} className="mb-3 text-[#008dea]" />
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

      {/* Testimonial */}
      {module.testimonial && (
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4">
            <Card className="p-6 text-center bg-gray-50">
              <CardContent className="p-0">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="font-inter text-base lg:text-lg text-gray-700 mb-2">
                  {module.testimonial.quote}
                </blockquote>
                <p className="font-poppins font-semibold text-gray-900 text-sm lg:text-base">
                  {module.testimonial.author}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* FAQ */}
      {module.faq && module.faq.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                FAQ – {module.title}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {module.faq.map((item: any, idx: number) => (
                  <AccordionItem key={idx} value={`faq-item-${idx}`}>
                    <AccordionTrigger className="font-poppins font-medium text-left py-2">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-inter text-gray-600 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default WiseOwlDetail;
