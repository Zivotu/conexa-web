import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  MessageSquare,
  Star,
  Bell,
  ImageIcon,
  Users,
  Eye,
  Lock,
} from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ChatRoomDetail: React.FC = () => {
  const id = 'chat-room';
  const currentIndex = modulesList.findIndex((m) => m.id === id);
  const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;

  // Accent color for Chat Room
  const accentColor = modulesList[currentIndex].color;

  const moduleData: { [key: string]: any } = {
    'chat-room': {
      id: 'chat-room',
      title: 'Chat Room',
      description: 'Quick messages. Helpful tips. A true community.',
      subtitle:
        'Forget messy group chats – Chat Room provides a modern, private space for residents to connect.',
      extendedDescription:
        'Each building has its own closed group chat, accessible only to verified members. Need a ladder? Looking for advice? Or just want to say hi to your neighbors? In seconds, everyone in the building sees your message and can respond.',
      youtubeVideoId: 'z1NGHYtnlQE',
      highlights: [
        {
          icon: MessageSquare,
          title: 'Private Building Chat',
          description: 'Only verified residents can join. No outsiders, no spam.',
        },
        {
          icon: Bell,
          title: 'Instant Notifications',
          description: 'Get real-time push alerts for every new message in your building.',
        },
        {
          icon: ImageIcon,
          title: 'Share Photos',
          description: 'Attach images from your gallery or camera to any message.',
        },
        {
          icon: Users,
          title: 'Community Support',
          description: 'Neighbors help neighbors—coordinate events or offer assistance instantly.',
        },
        {
          icon: Eye,
          title: 'View Count',
          description: 'See how many residents viewed your message, anonymously and securely.',
        },
        {
          icon: Lock,
          title: 'Privacy First',
          description: 'Your chat is encrypted and only visible to members of your building.',
        },
      ],
      testimonial: {
        quote:
          '“When something beeps in the basement at 3 AM, someone always knows how to fix it—and they post right away in live chat. Amazing!”',
        author: 'Community Member',
      },
      screenshot: '/assets/ChatRoom_1.jpg',
      faq: [
        {
          question: 'Who can use this module?',
          answer:
            'All verified residents of a building automatically gain access to the Chat Room.',
        },
        {
          question: 'Is the chat visible outside my building?',
          answer: 'No. Chat Room is fully closed—only residents in your building can see it.',
        },
        {
          question: 'Can I send an image?',
          answer: 'Yes, you can attach a photo from your gallery or take one with your camera.',
        },
        {
          question: "How do I know if someone’s read my message?",
          answer:
            'You’ll see a total view count for each message—no individual names are shown.',
        },
        {
          question: 'How is this different from the “Noise” module?',
          answer:
            'Noise is meant for formal announcements (e.g., maintenance, events). Chat Room is for everyday, informal neighbor-to-neighbor communication.',
        },
      ],
    },
  };

  const module = moduleData['chat-room'];

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

      <ModuleNav currentId="chat-room" />

      {/* Hero Section: Image & Text */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Screenshot */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt="Chat Room mock-up"
                className="max-h-[500px] w-auto rounded-xl shadow-lg object-contain"
              />
            </div>
            {/* Text */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <MessageSquare size={56} className={`text-[${accentColor}]`} />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                  {module.title} – Instant Communication for
                  <br className="hidden lg:block" /> Stronger Communities
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

      {/* Podcast Snippet (YouTube) */}
      {module.youtubeVideoId && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                Listen to a Podcast Snippet About Chat Room
              </h2>
            </div>
            <YouTubeEmbed
              videoId={module.youtubeVideoId}
              title="Chat Room Podcast Snippet"
              className="max-w-3xl mx-auto"
            />
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ChatRoomDetail;
