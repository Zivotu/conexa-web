import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Conexa?",
      answer: "Conexa is a mobile-first platform that transforms everyday life in apartment buildings and their surrounding neighbourhoods. It provides tools for building management, resident communication, and community engagement all in one app."
    },
    {
      question: "Who can use Conexa?",
      answer: "Anyone living in an apartment building can use Conexa. Individual residents can use the free plan to access local marketplace and repair services. Buildings can upgrade to get full management features for all residents."
    },
    {
      question: "Can I manage multiple buildings?",
      answer: "Yes! Building administrators can manage multiple properties from one account. Each building has its own community, modules, and settings while sharing the same admin dashboard."
    },
    {
      question: "Is Conexa really free?",
      answer: "Yes, the Free Tenant plan is completely free forever and includes access to Marketplace and Home Repairs. Building plans start at $9/month with a 7-day free trial that requires no credit card."
    },
    {
      question: "Who creates a building on Conexa?",
      answer: "Any resident can create a building profile, but typically it's done by building administrators, property managers, or active community members. The person who creates it becomes the initial admin and can invite others."
    },
    {
      question: "Who decides which modules to activate?",
      answer: "Building admins choose which modules to activate, but they can also set up democratic voting for residents to decide together. Different modules can have different permission settings based on your building's needs."
    },
    {
      question: "What languages does Conexa support?",
      answer: "Conexa is available in multiple languages including English, Croatian, German, French, Turkish, Norwegian, Portuguese, Finnish, Greek, Spanish, Italian and Russian. All modules support multi-language content from residents."
    },
    {
      question: "Do I need technical skills to use Conexa?",
      answer: "Not at all! Conexa is designed for everyone, regardless of technical experience. The app guides you through setup with simple steps, and our support team is always available to help."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Conexa. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="font-poppins font-semibold text-left text-gray-900 hover:text-conexa-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-conexa-light-grey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="font-inter text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you get the most out of Conexa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <div className="bg-conexa-primary hover:bg-blue-700 text-white rounded-lg px-8 py-4 transition-all hover:scale-105">
                <span className="font-inter font-medium">Contact Support</span>
              </div>
            </a>
            <a href="mailto:hello@conexa.app" className="inline-block">
              <div className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-8 py-4 transition-all hover:scale-105">
                <span className="font-inter font-medium text-gray-900">Email Us</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;