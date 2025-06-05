import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const BlogPost = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-conexa-light-grey py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link to="/blog" className="text-conexa-primary hover:text-blue-700 flex items-center">
              <ArrowLeft size={16} className="mr-1" />
              Blog
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Pilot: Building #12, Zagreb</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-green-100 text-green-700 text-sm font-inter font-medium px-3 py-1 rounded-full">
                Case Study
              </span>
              <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mt-6 mb-6">
                Pilot: Building #12, Zagreb
              </h1>
              <p className="font-inter text-xl text-gray-600 mb-8">
                How a 48-apartment building in Zagreb transformed their community management in just 30 days with Conexa.
              </p>
              
              <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  March 15, 2024
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  5 min read
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  Conexa Team
                </div>
              </div>
            </div>

            <img 
              src="/assets/blog-zagreb-building.jpg"
              alt="Zagreb Building #12"
              className="w-full rounded-lg shadow-lg mb-12"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">The Challenge</h2>
            <p className="font-inter text-gray-600 mb-6">
              Building #12 in Zagreb's Trešnjevka district was facing typical apartment building challenges: 
              low resident participation in building decisions, scattered communication across multiple WhatsApp 
              groups, and a general disconnect between neighbors despite sharing the same roof.
            </p>
            <p className="font-inter text-gray-600 mb-8">
              Building administrator Marko Petrović was spending hours each week printing notices, collecting 
              signatures, and chasing residents for simple yes/no decisions. "It was exhausting," he recalls. 
              "Important decisions were being made by the same 5-6 people because others simply weren't informed or engaged."
            </p>

            <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">Implementation</h2>
            <p className="font-inter text-gray-600 mb-6">
              In February 2024, Marko discovered Conexa and decided to pilot it with Building #12. The setup process took just one afternoon:
            </p>
            <ul className="font-inter text-gray-600 mb-6 space-y-2">
              <li>• Created the building profile with apartment listings</li>
              <li>• Invited residents via QR codes posted in the lobby</li>
              <li>• Activated Official Notices, Chat Room, and Documents modules</li>
              <li>• Posted the first digital poll about lobby renovation</li>
            </ul>
            <p className="font-inter text-gray-600 mb-8">
              "Within 48 hours, we had 32 out of 48 apartments registered. The first poll got more participation 
              than we'd seen in years," Marko notes.
            </p>

            <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-poppins font-bold text-conexa-primary mb-2">89%</div>
                  <p className="font-inter text-gray-600">Resident participation in voting</p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-poppins font-bold text-conexa-accent mb-2">72h</div>
                  <p className="font-inter text-gray-600">Average decision time</p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-poppins font-bold text-purple-600 mb-2">45</div>
                  <p className="font-inter text-gray-600">Active chat participants</p>
                </CardContent>
              </Card>
            </div>

            <p className="font-inter text-gray-600 mb-8">
              After 30 days, the transformation was remarkable. Voting participation jumped from 15% to 89%. 
              Decisions that previously took weeks now took days. Most importantly, residents began connecting 
              with each other through the chat room, leading to spontaneous neighborhood help and social activities.
            </p>

            <Card className="p-6 bg-blue-50 border-l-4 border-conexa-primary mb-8">
              <CardContent className="p-0">
                <blockquote className="font-inter text-lg text-gray-700 italic">
                  "For the first time in 10 years, I actually know my neighbors' names. When my car wouldn't 
                  start last week, I posted in the chat and had three people offering help within minutes. 
                  Conexa didn't just change how we manage our building – it created a real community."
                </blockquote>
                <p className="font-inter text-gray-600 mt-4">
                  — Ana Marković, Apartment 3B
                </p>
              </CardContent>
            </Card>

            <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">Next Steps</h2>
            <p className="font-inter text-gray-600 mb-6">
              Building on their success, Building #12 plans to activate additional modules in 2024:
            </p>
            <ul className="font-inter text-gray-600 mb-8 space-y-2">
              <li>• <strong>Shared Tasks</strong> for cleaning and maintenance rotation</li>
              <li>• <strong>Marketplace</strong> to promote local businesses</li>
              <li>• <strong>Security</strong> module for the new camera system</li>
            </ul>

            <p className="font-inter text-gray-600 mb-8">
              Marko has also become a Conexa advocate, helping three neighboring buildings set up their own communities. 
              "The ripple effect is amazing," he says. "Strong buildings create strong neighborhoods."
            </p>

            <Card className="p-6 bg-green-50 border border-green-200">
              <CardContent className="p-0">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">
                  Want similar results for your building?
                </h3>
                <p className="font-inter text-gray-600 mb-4">
                  Start your 7-day free trial today and see how Conexa can transform your community.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-conexa-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-inter font-medium transition-all hover:scale-105">
                    Start Free Trial
                  </button>
                  <Link to="/contact">
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-inter font-medium transition-all hover:scale-105">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;