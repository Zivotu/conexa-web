import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Step 1: Download the App',
      description: (
        <>
          <p className="font-inter text-xl text-gray-700 mb-6 text-center">
            Download Conexa for free and start connecting with your building community in seconds. The app is currently available on Google Play – iOS version coming soon.
          </p>
          <div className="text-center">
            <a
              href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa&hl=en-US&ah=gz9G-WCHhz5UVkJh502cYJIcG4E"
              className="inline-block bg-conexa-primary hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-3 text-base transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on Google Play
            </a>
          </div>
        </>
      ),
      image: null,
    },
    {
      title: 'Step 2: Quick Registration',
      description: (
        <ul className="font-inter text-gray-600 space-y-2 text-base text-center">
          <li>• Simple sign-up form</li>
          <li>• No email verification required</li>
          <li>• Data is stored securely</li>
          <li>• Get started in less than a minute</li>
        </ul>
      ),
      image: '/assets/Register_Screenshot_1.jpg',
    },
    {
      title: 'Step 3: Create a Location (Free for 7 Days)',
      description: (
        <ul className="font-inter text-gray-600 space-y-2 text-base text-center">
          <li>• No billing required upfront</li>
          <li>• If no subscription, location becomes inactive</li>
          <li>• Risk-free and commitment-free</li>
        </ul>
      ),
      image: '/assets/Createlocation_Screenshot_1.jpg',
    },
    {
      title: 'Step 4: Set Building Details',
      description: (
        <ul className="font-inter text-gray-600 space-y-2 text-base text-center">
          <li>• Add building name and address</li>
          <li>• Define apartments and admin rights</li>
          <li>• Upload a photo (optional)</li>
        </ul>
      ),
      image: '/assets/Buildinginfo_Screenshot_1.jpg',
    },
    {
      title: 'Step 5: Invite Others to Join',
      description: (
        <ul className="font-inter text-gray-600 space-y-2 text-base text-center">
          <li>• Share QR code or link</li>
          <li>• Users must have app installed</li>
          <li>• Works just like WhatsApp group invites</li>
        </ul>
      ),
      image: '/assets/Joinlocations_Screenshot_1.jpg',
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            How Conexa Works
          </h1>
          {steps[0].description}
        </div>
      </section>

      {/* Steps in cards */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.slice(1).map((step, index) => (
            <div key={step.title} className="bg-conexa-light-grey rounded-xl shadow-md p-6 text-center flex flex-col items-center gap-4">
              <h3 className="font-poppins font-semibold text-xl text-conexa-primary">
                {step.title}
              </h3>
              <div className="w-full flex justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg object-contain w-full max-w-[300px] aspect-[9/16]"
                />
              </div>
              <div>{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Note */}
      <section className="py-10 bg-conexa-light-grey">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">
            All Modules Included
          </h2>
          <p className="font-inter text-base text-gray-600 mb-4">
            Once your building is active, all modules are available by default. Admins can disable any in settings.
          </p>
          <p className="font-inter text-base text-gray-600">
            Still unsure? Contact us via the live chat bubble in the bottom-right corner or visit our <a href="/contact" className="text-conexa-primary underline">Contact Page</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
