import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  FileText,
  Bell,
  Calendar,
  Download,
  Archive,
  Users,
  Star,
} from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const OfficialNoticesDetail: React.FC = () => {
  const id = 'official-notices';
  const currentIndex = modulesList.findIndex((m) => m.id === id);
  const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;

  const moduleData: { [key: string]: any } = {
    'official-notices': {
      id: 'official-notices',
      title: 'Official Notices',
      description:
        'Stay informed with all building-wide announcements, posted directly by your management team.',
      subtitle:
        'Never miss an important update—find every official notice in one secure place.',
      extendedDescription:
        'From maintenance schedules and upcoming community meetings to urgent safety alerts, the Official Notices module ensures that every verified resident receives timely, accurate information. Browse current and past notices, download attachments, and opt in for push notifications to stay up to date.',
      youtubeVideoId: 'K-08rgQU75U',
      highlights: [
        {
          icon: FileText,
          title: 'Centralized Bulletin Board',
          description:
            'All notices—maintenance, events, safety alerts—are posted in one place, organized by date and category.',
        },
        {
          icon: Bell,
          title: 'Push Notifications',
          description:
            'Receive instant alerts on your device whenever a new notice is published.',
        },
        {
          icon: Calendar,
          title: 'Scheduled Announcements',
          description:
            'Administrators can schedule notices in advance—residents see them at the right time.',
        },
        {
          icon: Users,
          title: 'Verified Contributors',
          description:
            'Only building admins and designated reps can post, ensuring authenticity and relevance.',
        },
        {
          icon: Download,
          title: 'Downloadable Attachments',
          description:
            'Download PDFs, forms, and additional documents attached to any notice.',
        },
        {
          icon: Archive,
          title: 'Archive Access',
          description:
            'Browse and search past notices anytime—no more digging through old emails.',
        },
      ],
      testimonial: {
        quote:
          '“Thanks to Official Notices, I always know when maintenance is scheduled or if there’s an urgent alert. It’s streamlined our community communication!”',
        author: 'Building Resident',
      },
      screenshot: '/assets/Notices_1.jpg',
      faq: [
        {
          question: 'Who can post an official notice?',
          answer:
            'Only verified administrators or building representatives have permission to publish notices.',
        },
        {
          question: 'Who can view the notices?',
          answer:
            'All verified residents of the building or community can view current and past notices.',
        },
        {
          question: 'How will I know if there’s a new notice?',
          answer:
            'You’ll receive a push notification on your device the moment a new notice is published.',
        },
        {
          question: 'Can I download documents attached to a notice?',
          answer:
            'Yes—tap the attachment icon on any notice to download PDFs or additional files directly to your device.',
        },
        {
          question: 'Are old notices archived?',
          answer:
            'Yes—browse the “Archive” section to view all past notices, searchable by date and category.',
        },
      ],
    },
  };

  const module = moduleData['official-notices'];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-[#f5f5f5] py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className="text-[#5e2fb1] hover:text-[#4a238e] flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      <ModuleNav currentId="official-notices" />

      {/* Hero Section (Image & Text) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Left column: screenshot */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt="Official Notices mock-up"
                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#5e2fb1] object-contain"
              />
            </div>

            {/* Right column: icon + text */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <FileText size={56} className="text-[#5e2fb1]" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                  {module.title} – Stay Up to Date With Every Announcement
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
                    <IconComponent size={32} className="mb-3 text-[#5e2fb1]" />
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
                Watch a Video About Official Notices
              </h2>
            </div>
            <YouTubeEmbed
              videoId={module.youtubeVideoId}
              title="Official Notices Overview"
              className="max-w-3xl mx-auto"
            />
          </div>
        </section>
      )}
    </Layout>
  );
};

export default OfficialNoticesDetail;
