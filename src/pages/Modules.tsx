import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building, Users, Zap, Shield, Globe, Clock, MessageSquare, 
  HelpCircle, Clipboard, FileText, Brain, Calendar, Camera, 
  Bell, Volume2, Car, MapPin 
} from 'lucide-react';

const Modules = () => {
  const modules = {
    building: [
      {
        id: 'official-notices',
        title: 'Official Notices',
        description: 'Digital voting, announcements, and push alerts for building decisions',
        icon: Building,
        features: ['Digital polls', 'Push notifications', 'Voting history', 'Admin controls']
      },
      {
        id: 'chat-room',
        title: 'Chat Room',
        description: 'Closed group chat with images, reactions, and anonymous view count',
        icon: MessageSquare,
        features: ['Group messaging', 'Image sharing', 'Message reactions', 'Anonymous viewing']
      },
      {
        id: 'quiz',
        title: 'Quiz',
        description: 'Daily trivia with instant explanations and building leaderboard',
        icon: HelpCircle,
        features: ['Daily questions', 'Instant feedback', 'Leaderboards', 'Community engagement']
      },
      {
        id: 'bulletin-board',
        title: 'Bulletin Board',
        description: 'Internal vs public ads with geo-radius and micro-payments',
        icon: Clipboard,
        features: ['Internal/public ads', 'Geo-targeting', 'Payment integration', 'Ad management']
      },
      {
        id: 'documents',
        title: 'Documents',
        description: 'Secure PDF/DOCX repository with version history and search',
        icon: FileText,
        features: ['Secure storage', 'Version control', 'Search function', 'Access permissions']
      },
      {
        id: 'wise-owl',
        title: 'Wise Owl',
        description: 'Micro-learning hub starting with daily proverbs, expanding to full courses',
        icon: Brain,
        features: ['Daily content', 'Learning paths', 'Progress tracking', 'Community wisdom']
      },
      {
        id: 'shared-tasks',
        title: 'Shared Tasks',
        description: 'Automatic rota for cleaning, snow shovelling with easy swaps',
        icon: Calendar,
        features: ['Auto scheduling', 'Task swapping', 'Push reminders', 'Completion tracking']
      },
      {
        id: 'security',
        title: 'Security',
        description: 'Live camera feeds consolidated in one dashboard',
        icon: Camera,
        features: ['Live feeds', 'Multi-camera view', 'Recording access', 'Security alerts']
      },
      {
        id: 'alarm',
        title: 'Alarm',
        description: 'One-tap audio/video alert to every neighbour for emergencies',
        icon: Bell,
        features: ['Emergency alerts', 'Audio/video alerts', 'Instant broadcast', 'Emergency contacts']
      },
      {
        id: 'noise-alerts',
        title: 'Noise Alerts',
        description: 'Schedule noisy works with optional 4-hour advance reminders',
        icon: Volume2,
        features: ['Work scheduling', 'Advance warnings', 'Noise tracking', 'Neighbour courtesy']
      }
    ],
    community: [
      {
        id: 'marketplace',
        title: 'Marketplace',
        description: 'Geo-targeted offers & events with 15-day auto-expire, free NGO slots',
        icon: Globe,
        features: ['Local offers', 'Event listings', 'Auto-expiry', 'NGO support']
      },
      {
        id: 'home-repairs',
        title: 'Home Repairs',
        description: 'Photo fault reporting with time-slot picker and verified techs',
        icon: Zap,
        features: ['Photo reporting', 'Verified technicians', 'Time booking', 'Service ratings']
      },
      {
        id: 'parking-sharing',
        title: 'Parking Sharing',
        description: 'Peer-to-peer parking spot requests and approvals',
        icon: Car,
        features: ['Spot sharing', 'Request system', 'Approval workflow', 'Usage tracking']
      },
      {
        id: 'shared-rides',
        title: 'Shared Rides',
        description: 'Real-time map with offers, active rides, history, and ratings',
        icon: MapPin,
        features: ['Real-time tracking', 'Ride offers', 'Rating system', 'Route optimization']
      },
      {
        id: 'local-posts',
        title: 'Local Posts',
        description: 'Geo-fenced social posts with three visibility levels and anonymity',
        icon: Users,
        features: ['Geo-fencing', 'Visibility controls', 'Anonymous posting', 'Local engagement']
      }
    ],
    special: [
      {
        id: 'business-networking',
        title: 'Business Networking',
        description: 'Connect with local entrepreneurs and business owners (Coming 2025)',
        icon: Building,
        features: ['Professional networking', 'Business directory', 'Collaboration tools', 'Event hosting'],
        comingSoon: true
      },
      {
        id: 'conference-rooms',
        title: 'Conference Rooms',
        description: 'Book shared spaces for meetings and events (Coming 2026)',
        icon: Users,
        features: ['Space booking', 'Calendar integration', 'Equipment management', 'Usage analytics'],
        comingSoon: true
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            Choose Your Modules
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Activate only what your building needs. Start with essentials, add more features as your community grows.
          </p>
        </div>
      </section>

      {/* Modules Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="building" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-16 bg-gray-50 p-2 rounded-2xl shadow-sm border border-gray-200 h-16">
              <TabsTrigger 
                value="building" 
                className="text-lg py-4 px-6 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-conexa-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-gray-100"
              >
                <Building className="w-5 h-5 mr-2" />
                Building
              </TabsTrigger>
              <TabsTrigger 
                value="community" 
                className="text-lg py-4 px-6 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-conexa-accent data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-gray-100"
              >
                <Users className="w-5 h-5 mr-2" />
                Community
              </TabsTrigger>
              <TabsTrigger 
                value="special" 
                className="text-lg py-4 px-6 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-gray-100"
              >
                <Zap className="w-5 h-5 mr-2" />
                Special
              </TabsTrigger>
            </TabsList>

            <TabsContent value="building">
              <div className="mb-8">
                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">Building Modules</h2>
                <p className="font-inter text-gray-600">Internal building management and resident communication tools.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.building.map((module) => {
                  const IconComponent = module.icon;
                  return (
                    <Link key={module.id} to={`/modules/${module.id}`}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="p-3 rounded-lg bg-blue-100 text-conexa-primary">
                              <IconComponent size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2 group-hover:text-conexa-primary transition-colors">
                                {module.title}
                              </h3>
                              <p className="font-inter text-gray-600 text-sm mb-4">
                                {module.description}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-1">
                            {module.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-500">
                                <div className="w-1.5 h-1.5 bg-conexa-primary rounded-full mr-2"></div>
                                {feature}
                              </div>
                            ))}
                            {module.features.length > 3 && (
                              <div className="text-sm text-gray-400">
                                +{module.features.length - 3} more features
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="community">
              <div className="mb-8">
                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">Community Modules</h2>
                <p className="font-inter text-gray-600">Connect with your local neighbourhood and surrounding community.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.community.map((module) => {
                  const IconComponent = module.icon;
                  return (
                    <Link key={module.id} to={`/modules/${module.id}`}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="p-3 rounded-lg bg-green-100 text-conexa-accent">
                              <IconComponent size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2 group-hover:text-conexa-accent transition-colors">
                                {module.title}
                              </h3>
                              <p className="font-inter text-gray-600 text-sm mb-4">
                                {module.description}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-1">
                            {module.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-500">
                                <div className="w-1.5 h-1.5 bg-conexa-accent rounded-full mr-2"></div>
                                {feature}
                              </div>
                            ))}
                            {module.features.length > 3 && (
                              <div className="text-sm text-gray-400">
                                +{module.features.length - 3} more features
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="special">
              <div className="mb-8">
                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">Special Modules</h2>
                <p className="font-inter text-gray-600">Advanced features for professional networking and enhanced community engagement.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modules.special.map((module) => {
                  const IconComponent = module.icon;
                  return (
                    <Card key={module.id} className="relative h-full opacity-75">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                            <IconComponent size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h3 className="font-poppins font-semibold text-lg text-gray-900 mr-2">
                                {module.title}
                              </h3>
                              <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                                Coming Soon
                              </span>
                            </div>
                            <p className="font-inter text-gray-600 text-sm mb-4">
                              {module.description}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          {module.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-500">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-conexa-light-grey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-inter text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start with our free plan and activate modules as your community grows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button className="bg-conexa-primary hover:bg-blue-700 text-lg px-8 py-6 transition-all hover:scale-105">
                View Pricing
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-lg px-8 py-6 transition-all hover:scale-105">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Modules;