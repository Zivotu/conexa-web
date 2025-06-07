import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    building: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you soon.");

    // TODO: Replace this with a POST request to your server on plus.hr
    // fetch('https://your-plus-hr-endpoint/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your building community? Have questions about Conexa? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="building">Building/Company</Label>
                    <Input
                      id="building"
                      name="building"
                      type="text"
                      value={formData.building}
                      onChange={handleChange}
                      placeholder="Your building address or company name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your building, questions, or how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-conexa-primary hover:bg-blue-700 text-lg py-6 transition-all hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-conexa-light-grey rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-conexa-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="font-inter text-gray-600">info@conexa.life</p>
                      <p className="font-inter text-sm text-gray-500">We usually respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-conexa-light-grey rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-conexa-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-1">
                        Office
                      </h3>
                      <p className="font-inter text-gray-600">
                        Headquartered in Zagreb<br />
                        (Remote-first company)
                      </p>
                      <p className="font-inter text-sm text-gray-500">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <Card className="p-6 bg-conexa-light-grey">
                <CardContent className="p-0">
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <a href="/faq" className="block font-inter text-conexa-primary hover:text-blue-700">
                      → Frequently Asked Questions
                    </a>
                    <a href="/how-it-works" className="block font-inter text-conexa-primary hover:text-blue-700">
                      → How Conexa Works
                    </a>
                    <a href="/pricing" className="block font-inter text-conexa-primary hover:text-blue-700">
                      → Pricing Information
                    </a>
                    <a href="/modules" className="block font-inter text-conexa-primary hover:text-blue-700">
                      → Available Modules
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Promo Video */}
              <Card className="p-6 bg-gradient-to-r from-conexa-primary to-blue-700">
                <CardContent className="p-0 text-center">
                  <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                    See Conexa in Action
                  </h3>
                  <p className="font-inter text-blue-100 mb-4">
                    Watch our short video to explore all modules
                  </p>
                  <a
                    href="https://www.youtube.com/shorts/82Nsgn200iM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-white text-conexa-primary hover:bg-gray-100 transition-all hover:scale-105">
                      Watch Video
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
