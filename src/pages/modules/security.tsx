import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Video,
  Users,
  Bell,
  Lock,
  AlertCircle,
  FileText,
  Star,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SecurityDetail: React.FC = () => {
  const id = 'security';
  const currentIndex = modulesList.findIndex((m) => m.id === id);
  const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;

  const moduleData: { [key: string]: any } = {
    security: {
      id: 'security',
      title: 'Security – Peace of Mind Through Visibility',
      description:
        'Gain real-time insights into your building’s security. Monitor cameras, track entries, and respond to incidents instantly.',
      subtitle: '24/7 transparency for a safer community.',
      extendedDescription:
        'With live camera feeds, visitor logs, and instant alerts, the Security module ensures residents and administrators can maintain a secure environment at all times. View footage on demand, receive motion-detection warnings, and keep detailed audit trails for full accountability.',
      highlights: [
        {
          icon: Video,
          title: 'Live Camera Feeds',
          description:
            'Access real-time security camera streams directly from your device, anytime, anywhere.',
        },
        {
          icon: Users,
          title: 'Visitor Management',
          description:
            'View digital visitor logs and grant or revoke access in seconds for complete control.',
        },
        {
          icon: Bell,
          title: 'Motion Detection Alerts',
          description:
            'Receive instant notifications when unusual activity is detected outside normal hours.',
        },
        {
          icon: Lock,
          title: 'Secure Access Control',
          description:
            'Manage smart door locks and access permissions remotely to keep unauthorized users out.',
        },
        {
          icon: AlertCircle,
          title: 'Emergency Response Integration',
          description:
            'Quickly notify security personnel or emergency services with a single tap in critical situations.',
        },
        {
          icon: FileText,
          title: 'Audit Trails & Reports',
          description:
            'Review historical logs of security events and generate reports for peace of mind.',
        },
      ],
      testimonial: {
        quote:
          '“I love knowing I can check our building cameras at any time. It’s a game-changer for our community’s safety.”',
        author: 'Building Resident',
      },
      screenshot: '/assets/Security_1.jpg',
      faq: [
        {
          question: 'Who can view live camera feeds?',
          answer:
            'Only verified residents and administrators with the appropriate permissions can access live video streams.',
        },
        {
          question: 'How is my privacy protected?',
          answer:
            'All video feeds and security data are fully encrypted and accessible only to authorized users within the building.',
        },
        {
          question: 'What happens if I detect suspicious activity?',
          answer:
            'You can trigger an alert directly from the app, notifying building admins or security personnel immediately.',
        },
        {
          question: 'Can I control door locks from the app?',
          answer:
            'Yes—if your building has compatible smart locks, you can lock or unlock doors remotely and manage permissions on the fly.',
        },
        {
          question: 'Are security events logged?',
          answer:
            'All incidents, alerts, and access events are recorded in the Audit Trails section for later review.',
        },
      ],
    },
  };

  const module = moduleData['security'];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-[#f5f5f5] py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className="text-[#2196f3] hover:text-[#1a73e8] flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      <ModuleNav currentId="security" />

      {/* Hero Section (Image & Text) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Left: screenshot */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt="Security module mock-up"
                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#2196f3] object-contain"
              />
            </div>

            {/* Right: icon + text */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <Video size={56} className="text-[#2196f3]" />
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
                    <IconComponent size={32} className="mb-3 text-[#2196f3]" />
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

export default SecurityDetail;
