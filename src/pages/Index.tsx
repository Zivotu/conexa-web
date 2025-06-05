import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
// SplashCursor adds a trailing cursor effect to the homepage.
// It has been temporarily disabled to remove the cursor trail.
// import SplashCursor from "@/components/SplashCursor";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  Vote,
  Megaphone,
  MessageCircle,
  Wrench,
  ShoppingBag,
  ClipboardList,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <Layout>
      {/* <SplashCursor />  // Removed cursor trail for now */}
      {/* Hero Section with Carousel */}
      <section className="py-24 bg-gradient-to-br from-conexa-light-grey via-white to-blue-50">
        <div className="container mx-auto px-4">
          <HeroCarousel />
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-inter text-gray-600 mb-4">
              Trusted by 300+ buildings across Croatia, Slovenia, and Bosnia & Herzegovina
            </p>
            <div className="flex justify-center items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 font-inter text-gray-600">
                4.8/5 from 1,200+ residents
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-r from-conexa-primary to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-poppins font-semibold text-3xl text-white mb-4">
              Real Results After Only 3 Months
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-5xl font-poppins font-bold text-white mb-2">
                85%
              </div>
              <p className="font-inter text-white/90">
                More community participation
              </p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-5xl font-poppins font-bold text-white mb-2">
                60%
              </div>
              <p className="font-inter text-white/90">
                Faster issue resolution
              </p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-5xl font-poppins font-bold text-white mb-2">
                90%
              </div>
              <p className="font-inter text-white/90">
                Resident satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-semibold text-4xl text-gray-900 mb-4">
                Everything Your Building Needs
              </h2>
              <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                All the essential modules to streamline communication, boost community engagement, and simplify building management.
              </p>
            </div>

            {/* Module Grid - 2x3 layout with enhanced styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Instant Digital Voting */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 mb-6 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                  <Vote className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                  Instant Digital Voting
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Transform building decisions with secure digital polls and instant notifications.
                </p>
              </div>

              {/* Official Announcements */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 mb-6 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                  <Megaphone className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                  Official Announcements
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Keep everyone informed with push notifications and digital notice board.
                </p>
              </div>

              {/* Community Chat */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 mb-6 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                  Community Chat
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Private group chat for building residents to connect and share instantly.
                </p>
              </div>

              {/* Maintenance Requests */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 mb-6 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                  <Wrench className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                  Maintenance Requests
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Report issues with photos and connect with verified local technicians.
                </p>
              </div>

              {/* Marketplace */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 mb-6 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                  <ShoppingBag className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                  Marketplace
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Discover local offers and events in your neighborhood with geo-targeting.
                </p>
              </div>

              {/* Bulletin Board */}
              <Link
                to="/modules/bulletin-board"
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-2 block"
              >
                <div className="w-12 h-12 mb-6 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                  <ClipboardList className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                  Bulletin Board
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  A smarter way to share what matters with local advertising and community posts.
                </p>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link to="/modules">
                <Button variant="outline" className="text-lg px-8 py-6 transition-all hover:scale-105 border-2 hover:border-conexa-primary hover:text-conexa-primary">
                  Explore All Modules
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-conexa-light-grey to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins font-semibold text-4xl text-gray-900 text-center mb-16">
              What Residents Are Saying
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="font-inter text-gray-700 mb-6">
                  "Since we introduced Conexa, community participation has skyrocketed. It's so much easier to get everyone involved in building decisions."
                </p>
                <p className="font-poppins font-semibold text-gray-900">
                  Marko K., Building Manager
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="font-inter text-gray-700 mb-6">
                  "I love how quickly we can resolve issues now. Reporting a problem is simple, and the response is always fast and efficient."
                </p>
                <p className="font-poppins font-semibold text-gray-900">
                  Ivana N., Resident
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="font-inter text-gray-700 mb-6">
                  "The community chat has been a game-changer. I feel more connected to my neighbors, and it's great for sharing information."
                </p>
                <p className="font-poppins font-semibold text-gray-900">
                  Tomislav B., Resident
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-semibold text-4xl text-gray-900 text-center mb-16">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-poppins font-medium text-left">
                  What is Conexa and what does it offer?
                </AccordionTrigger>
                <AccordionContent className="font-inter text-gray-600">
                  Conexa is a comprehensive building management app designed to
                  streamline communication, boost community engagement, and
                  simplify building management. It offers modules for digital
                  voting, announcements, community chat, maintenance requests,
                  marketplace, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-poppins font-medium text-left">
                  How does Conexa improve community engagement?
                </AccordionTrigger>
                <AccordionContent className="font-inter text-gray-600">
                  Conexa improves community engagement through features like
                  community chat, digital voting, and a marketplace for local
                  offers and events. These tools make it easier for residents
                  to connect, share information, and participate in building
                  decisions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-poppins font-medium text-left">
                  Is Conexa easy to implement and use?
                </AccordionTrigger>
                <AccordionContent className="font-inter text-gray-600">
                  Yes, Conexa is designed to be user-friendly and easy to
                  implement. The app has an intuitive interface, and the
                  modules are straightforward to use. We also provide support
                  and resources to help building managers and residents get
                  started.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-poppins font-medium text-left">
                  What kind of support do you offer to new users?
                </AccordionTrigger>
                <AccordionContent className="font-inter text-gray-600">
                  We offer comprehensive support to new users, including
                  onboarding assistance, tutorials, and responsive customer
                  service. Our team is available to answer questions and
                  provide guidance to ensure a smooth experience with Conexa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="font-poppins font-medium text-left">
                  How can Conexa help with building management?
                </AccordionTrigger>
                <AccordionContent className="font-inter text-gray-600">
                  Conexa simplifies building management by providing tools for
                  digital voting, official announcements, maintenance requests,
                  and more. These features help streamline communication,
                  improve efficiency, and reduce administrative overhead.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pricing and CTA */}
      <section className="py-16 bg-gradient-to-br from-conexa-primary to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-semibold text-4xl text-white mb-6">
              Ready to Transform Your Building?
            </h2>
            <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Start using Conexa today and experience the benefits of
              streamlined communication, boosted community engagement, and
              simplified building management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-conexa-primary hover:bg-gray-100 text-lg px-8 py-6 transition-all hover:scale-105 font-semibold">
                Start Free Today
              </Button>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  className="text-lg px-8 py-6 transition-all hover:scale-105 border-2 border-white bg-transparent text-white hover:bg-white hover:text-conexa-primary font-semibold"
                >
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

export default Index;