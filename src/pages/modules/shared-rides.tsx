import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Car,
  Calendar,
  Users,
  MessageSquare,
  Bell,
  ShieldCheck,
  Star,
} from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SharedRidesDetail: React.FC = () => {
  const id = 'shared-rides';
  const currentIndex = modulesList.findIndex((m) => m.id === id);
  const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;

  const moduleData: { [key: string]: any } = {
    'shared-rides': {
      id: 'shared-rides',
      title: 'Shared Rides – Commute Together, Connect Locally',
      description:
        'Offer or find rides with neighbors for a greener, more social commute.',
      subtitle:
        'Reduce costs, traffic, and emissions by carpooling within your community.',
      extendedDescription:
        'Whether you’re heading to work, school, or an event, Shared Rides lets you coordinate trips with verified residents nearby. Post your route and schedule, browse available rides, and connect in real-time—all within a secure, community-focused platform.',
      youtubeVideoId: '-vKcK1Te604',
      highlights: [
        {
          icon: Car,
          title: 'Offer a Ride',
          description:
            'Post your trip details—pickup, drop-off, and schedule—and let neighbors request a seat.',
        },
        {
          icon: Calendar,
          title: 'Schedule Trips',
          description:
            'Set recurring or one-off rides, and manage availability directly in the app.',
        },
        {
          icon: Users,
          title: 'Community Verified',
          description:
            'Only registered residents can participate, ensuring trust and accountability.',
        },
        {
          icon: MessageSquare,
          title: 'In-App Messaging',
          description:
            'Chat with passengers or drivers to coordinate pickup points and timing.',
        },
        {
          icon: Bell,
          title: 'Real-Time Notifications',
          description:
            'Receive instant alerts when someone joins your ride or if plans change.',
        },
        {
          icon: ShieldCheck,
          title: 'Safety & Ratings',
          description:
            'Rate and review rides to build credibility; enjoy background-checked drivers for peace of mind.',
        },
      ],
      testimonial: {
        quote:
          '“Shared Rides has completely transformed my commute. I’ve saved money, met great neighbors, and cut down on traffic!”',
        author: 'Community Member',
      },
      screenshot: '/assets/Rides_1.jpg',
      faq: [
        {
          question: 'Who can use Shared Rides?',
          answer:
            'Any verified resident of your building or neighborhood can offer or request rides.',
        },
        {
          question: 'How do I offer a ride?',
          answer:
            'Tap “Offer Ride,” enter your departure time, pickup location, and available seats. Neighbors will request to join.',
        },
        {
          question: 'Can I schedule recurring carpools?',
          answer:
            'Yes—select “Recurring” when creating a ride and choose days of the week for automatic postings.',
        },
        {
          question: 'What if I need to cancel a ride?',
          answer:
            'Open your ride offer, tap “Cancel,” and all confirmed passengers will receive a notification immediately.',
        },
        {
          question: 'Is there a rating system?',
          answer:
            'Absolutely. After each trip, both drivers and passengers can rate each other to maintain a safe, trustworthy community.',
        },
      ],
    },
  };

  const module = moduleData['shared-rides'];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-[#f5f5f5] py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className="text-[#86be41] hover:text-[#6fa332] flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      <ModuleNav currentId="shared-rides" />

      {/* Hero Section (Image & Text) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Left column: screenshot */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt="Shared Rides module mock-up"
                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#86be41] object-contain"
              />
            </div>

            {/* Right column: icon + text */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <Car size={56} className="text-[#86be41]" />
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
                    <IconComponent size={32} className="mb-3 text-[#86be41]" />
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

      {/* Video */}
      {module.youtubeVideoId && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                Watch a Video About Shared Rides
              </h2>
            </div>
            <YouTubeEmbed
              videoId={module.youtubeVideoId}
              title="Shared Rides Overview"
              className="max-w-3xl mx-auto"
            />
          </div>
        </section>
      )}
    </Layout>
  );
};

export default SharedRidesDetail;
