import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  Eye, Zap, Users, Settings, MapPin, Clock,
  MessageSquare, FileText, HelpCircle, Bell, Volume2,
  Car, ShoppingBag, BookOpen, ShieldAlert, Calendar, Vote
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Eye,
      title: 'Transparency',
      subtitle: 'No hidden decisions',
      description:
        'All building-related decisions are made visible to residents. With open voting and real-time results, everyone stays informed and engaged.',
      features: [
        'Open voting on community matters',
        'Real-time result updates',
        'Decision history transparency',
        'No closed-door meetings'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: 'Simplicity',
      subtitle: 'One app to replace them all',
      description:
        'Forget messy WhatsApp groups and paper notes. Conexa centralizes everything—from announcements to task delegation—into one intuitive interface.',
      features: [
        'Unified communication hub',
        'Streamlined user experience',
        'Paperless & clutter-free',
        'Designed for all generations'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Community',
      subtitle: 'Connect with your neighbours',
      description:
        'Build trust and cooperation with tools designed for healthy communication, event planning, and community support.',
      features: [
        'Friendly neighborhood chat',
        'Shared responsibilities & initiatives',
        'Event creation & invites',
        'Tools to resolve disputes peacefully'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: Settings,
      title: 'Flexibility',
      subtitle: 'Customize your experience',
      description:
        'Each building can activate only the modules it needs. Grow from essential tools to a full-featured community suite at your own pace.',
      features: [
        'Optional feature activation',
        'Fits buildings of any size',
        'Roles and access control',
        'Future-ready upgrades'
      ],
      color: 'bg-orange-500'
    },
    {
      icon: MapPin,
      title: 'Local Relevance',
      subtitle: 'Hyperlocal, not global',
      description:
        'Posts, offers, and notifications are shown based on your real-world location. Stay informed about what matters *here*, not somewhere else.',
      features: [
        'Geo-targeted social posts',
        'Neighbourhood deals & services',
        'Only relevant events shown',
        'Dynamic radius filtering'
      ],
      color: 'bg-red-500'
    },
    {
      icon: Clock,
      title: 'Efficiency',
      subtitle: 'Streamlined decision-making',
      description:
        'Conexa reduces time spent on logistics. Automations, instant alerts, and simplified coordination cut through delays and chaos.',
      features: [
        'Fewer physical meetings',
        'Digital issue reporting',
        'Voting with deadline reminders',
        'Faster response & repairs'
      ],
      color: 'bg-indigo-500'
    }
  ];

  const modules = [
    { icon: FileText, label: 'Notices', path: '/modules/official-notices' },
    { icon: MessageSquare, label: 'Chat', path: '/modules/chat-room' },
    { icon: Vote, label: 'Voting', path: '/modules/official-notices' },
    { icon: BookOpen, label: 'Quiz', path: '/modules/quiz' },
    { icon: HelpCircle, label: 'Repairs', path: '/modules/home-repairs' },
    { icon: ShoppingBag, label: 'Marketplace', path: '/modules/marketplace' },
    { icon: Bell, label: 'Noise', path: '/modules/noise-alerts' },
    { icon: Volume2, label: 'Alarm', path: '/modules/alarm' },
    { icon: ShieldAlert, label: 'Security', path: '/modules/security' },
    { icon: Car, label: 'Shared Rides', path: '/modules/shared-rides' },
    { icon: Users, label: 'Neighbourhood', path: '/modules/local-posts' },
    { icon: Calendar, label: 'Events', path: '/modules/shared-tasks' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-4">
            Why Residents Love Conexa
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Built for real people in real buildings. From zgrada modules to local services, discover how Conexa reshapes daily living.
          </p>

          {/* Module Icons Row */}
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto mb-6">
            {modules.map(({ icon: Icon, label, path }, index) => (
              <Link
                key={index}
                to={path}
                className="flex flex-col items-center w-20 transform transition-transform duration-200 ease-in-out hover:scale-110"
              >
                <div className="group bg-conexa-primary/10 p-3 rounded-xl mb-1 cursor-pointer transform transition-transform duration-200 ease-in-out group-hover:rotate-12">
                  <Icon className="text-conexa-primary" size={24} />
                </div>
                <span className="text-xs text-gray-700 text-center font-medium">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-14 h-14 ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-1">
                            {benefit.title}
                          </h3>
                          <p className="font-inter text-conexa-primary font-medium mb-3">
                            {benefit.subtitle}
                          </p>
                          <p className="font-inter text-gray-600 mb-4">{benefit.description}</p>
                          <ul className="space-y-1.5">
                            {benefit.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Benefits;
