import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import ClickSpark from "@/components/ClickSpark";
// import SplashCursor from "@/components/SplashCursor"; // još uvijek onemogućeno
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import {
  Star,
  Play,
  Vote,
  Megaphone,
  MessageCircle,
  Wrench,
  ShoppingBag,
  ClipboardList,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const { t } = useTranslation();
  // State za detekciju širine ekrana
  const [isDesktop, setIsDesktop] = useState(false);
  // State za banner popup
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const updateWidth = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Wrapper za ClickSpark učinak samo na desktopu
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    isDesktop ? (
      <ClickSpark
        sparkColor="#333"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {children}
      </ClickSpark>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <Layout>
        {/* Banner popup na učitavanju */}
        {showBanner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => setShowBanner(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <h1 className="font-poppins font-bold text-3xl text-gray-900 mb-4 text-center">
                {t('index.banner_title')}
              </h1>
              <p className="font-inter text-gray-700 text-center mb-6">
                {t('index.banner_text')}
              </p>
              <div className="text-center">
                <Button
                  onClick={() => setShowBanner(false)}
                  className="bg-conexa-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  {t('index.get_started')}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section s manje vertikalnog razmaka */}
        <section className="relative flex items-center py-8 bg-gradient-to-br from-conexa-light-grey via-white to-blue-50">
          <div className="absolute inset-0" />
          <div className="container mx-auto px-4 z-10">
            <HeroCarousel />
          </div>
        </section>

        {/* Social Proof Banner (manje visine) */}
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex flex-col items-center">
                <a
                  href="https://www.youtube.com/shorts/82Nsgn200iM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 text-conexa-primary hover:text-blue-700 transition-colors"
                >
                  <Play className="w-8 h-8" />
                  <span className="font-poppins font-semibold text-xl md:text-2xl">
                    {t('index.watch_video')}
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=K-08rgQU75U&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-orange-500 hover:text-orange-700 mt-2 transition-colors"
                >
                  <Megaphone className="w-5 h-5" />
                  <span className="font-inter font-medium text-base">
                    {t('index.listen_podcast')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section (smanjeno na py-8) */}
        <section className="py-8 bg-gradient-to-r from-conexa-primary to-blue-600">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="font-poppins font-semibold text-3xl text-white mb-4">
                {t('index.results_title')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-5xl font-poppins font-bold text-white mb-2">
                  85%
                </div>
                <p className="font-inter text-white/90">
                  {t('index.result_participation')}
                </p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-5xl font-poppins font-bold text-white mb-2">
                  60%
                </div>
                <p className="font-inter text-white/90">
                  {t('index.result_faster')}
                </p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-5xl font-poppins font-bold text-white mb-2">
                  90%
                </div>
                <p className="font-inter text-white/90">
                  {t('index.result_satisfaction')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section (py-12 umjesto py-16) */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-poppins font-semibold text-4xl text-gray-900 mb-4">
                  {t('index.features_title')}
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('index.features_subtitle')}
                </p>
              </div>

              {/* Module Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {/* Instant Digital Voting */}
                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <Vote className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t('index.instant_voting')}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t('index.instant_voting_desc')}
                  </p>
                </div>

                {/* Official Announcements */}
                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <Megaphone className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t('index.official_announcements')}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t('index.official_announcements_desc')}
                  </p>
                </div>

                {/* Community Chat */}
                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t('index.community_chat')}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t('index.community_chat_desc')}
                  </p>
                </div>

                {/* Maintenance Requests */}
                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <Wrench className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t('index.maintenance_requests')}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t('index.maintenance_requests_desc')}
                  </p>
                </div>

                {/* Marketplace */}
                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <ShoppingBag className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t('index.marketplace')}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t('index.marketplace_desc')}
                  </p>
                </div>

                {/* Bulletin Board */}
                <Link
                  to="/modules/bulletin-board"
                  className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1 block"
                >
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <ClipboardList className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t('index.bulletin_board')}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t('index.bulletin_board_desc')}
                  </p>
                </Link>
              </div>

              {/* CTA Button */}
              <div className="text-center mb-8">
                <Link to="/modules">
                  <Button
                    variant="outline"
                    className="text-lg px-8 py-6 transition-all hover:scale-105 border-2 hover:border-conexa-primary hover:text-conexa-primary"
                  >
                    {t('index.explore_modules')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section (py-12) */}
        <section className="py-12 bg-gradient-to-br from-conexa-light-grey to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-poppins font-semibold text-4xl text-gray-900 text-center mb-12">
                {t('index.testimonials_title')}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="font-inter text-gray-700 mb-4">
                    "Since we introduced Conexa, community participation has skyrocketed. It's so much easier to get everyone involved in building decisions."
                  </p>
                  <p className="font-poppins font-semibold text-gray-900">
                    Marko K., Building Manager
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="font-inter text-gray-700 mb-4">
                    "I love how quickly we can resolve issues now. Reporting a problem is simple, and the response is always fast and efficient."
                  </p>
                  <p className="font-poppins font-semibold text-gray-900">
                    Ivana N., Resident
                  </p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="font-inter text-gray-700 mb-4">
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

        {/* FAQ Section (py-12) */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-poppins font-semibold text-4xl text-gray-900 text-center mb-12">
                {t('index.faq_title')}
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

        {/* Pricing and CTA (py-8) */}
        <section className="py-8 bg-gradient-to-br from-conexa-primary to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-poppins font-semibold text-4xl text-white mb-6">
                {t('index.ready_title')}
              </h2>
              <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto mb-6">
                {t('index.ready_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-conexa-primary hover:bg-gray-100 text-lg px-8 py-6 transition-all hover:scale-105 font-semibold">
                  {t('index.start_free')}
                </Button>
                <Link to="/pricing">
                  <Button
                    variant="outline"
                    className="text-lg px-8 py-6 transition-all hover:scale-105 border-2 border-white bg-transparent text-white hover:bg-white hover:text-conexa-primary font-semibold"
                  >
                    {t('index.view_pricing')}
                  </Button>
                </Link>
              </div>

              {/* Badževi ispod CTA gumba */}
              <div className="flex justify-center space-x-4 mt-6">
                <span className="bg-white text-conexa-primary font-medium px-4 py-2 rounded-full">
                  {t('index.iso_badge')}
                </span>
                <span className="bg-white text-conexa-primary font-medium px-4 py-2 rounded-full">
                  {t('index.gdpr_badge')}
                </span>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Wrapper>
  );
};

export default Index;
