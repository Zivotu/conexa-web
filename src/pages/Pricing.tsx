import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Building,
  MessageSquare,
  HelpCircle,
  Clipboard,
  FileText,
  Brain,
  Calendar,
  Camera,
  Bell,
  Volume2,
  Zap,
  Users
} from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free Community',
      price: '€0',
      features: [
        { title: 'Home Repairs (photo reporting & verified techs)', link: '/modules/home-repairs', icon: Zap },
        { title: 'Geo-fenced Social Posts (local feed & anonymity)', link: '/modules/local-posts', icon: Users }
      ],
      cta: 'Get Started Free',
      variant: 'outline'
    },
    {
      name: 'Building Membership',
      price: '€34',
      period: '/ month / per building',
      features: [
        { title: 'Official Notices', icon: Building },
        { title: 'Chat Room', icon: MessageSquare },
        { title: 'Quiz', icon: HelpCircle },
        { title: 'Bulletin Board', icon: Clipboard },
        { title: 'Documents', icon: FileText },
        { title: 'Wise Owl', icon: Brain },
        { title: 'Shared Tasks', icon: Calendar },
        { title: 'Security', icon: Camera },
        { title: 'Alarm', icon: Bell },
        { title: 'Noise Alerts', icon: Volume2 }
      ],
      cta: 'Activate for Your Building',
      popular: true,
      variant: 'solid'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Start free with community services or upgrade to unlock full building management tools.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-md mx-auto">
            <p className="font-inter text-sm text-blue-800">
              <strong>Special Offer:</strong> First 7 days free!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative p-6 ${plan.popular ? 'border-2 border-conexa-primary shadow-lg' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-conexa-primary text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-0">
                    <div className="text-center mb-6">
                      <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">
                        {plan.name}
                      </h3>
                      <div className="mb-3">
                        <span className="text-3xl font-poppins font-bold text-gray-900">{plan.price}</span>
                        {plan.period && (
                          <span className="font-inter text-gray-600 ml-2">{plan.period}</span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => {
                        const IconComp = feature.icon;
                        return (
                          <li key={i} className="flex items-center">
                            <IconComp className="w-5 h-5 text-conexa-primary mr-2 flex-shrink-0" />
                            {feature.link ? (
                              <Link
                                to={feature.link}
                                className="font-inter text-gray-700 hover:underline"
                              >
                                {feature.title}
                              </Link>
                            ) : (
                              <span className="font-inter text-gray-700">
                                {feature.title}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>

                    <a
                      href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa&hl=en-US&ah=gz9G-WCHhz5UVkJh502cYJIcG4E"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className={`w-full py-4 text-lg transition-all hover:scale-105 ${
                          plan.variant === 'solid'
                            ? 'bg-conexa-primary text-white hover:bg-blue-700'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-conexa-light-grey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">
            Explore All Modules
          </h2>
          <p className="font-inter text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Learn more about each module's capabilities and benefits.
          </p>
          <Link to="/modules">
            <Button className="bg-conexa-primary hover:bg-blue-700 text-lg px-6 py-4 transition-all hover:scale-105">
              View Modules
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
