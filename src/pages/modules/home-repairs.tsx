import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Wrench,
  Clock,
  CheckSquare,
  ShieldCheck,
  MapPin,
  Smartphone,
  CalendarCheck,
  Star,
} from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HomeRepairsDetail: React.FC = () => {
  const id = 'home-repairs';
  const currentIndex = modulesList.findIndex((m) => m.id === id);
  const accentColor = modulesList[currentIndex].color;

  const moduleData: { [key: string]: any } = {
    'home-repairs': {
      id: 'home-repairs',
      title: 'Home Repairs',
      description:
        'Fast, reliable home repairs with trusted professionals—all through the Conexa app.',
      subtitle:
        'Submit a repair request, track its status, and get quality service from vetted technicians in minutes.',
      youtubeVideoId: 'rth3PDwq0-Q',
      highlights: [
        {
          icon: Wrench,
          title: 'On-Demand Repairs',
          description:
            'Request fixes for plumbing, electrical, HVAC, or general maintenance with just a few taps.',
        },
        {
          icon: CheckSquare,
          title: 'Trusted Professionals',
          description:
            'All technicians are vetted, reviewed, and approved by your community for peace of mind.',
        },
        {
          icon: Clock,
          title: 'Fast Response Times',
          description:
            'Submit a request and get matched with a qualified professional within minutes.',
        },
        {
          icon: ShieldCheck,
          title: 'Warranty Guaranteed',
          description:
            'All repairs come with a service warranty to ensure your complete satisfaction.',
        },
        {
          icon: MapPin,
          title: 'Local Technicians',
          description:
            'Support local businesses by hiring technicians from your neighborhood.',
        },
        {
          icon: Smartphone,
          title: 'In-App Booking',
          description:
            'Schedule, reschedule, or cancel repair appointments directly inside the Conexa app.',
        },
        {
          icon: CalendarCheck,
          title: 'Schedule & Track',
          description:
            'Keep track of appointment times, service history, and invoices in one place.',
        },
      ],
      testimonial: {
        quote:
          '“I had a leaky pipe at midnight and, thanks to Conexa, a plumber was at my door before breakfast—no hassle.”',
        author: 'Building Resident',
      },
      screenshot: '/assets/Repairs_1.jpg',
      faq: [
        {
          question: 'How do I request a repair?',
          answer:
            'Go to the Home Repairs module, describe the issue, choose a preferred time, and submit your request. A technician will be assigned shortly.',
        },
        {
          question: 'Who pays for the repair?',
          answer:
            'Costs are covered according to your building’s maintenance policy. Tenants can pay directly or through building management, depending on the service type.',
        },
        {
          question: 'What types of repairs are supported?',
          answer:
            'Currently, we support plumbing, electrical, HVAC, carpentry, and general maintenance. More services will be added soon.',
        },
        {
          question: 'Can I choose a specific technician?',
          answer:
            'The system will match you with a vetted professional, but you can also review profiles and pick from available technicians.',
        },
        {
          question: 'Is there a service fee?',
          answer:
            'A small fee may apply depending on the repair type and timing. All fees are displayed before you confirm the request.',
        },
        {
          question: 'What if I’m not satisfied with the repair?',
          answer:
            'If you have any complaints, contact support through the app and we will resolve the issue or arrange for follow-up service.',
        },
        {
          question: 'Can I view past repair requests?',
          answer:
            'Yes—your entire request history and statuses are available within the module for your records.',
        },
      ],
    },
  };

  const module = moduleData['home-repairs'];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-conexa-light-grey py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className={`text-[${accentColor}] hover:text-opacity-90 flex items-center`}
            >
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      <ModuleNav currentId="home-repairs" />

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Left column: screenshot */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt="Home Repairs module mock-up"
                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#f3372b] object-contain"
              />
            </div>

            {/* Right column: icon + text */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <Wrench size={56} className={`text-[${accentColor}]`} />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                  {module.title} – Fast, Reliable Fixes When You Need Them Most
                </h1>
                <p className="font-inter text-lg lg:text-xl text-gray-600 mb-3">
                  {module.description}
                </p>
                {module.subtitle && (
                  <p className="font-inter text-base lg:text-lg text-gray-500 max-w-prose mx-auto lg:mx-0">
                    {module.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          {module.testimonial && (
            <Card className="p-6 text-center my-8 bg-gray-50">
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
          )}
        </div>
      </section>

      {/* Highlights */}
      {module.highlights && module.highlights.length > 0 && (
        <section className="py-12 bg-conexa-light-grey">
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
                    <IconComponent size={32} className={`mb-3 text-[${accentColor}]`} />
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

      {/* YouTube Video (placed at the very end) */}
      {module.youtubeVideoId && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                Watch a Quick Overview of Home Repairs
              </h2>
            </div>
            <YouTubeEmbed
              videoId={module.youtubeVideoId}
              title="Home Repairs Overview"
              className="max-w-3xl mx-auto"
            />
          </div>
        </section>
      )}
    </Layout>
  );
};

export default HomeRepairsDetail;
