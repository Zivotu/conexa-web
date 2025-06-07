import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Trophy,
  Users,
  Bell,
  Star,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const QuizDetail: React.FC = () => {
  const id = 'quiz';
  const currentIndex = modulesList.findIndex((m) => m.id === id);
  const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;

  const moduleData: { [key: string]: any } = {
    quiz: {
      id: 'quiz',
      title: 'Daily Quiz',
      description: 'Fun and competitive quizzes for building residents to enjoy daily.',
      subtitle: 'Test your knowledge and compete with neighbors every day.',
      extendedDescription:
        'Challenge yourself with daily quizzes covering topics from building trivia to general knowledge. Earn points, climb the leaderboard, and engage in friendly competition with your community.',
      highlights: [
        {
          icon: Calendar,
          title: 'Daily Challenges',
          description: 'New quizzes every day to keep you engaged.',
        },
        {
          icon: BookOpen,
          title: 'Variety of Topics',
          description: 'Quizzes range from local trivia to general knowledge.',
        },
        {
          icon: Trophy,
          title: 'Leaderboards & Rewards',
          description: 'Earn points and compete for top spots.',
        },
        {
          icon: Users,
          title: 'Community Engagement',
          description: 'See how your neighbors rank and join the fun.',
        },
        {
          icon: Bell,
          title: 'Push Notifications',
          description: 'Get reminded when new quizzes are live.',
        },
        {
          icon: Star,
          title: 'Achievements & Badges',
          description: 'Unlock badges for milestones and achievements.',
        },
      ],
      screenshot: '/assets/Quiz_1.jpg',
      faq: [
        {
          question: 'How often are quizzes updated?',
          answer:
            'Quizzes refresh daily, with a brand-new set of questions available every morning.',
        },
        {
          question: 'What topics do the quizzes cover?',
          answer:
            'Topics range from building-specific trivia and local history to general knowledge and pop culture.',
        },
        {
          question: 'How do I see my ranking?',
          answer:
            'After completing a quiz, your score is added to the leaderboard. Tap “Leaderboard” to view your position among neighbors.',
        },
        {
          question: 'Are there rewards for top performers?',
          answer:
            'Yes—top scorers earn badges and may receive special recognition in community posts.',
        },
        {
          question: 'Can I get notified when a new quiz is available?',
          answer:
            'Enable push notifications, and you’ll receive an alert each time a new quiz goes live.',
        },
      ],
    },
  };

  const module = moduleData['quiz'];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-[#f5f5f5] py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className="text-[#1690f3] hover:text-[#1171b0] flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      <ModuleNav currentId="quiz" />

      {/* Hero Section (Image & Text) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Left column: screenshot */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt="Daily Quiz mock-up"
                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#1690f3] object-contain"
              />
            </div>

            {/* Right column: icon + text */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <BookOpen size={56} className="text-[#1690f3]" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                  {module.title} – Test Your Knowledge and Compete Daily
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
                    <IconComponent size={32} className="mb-3 text-[#1690f3]" />
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
    </Layout>
  );
};

export default QuizDetail;
