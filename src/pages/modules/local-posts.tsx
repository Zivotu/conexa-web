import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  ImageIcon,
  MessageSquare,
  Calendar,
  Lock,
  ShieldCheck,
  Bell,
  Star,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const LocalPostsDetail: React.FC = () => {
  const id = 'local-posts';
  const currentIndex = modulesList.findIndex((m) => m.id === id);
  const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;

  const moduleData: { [key: string]: any } = {
    'local-posts': {
      id: 'local-posts',
      title: 'Share the Moment',
      description:
        'A community-driven social feed for neighbors to share photos, updates, and events.',
      subtitle:
        'Capture and share life’s moments with your local community.',
      extendedDescription:
        'Whether it’s a snapshot of your morning coffee, an announcement about a block party, or simply saying hello, Share the Moment lets verified residents post and engage with one another in a private, local feed. Stay connected, inspired, and informed within your neighborhood.',
      highlights: [
        {
          icon: ImageIcon,
          title: 'Photo & Video Sharing',
          description: 'Post images and short videos to share what’s happening in your life.',
        },
        {
          icon: MessageSquare,
          title: 'Comment & React',
          description: 'Engage with neighbors by liking, commenting, and reacting to posts.',
        },
        {
          icon: Calendar,
          title: 'Event Creation',
          description: 'Announce local gatherings, yard sales, or community meetups easily.',
        },
        {
          icon: Lock,
          title: 'Privacy Controls',
          description: 'Choose who sees your posts—friends, building, or entire neighborhood.',
        },
        {
          icon: ShieldCheck,
          title: 'Moderation Tools',
          description: 'Report or moderate inappropriate content to keep the feed respectful.',
        },
        {
          icon: Bell,
          title: 'Notifications',
          description: 'Receive push alerts when someone interacts with your posts or mentions you.',
        },
      ],
      testimonial: {
        quote:
          '“I love checking our local feed for fun updates and neighborhood events—it really brings us closer as a community.”',
        author: 'Happy Resident',
      },
      screenshot: '/assets/Social_1.jpg',
      faq: [
        {
          question: 'Who can post in Share the Moment?',
          answer:
            'Only verified residents of your building or neighborhood can create posts, ensuring a trusted community environment.',
        },
        {
          question: 'How do I share a photo or video?',
          answer:
            'Tap the “New Post” button, choose “Photo/Video,” select your media, add a caption, and publish. Your post will appear in the local feed.',
        },
        {
          question: 'Can I control who sees my posts?',
          answer:
            'Yes—when creating a post, select from “Building Only,” “Neighbors,” or “Friends” privacy settings.',
        },
        {
          question: 'How is inappropriate content handled?',
          answer:
            'Tap the “Report” icon on any post. Moderators review flagged content and take action to maintain a respectful feed.',
        },
        {
          question: 'Will I be notified about comments?',
          answer:
            'Enable push notifications to receive alerts whenever someone comments on or reacts to your post.',
        },
      ],
    },
  };

  const module = moduleData['local-posts'];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-[#f5f5f5] py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className="text-[#2a2a2a] hover:text-[#1f1f1f] flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      <ModuleNav currentId="local-posts" />

      {/* Hero Section (Image & Text) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Left column: screenshot */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt="Share the Moment mock-up"
                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#2a2a2a] object-contain"
              />
            </div>

            {/* Right column: icon + text */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <ImageIcon size={56} className="text-[#2a2a2a]" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                  {module.title} – Connect Through Shared Moments
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
                    <IconComponent size={32} className="mb-3 text-[#2a2a2a]" />
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

export default LocalPostsDetail;
