import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free Tenant',
      price: '$0',
      period: 'per month',
      users: '1 user',
      modules: 'Marketplace & Home Repairs',
      support: 'Email support',
      features: [
        'Access to Marketplace',
        'Home Repairs booking',
        'Basic profile',
        'Community posts viewing',
        'Email notifications'
      ],
      limitations: [
        'No building management',
        'Limited module access',
        'Basic support only'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Virtual Building',
      price: '$9',
      period: 'per month',
      users: 'Up to 300 users',
      modules: 'All modules included',
      support: 'Priority chat support',
      features: [
        'All 15+ modules',
        'Building administration',
        'Digital voting system',
        'Document management',
        'Security features',
        'Task scheduling',
        'Analytics dashboard',
        'Custom permissions',
        'Data export',
        'Priority support'
      ],
      limitations: [],
      cta: 'Start 7-Day Free Trial',
      popular: true
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free as a tenant or upgrade to manage your entire building. First 7 days are always free for buildings.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="font-inter text-sm text-blue-800">
              <strong>Special Offer:</strong> First 7 days per building are completely free!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative p-8 ${plan.popular ? 'border-2 border-conexa-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-conexa-primary text-white px-4 py-2 rounded-full text-sm font-inter font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-0">
                    <div className="text-center mb-8">
                      <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span className="text-4xl font-poppins font-bold text-gray-900">{plan.price}</span>
                        <span className="font-inter text-gray-600 ml-2">{plan.period}</span>
                      </div>
                      <div className="space-y-1 text-sm font-inter text-gray-600">
                        <p>{plan.users}</p>
                        <p>{plan.modules}</p>
                        <p>{plan.support}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <h4 className="font-poppins font-semibold text-lg text-gray-900">Included:</h4>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="font-inter text-gray-700">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.limitations.length > 0 && (
                        <>
                          <h4 className="font-poppins font-semibold text-lg text-gray-900 mt-6">Limitations:</h4>
                          {plan.limitations.map((limitation, limitIndex) => (
                            <div key={limitIndex} className="flex items-center">
                              <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                              <span className="font-inter text-gray-500">{limitation}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <Button 
                      className={`w-full py-6 text-lg transition-all hover:scale-105 ${
                        plan.popular 
                          ? 'bg-conexa-primary hover:bg-blue-700 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-conexa-light-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 text-center mb-12">
              Pricing FAQ
            </h2>
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                    How does the 7-day free trial work?
                  </h3>
                  <p className="font-inter text-gray-600">
                    Every new building gets the first 7 days completely free with full access to all modules. No credit card required to start.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                    What happens if we have more than 300 residents?
                  </h3>
                  <p className="font-inter text-gray-600">
                    Contact us for custom enterprise pricing. We offer special rates for larger buildings and building complexes.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                    Can residents use the free plan if our building doesn't upgrade?
                  </h3>
                  <p className="font-inter text-gray-600">
                    Yes! Individual residents can always use the Free Tenant plan to access Marketplace and Home Repairs, even without building-wide adoption.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                    Is there a setup fee?
                  </h3>
                  <p className="font-inter text-gray-600">
                    No setup fees, no hidden costs. The monthly price includes everything: hosting, support, updates, and all features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-4">
            Ready to Transform Your Building?
          </h2>
          <p className="font-inter text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your free trial today. No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-conexa-primary hover:bg-blue-700 text-lg px-8 py-6 transition-all hover:scale-105">
              Start 7-Day Free Trial
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 transition-all hover:scale-105">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;