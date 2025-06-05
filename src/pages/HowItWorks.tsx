import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { Download, Building, Users, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Download App',
      description: 'Get Conexa from your app store. Available for iOS and Android.',
      icon: Download,
      color: 'bg-blue-500'
    },
    {
      number: 2,
      title: 'Create Virtual Building',
      description: 'Set up your apartment building with basic details and invite verification.',
      icon: Building,
      color: 'bg-green-500'
    },
    {
      number: 3,
      title: 'Invite Neighbours',
      description: 'Share the building code with residents. They join instantly with verification.',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      number: 4,
      title: 'Activate Modules',
      description: 'Choose which features your building needs. Start with essentials, add more later.',
      icon: Zap,
      color: 'bg-orange-500'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            How Conexa Works
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your building community in four simple steps. From download to full engagement in minutes, not months.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.number} className="text-center">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="relative">
                      <span className="absolute -top-8 -right-2 text-6xl font-bold text-gray-100 font-poppins">
                        {step.number}
                      </span>
                      <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4 relative z-10">
                        {step.title}
                      </h3>
                      <p className="font-inter text-gray-600">
                        {step.description}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-full w-8">
                        <div className="w-full h-0.5 bg-gray-200 relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-20 bg-conexa-light-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 text-center mb-12">
              The Complete Setup Process
            </h2>
            
            <div className="space-y-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">
                        Step 1: Download & Register
                      </h3>
                      <ul className="font-inter text-gray-600 space-y-2">
                        <li>• Download from App Store or Google Play</li>
                        <li>• Create account with email verification</li>
                        <li>• Set up basic profile (name, apartment number)</li>
                        <li>• Enable push notifications for building updates</li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="/assets/app-screen-1.png" 
                        alt="App download screen"
                        className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:order-2">
                      <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">
                        Step 2: Building Setup
                      </h3>
                      <ul className="font-inter text-gray-600 space-y-2">
                        <li>• Enter building address and basic details</li>
                        <li>• Upload building photo (optional)</li>
                        <li>• Define apartment numbering system</li>
                        <li>• Set building admin permissions</li>
                        <li>• Generate unique building invite code</li>
                      </ul>
                    </div>
                    <div className="lg:order-1">
                      <img 
                        src="/assets/app-screen-2.png" 
                        alt="Building setup screen"
                        className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">
                        Step 3: Invite Residents
                      </h3>
                      <ul className="font-inter text-gray-600 space-y-2">
                        <li>• Share building code via WhatsApp, email, or QR code</li>
                        <li>• Residents join with apartment verification</li>
                        <li>• Building admin approves new members</li>
                        <li>• Set resident roles and permissions</li>
                        <li>• Send welcome message with basic guidelines</li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="/assets/app-screen-3.png" 
                        alt="Resident invitation screen"
                        className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:order-2">
                      <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">
                        Step 4: Module Activation
                      </h3>
                      <ul className="font-inter text-gray-600 space-y-2">
                        <li>• Choose from 15+ available modules</li>
                        <li>• Start with essentials: Notices, Chat, Documents</li>
                        <li>• Add community features: Marketplace, Repairs</li>
                        <li>• Configure module settings and permissions</li>
                        <li>• Begin engaging with your community</li>
                      </ul>
                    </div>
                    <div className="lg:order-1">
                      <img 
                        src="/assets/app-screen-4.png" 
                        alt="Module selection screen"
                        className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-8">
              Watch the Complete Setup
            </h2>
            <YouTubeEmbed 
              videoId="82Nsgn200iM"
              caption="Complete walkthrough of the setup process"
              className="shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-conexa-light-grey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="font-inter text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Check our comprehensive FAQ or get in touch with our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/faq" className="inline-block">
              <div className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-8 py-4 transition-all hover:scale-105">
                <span className="font-inter font-medium text-gray-900">View FAQ</span>
              </div>
            </a>
            <a href="/contact" className="inline-block">
              <div className="bg-conexa-primary hover:bg-blue-700 text-white rounded-lg px-8 py-4 transition-all hover:scale-105">
                <span className="font-inter font-medium">Contact Support</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;