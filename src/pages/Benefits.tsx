import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Zap, Users, Settings, MapPin, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Eye,
      title: 'Transparency',
      subtitle: 'No hidden decisions',
      description: 'Every building decision is visible to all residents. Vote on important matters, see results in real-time, and ensure your voice is heard in community choices.',
      features: [
        'Open voting on all building matters',
        'Real-time result tracking',
        'Decision history accessible to all',
        'No backroom dealing or secret decisions'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: 'Simplicity',
      subtitle: 'All in one place',
      description: 'Replace scattered WhatsApp groups, email chains, and paper notices with one unified platform that handles all your building communication and management needs.',
      features: [
        'Single app for all building needs',
        'Intuitive user interface',
        'No need to manage multiple platforms',
        'Easy onboarding for all residents'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Community',
      subtitle: 'Dialogue, not conflict',
      description: 'Foster positive relationships among neighbours through structured communication, shared activities, and collaborative problem-solving tools.',
      features: [
        'Respectful communication channels',
        'Conflict resolution tools',
        'Community event organization',
        'Neighbour assistance network'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: Settings,
      title: 'Flexibility',
      subtitle: 'Activate only what you need',
      description: 'Start with basic features and add modules as your community grows. Every building is different, so customize Conexa to match your specific needs.',
      features: [
        'Modular feature activation',
        'Scalable from basic to advanced',
        'Custom permission settings',
        'Adaptable to building size'
      ],
      color: 'bg-orange-500'
    },
    {
      icon: MapPin,
      title: 'Local Relevance',
      subtitle: 'Geo-filtered info & offers',
      description: 'Get information and offers that actually matter to your location. No more irrelevant notifications - everything is tailored to your neighbourhood.',
      features: [
        'Location-based content filtering',
        'Neighbourhood-specific offers',
        'Local service recommendations',
        'Geo-targeted event notifications'
      ],
      color: 'bg-red-500'
    },
    {
      icon: Clock,
      title: 'Time-Saver',
      subtitle: 'Fewer meetings, faster fixes',
      description: 'Reduce time spent on building administration. Digital voting, automated task scheduling, and instant communication mean faster decisions and solutions.',
      features: [
        'Digital voting eliminates meetings',
        'Automated task assignments',
        'Instant issue reporting',
        'Quick decision turnaround'
      ],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            Why Residents Love Conexa
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Six core benefits that transform apartment living from isolated to connected, from chaotic to organized, from stressful to simple.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-6">
                        <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="font-inter text-conexa-primary font-medium mb-4">
                            {benefit.subtitle}
                          </p>
                          <p className="font-inter text-gray-600 mb-6">
                            {benefit.description}
                          </p>
                          <ul className="space-y-2">
                            {benefit.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
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

      {/* Impact Statistics */}
      <section className="py-20 bg-conexa-light-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-12">
              The Conexa Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-conexa-primary mb-2">85%</div>
                <p className="font-inter text-gray-600">Increase in resident participation</p>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-conexa-accent mb-2">60%</div>
                <p className="font-inter text-gray-600">Reduction in building meetings</p>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-conexa-primary mb-2">3x</div>
                <p className="font-inter text-gray-600">Faster issue resolution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 text-center mb-12">
              Transform Your Building Experience
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-red-100 bg-red-50">
                <CardContent className="p-0">
                  <h3 className="font-poppins font-semibold text-2xl text-red-700 mb-6">
                    Before Conexa
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-gray-700">Important notices lost or delayed</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-gray-700">Decisions made by small groups</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-gray-700">Multiple communication channels</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-gray-700">Lengthy meetings for simple issues</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-gray-700">Neighbour conflicts and misunderstandings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8 border-2 border-green-100 bg-green-50">
                <CardContent className="p-0">
                  <h3 className="font-poppins font-semibold text-2xl text-green-700 mb-6">
                    With Conexa
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-gray-700">Instant push notifications for all residents</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-gray-700">Democratic voting on all building matters</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-gray-700">Single platform for all communication</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-gray-700">Digital voting eliminates most meetings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-gray-700">Structured dialogue and community building</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-conexa-primary to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-semibold text-3xl text-white mb-4">
            Experience These Benefits Today
          </h2>
          <p className="font-inter text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of residents who have already transformed their building communities with Conexa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-conexa-primary hover:bg-gray-100 font-inter font-medium text-lg px-8 py-6 rounded-lg transition-all hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-conexa-primary font-inter font-medium text-lg px-8 py-6 rounded-lg transition-all hover:scale-105">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Benefits;