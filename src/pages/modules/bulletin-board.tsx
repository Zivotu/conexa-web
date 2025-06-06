import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Check,
  ClipboardList,
  MapPin,
  ImageIcon,
  MessageSquare,
  Clock,
  Users,
  CreditCard,
  Star
} from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const BulletinBoardDetail = () => {
  const id = 'bulletin-board';

  const moduleData: { [key: string]: any } = {
    'bulletin-board': {
      id: 'bulletin-board',
      title: 'Bulletin Board',
      description:
        'Everything you need for local advertising – simple, clear, and tailored to your community.',
      subtitle:
        'The Bulletin Board module in the Conexa app allows you to quickly and efficiently post ads within your building or the wider community. Whether it’s internal notices or paid listings for wider reach, this module ensures all information is organized in one place.',
      youtubeVideoId: 'CDbcFkAno14',
      highlights: [
        {
          icon: ClipboardList,
          title: 'Two Types of Ads',
          description:
            '“Internal Ads” for building members only, and “All Ads” for the wider community within a chosen radius.',
        },
        {
          icon: MapPin,
          title: 'Geolocation Filtering',
          description:
            'Public ads are automatically filtered by building coordinates and selected radius (1 km, 5 km, 15 km).',
        },
        {
          icon: ImageIcon,
          title: 'Multimedia Support',
          description:
            'Upload photos from camera or gallery to make your ad visually appealing. Defaults applied if no image is chosen.',
        },
        {
          icon: MessageSquare,
          title: 'Interactive Engagement',
          description:
            'Residents can like, dislike, comment, share, or even download ads as text files.',
        },
        {
          icon: Clock,
          title: 'Lazy Loading',
          description:
            'Ads load dynamically in smaller segments for a faster, scroll-friendly browsing experience.',
        },
        {
          icon: Users,
          title: 'Admin Controls',
          description:
            'Only ad creators or location admins can edit or delete. Keep all promotions secure and well-managed.',
        },
        {
          icon: CreditCard,
          title: 'Paid Listings for Wider Reach',
          description:
            'Paid listings extend beyond your building—select a radius (e.g., $5 for 5 km, $15 for 15 km), and the cost is auto-deducted from your balance.',
        },
      ],
      testimonial: {
        quote:
          '“With the bulletin board, all announcements and promotions in our building are always available – you’ll never miss an important notice or neighborhood offer again!”',
        author: 'Building Administrator',
      },
      screenshot: '/assets/Bulletin_1.jpg',
      faq: [
        {
          question: 'What is the Bulletin Board?',
          answer:
            'The Bulletin Board is a module for creating and browsing ads within your virtual building or the wider community, depending on the selected ad type.',
        },
        {
          question: 'What types of ads are supported?',
          answer:
            'There are two supported ad types: Internal Ad (for building members only) and All Ads (targeted at the wider community, filtered by radius based on the building’s location).',
        },
        {
          question: 'How is the price for public ads determined?',
          answer:
            'Public ads may have an additional cost based on the selected radius (e.g., $5 for 5 km, $15 for 15 km). The amount is automatically deducted from the user’s balance upon ad creation.',
        },
        {
          question: 'Who has permission to edit or delete ads?',
          answer:
            'Only the ad creator or the location administrator can edit or delete ads.',
        },
        {
          question: 'Can I add images to an ad?',
          answer:
            'Yes, you can add images using your camera or gallery when creating the ad. If no image is added, a default ad image will be used.',
        },
        {
          question: 'How are ads displayed?',
          answer:
            'Ads are shown in a list format, sorted by creation date. The system supports lazy loading to allow fast browsing of many ads.',
        },
        {
          question: 'Can users comment or react to ads?',
          answer:
            'Yes, users can like, dislike, comment, share ads, and download them as text files.',
        },
      ],
    },
  };

  const module = moduleData[id] || {
    title: 'Module Not Found',
    description: 'This module does not exist or the link is incorrect.',
    highlights: [],
    testimonial: null,
    screenshot: '',
    faq: [],
  };

  const isBulletin = id === 'bulletin-board';

  return (
    <Layout>
      <ModuleNav currentId="bulletin-board" />
      {/* Breadcrumb */}
      <section className="bg-conexa-light-grey py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className="text-[#fdc107] hover:text-[#d1a406] flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Left column: graphic with bold outline & strong shadow */}
            {isBulletin && (
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
                <img
                  src={module.screenshot}
                  alt="Bulletin Board mock-up"
                  className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#fdc107] object-contain"
                />
              </div>
            )}

            {/* Right column: text + jumbo icon */}
            <div className="w-full lg:w-1/2">
              {isBulletin && (
                <div className="flex justify-center lg:justify-start mb-4">
                  <ClipboardList size={56} className="text-[#fdc107]" />
                </div>
              )}
              <div className="text-center lg:text-left">
                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                  {module.title} – A Smarter Way to Share What Matters
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
                    <IconComponent size={32} className="mb-3 text-[#fdc107]" />
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

      {/* YouTube Video */}
      {module.youtubeVideoId && (
        <section className="py-10 bg-conexa-light-grey">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                Watch a Podcast Snippet About Bulletin Board
              </h2>
            </div>
            <YouTubeEmbed
              videoId={module.youtubeVideoId}
              title="Bulletin Board Podcast Snippet"
              className="max-w-3xl mx-auto"
            />
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BulletinBoardDetail;
