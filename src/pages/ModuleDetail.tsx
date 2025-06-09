import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Star, Play } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ModuleDetail = () => {
  const { id } = useParams();

  // Module data - in a real app this would come from an API
  const moduleData: { [key: string]: any } = {
    'bulletin-board': {
      title: 'Bulletin Board',
      category: 'Community',
      description: 'A smarter way to share what matters. Everything you need for local advertising – simple, clear, and tailored to your community.',
      subtitle: 'The Bulletin Board module in the Conexa app allows you to quickly and efficiently post ads within your building or the wider community. Whether it\'s internal notices or public ads targeting the area around your building, this module ensures all information is organized in one place.',
      quote: "With the bulletin board, all announcements and promotions in our building are always available – you'll never miss an important notice or neighborhood offer again!",
      author: "Building Administrator",
      youtubeVideoId: "CDbcFkAno14",
      features: [
        'Two types of ads: Internal (building members only) and All Ads (wider community)',
        'Geolocation integration with radius filtering (1km, 5km, 15km)',
        'Multimedia support with camera and gallery image uploads',
        'Interactive features: like, dislike, comment, share, and download',
        'Premium pricing options for public ads based on radius',
        'Lazy loading for optimal performance while scrolling',
        'Administration controls for ad management',
        'Cloud-based image storage and automatic uploads',
        'Automatic building location detection',
        'Integrated payment system for premium features'
      ],
      benefits: [
        'Never miss important building notices or neighborhood offers',
        'Reach the right audience with targeted ad types',
        'Cost-effective local advertising with radius-based pricing',
        'Enhanced visual appeal with multimedia support',
        'Streamlined community communication',
        'Performance-optimized browsing experience',
        'Secure administration and content management'
      ],
      useCases: [
        'Building maintenance announcements',
        'Local business promotions',
        'Community event advertising',
        'Neighborhood services and offers',
        'Lost and found postings',
        'Garage sale notifications'
      ],
      pricing: 'Available in Free Tenant plan (Premium features from $5-$15 based on radius)',
      screenshots: ['/assets/module-bulletin-1.png', '/assets/module-bulletin-2.png', '/assets/module-bulletin-3.png'],
      faq: [
        {
          question: "What is the Bulletin Board?",
          answer: "The Bulletin Board is a module for creating and browsing ads within your virtual building or the wider community, depending on the selected ad type."
        },
        {
          question: "What types of ads are supported?",
          answer: "There are two supported ad types: Internal Ad (intended only for your building's members) and All Ads (targeted at the wider community, filtered by radius based on the building's location)."
        },
        {
          question: "How is the price for public ads determined?",
          answer: "Public ads may have an additional cost based on the selected radius (e.g., $5 for 5 km, $15 for 15 km). The amount is automatically deducted from the user's balance upon ad creation."
        },
        {
          question: "Who has permission to edit or delete ads?",
          answer: "Only the ad creator or the location administrator can edit or delete ads."
        },
        {
          question: "Can I add images to an ad?",
          answer: "Yes, you can add images using your camera or gallery when creating the ad. If no image is added, a default ad image will be used."
        },
        {
          question: "How are ads displayed?",
          answer: "Ads are shown in a list format, sorted by creation date. The system supports lazy loading to allow fast browsing of many ads."
        },
        {
          question: "Can users comment or react to ads?",
          answer: "Yes, users can like, dislike, comment, share ads, and download them as text files."
        }
      ]
    },
    'official-notices': {
      title: 'Official Notices',
      category: 'Building',
      description: 'Transform building management with digital voting, announcements, and instant push alerts. No more lost paper notices or decisions made by just a few residents.',
      quote: "Finally, decisions aren't made by just five people – everyone can vote, even while travelling.",
      author: "Maria Kovač, Building Resident",
      features: [
        'Digital polling with secure voting',
        'Push notifications for urgent announcements',
        'Voting history and results tracking',
        'Admin controls for notice management',
        'Deadline reminders for voting',
        'Anonymous voting options',
        'PDF export of results'
      ],
      benefits: [
        'Increase participation in building decisions',
        'Transparent voting process',
        'Save time on paper distribution',
        'Ensure all residents are informed',
        'Create digital record of decisions'
      ],
      useCases: [
        'Building renovation decisions',
        'Budget approvals',
        'Rule changes and updates',
        'Maintenance scheduling votes',
        'Community event planning'
      ],
      pricing: 'Included in Virtual Building plan ($9/month)',
      screenshots: ['/assets/module-notices-1.png', '/assets/module-notices-2.png', '/assets/module-notices-3.png']
    },
    'chat-room': {
      title: 'Chat Room',
      category: 'Building',
      description: 'Secure group chat exclusively for your building residents. Share images, react to messages, and build community connections in a private, verified environment.',
      quote: "I asked for jumper cables and a neighbour helped in ten minutes. This chat room actually brings us together.",
      author: "Tomislav Novak, Community Member",
      features: [
        'Closed group messaging',
        'Image and file sharing',
        'Message reactions and replies',
        'Anonymous view count',
        'Message search functionality',
        'Pinned important messages',
        'Offline message sync',
        'Push notifications'
      ],
      benefits: [
        'Build stronger community bonds',
        'Quick neighbour assistance',
        'Coordinate shared activities',
        'Emergency communication channel',
        'Reduce isolation among residents'
      ],
      useCases: [
        'Requesting help from neighbours',
        'Coordinating building events',
        'Sharing local information',
        'Lost and found items',
        'Emergency communications'
      ],
      pricing: 'Included in Virtual Building plan ($9/month)',
      screenshots: ['/assets/module-chat-1.png', '/assets/module-chat-2.png', '/assets/module-chat-3.png']
    },
    'marketplace': {
      title: 'Marketplace',
      category: 'Community',
      description: 'Discover local offers, events, and services in your neighbourhood. Geo-targeted listings with automatic expiry and free slots for NGOs and community organizations.',
      features: [
        'Geo-targeted local offers',
        'Event listings and promotion',
        '15-day auto-expiry for listings',
        'Free slots for NGO organizations',
        'Photo galleries for listings',
        'Contact integration',
        'Category filtering',
        'Price comparison tools'
      ],
      benefits: [
        'Support local businesses',
        'Discover neighbourhood events',
        'Find local services easily',
        'Strengthen community economy',
        'Reduce travel for shopping'
      ],
      useCases: [
        'Local restaurant promotions',
        'Community yard sales',
        'Neighbourhood events',
        'Local service recommendations',
        'NGO fundraising events'
      ],
      pricing: 'Available in Free Tenant plan',
      screenshots: ['/assets/module-marketplace-1.png', '/assets/module-marketplace-2.png', '/assets/module-marketplace-3.png']
    },
    'home-repairs': {
      title: 'Home Repairs',
      category: 'Community',
      description: 'Report issues with photos, book time slots, and connect with verified local technicians. Streamline maintenance and repairs with trusted professionals.',
      features: [
        'Photo-based issue reporting',
        'Time slot booking system',
        'Verified technician network',
        'Service rating and reviews',
        'Cost estimates',
        'Progress tracking',
        'Emergency repair requests',
        'Payment integration'
      ],
      benefits: [
        'Quick issue resolution',
        'Trusted service providers',
        'Competitive pricing',
        'Quality assurance',
        'Convenient scheduling'
      ],
      useCases: [
        'Plumbing emergencies',
        'Electrical repairs',
        'Appliance maintenance',
        'Home improvements',
        'Regular inspections'
      ],
      pricing: 'Available in Free Tenant plan',
      screenshots: ['/assets/module-repairs-1.png', '/assets/module-repairs-2.png', '/assets/module-repairs-3.png']
    }
  };

  const module = moduleData[id || ''] || {
    title: 'Module Not Found',
    category: 'Unknown',
    description: 'This module is not available or the link is incorrect.',
    features: [],
    benefits: [],
    useCases: [],
    pricing: 'N/A',
    screenshots: []
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-conexa-light-grey py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link to="/modules" className="text-conexa-primary hover:text-blue-700 flex items-center">
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <span className={`text-xs font-inter font-medium px-3 py-1 rounded-full ${
                  module.category === 'Building'
                    ? 'bg-blue-100 text-conexa-primary'
                    : 'bg-green-100 text-conexa-accent'
                }`}>
                  {module.category} Module
                </span>
              </div>
              <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
                {module.title}
              </h1>
              <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                {module.description}
              </p>
              {module.subtitle && (
                <p className="font-inter text-lg text-gray-500 max-w-3xl mx-auto">
                  {module.subtitle}
                </p>
              )}
            </div>

            {/* Podcast Section */}
            {module.youtubeVideoId && (
              <div className="mb-12">
                <div className="text-center mb-8">
                  <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">
                    Listen to a podcast snippet about the Bulletin Board module
                  </h2>
                </div>
                <YouTubeEmbed 
                  videoId={module.youtubeVideoId}
                  title={`${module.title} Podcast Snippet`}
                  className="max-w-3xl mx-auto"
                />
              </div>
            )}

            {/* Testimonial */}
            {module.quote && (
              <Card className="p-8 text-center mb-12 bg-gray-50">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="font-inter text-xl text-gray-700 mb-6">
                    "{module.quote}"
                  </blockquote>
                  <p className="font-poppins font-semibold text-gray-900">
                    {module.author}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {module.screenshots.length > 0 && (
        <section className="py-20 bg-conexa-light-grey">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-poppins font-semibold text-3xl text-gray-900 text-center mb-12">
                See It in Action
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {module.screenshots.map((screenshot: string, index: number) => (
                  <div key={index} className="text-center">
                    <img 
                      src={screenshot}
                      alt={`${module.title} screenshot ${index + 1}`}
                      className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features and Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-8">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {module.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-conexa-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-inter text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-8">
                  Benefits
                </h2>
                <div className="space-y-4">
                  {module.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-conexa-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-inter text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-conexa-light-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 text-center mb-12">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {module.useCases.map((useCase: string, index: number) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0 text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-poppins font-semibold text-gray-600">{index + 1}</span>
                    </div>
                    <p className="font-inter text-gray-700">{useCase}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {module.faq && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-poppins font-semibold text-3xl text-gray-900 text-center mb-12">
                FAQ – {module.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {module.faq.map((item: any, index: number) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="font-poppins font-medium text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-inter text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Pricing and CTA */}
      <section className="py-20 bg-conexa-light-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-4">
              Get Started with {module.title}
            </h2>
            <p className="font-inter text-xl text-gray-600 mb-8">
              Pricing: <span className="font-semibold text-conexa-primary">{module.pricing}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-conexa-primary hover:bg-blue-700 text-lg px-8 py-6 transition-all hover:scale-105">
                Start Free Today
              </Button>
              <Link to="/pricing">
                <Button variant="outline" className="text-lg px-8 py-6 transition-all hover:scale-105">
                  View All Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ModuleDetail;