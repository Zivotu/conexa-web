import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

/**
 * -----------------------------------------------------------------------------
 * Pricing Page (image served from public/assets)
 * -----------------------------------------------------------------------------
 * 1. Flat-fee badge: "per building · unlimited residents"
 * 2. Bullet-list contains *all* existing & coming modules (names only)
 * 3. Infographic loaded via <img src="/assets/pricing_1.png" ...>
 * 4. FAQ accordion answers top visitor questions
 * -----------------------------------------------------------------------------
 */

const allModules: string[] = [
  // Building
  'Official Notices',
  'Chat Room',
  'Quiz',
  'Bulletin Board',
  'Documents',
  'Wise Owl',
  'Shared Tasks',
  'Security',
  'Alarm',
  'Noise Alerts',
  // Community
  'Marketplace',
  'Home Repairs',
  'Parking Sharing',
  'Shared Rides',
  'Local Posts',
  // Special (coming)
  'Business Networking (Coming 2025)',
  'Conference Rooms (Coming 2026)'
];

const faq: { q: string; a: string }[] = [
  { q: 'Is the €34 charged per resident?', a: 'No. One flat fee per building, unlimited users.' },
  { q: 'Are taxes included?', a: 'Prices shown are net. VAT/GST is added by App Store / Google Play based on your country.' },
  { q: 'Any hidden costs?', a: 'Zero. No setup, storage or support fees.' },
  { q: 'How do we pay?', a: 'Monthly auto-renew in App Store / Google Play. Cancel any time – billing stops immediately.' },
  { q: 'What happens after the 7-day trial?', a: 'Your virtual building goes inactive until you purchase a membership. No automatic charge.' },
  { q: 'Do future modules cost extra?', a: 'No. All current & future modules are included in Building Membership.' },
  { q: 'User limits?', a: 'None today. A soft cap (500–1000) may be introduced later for performance reasons only.' },
  { q: 'Can residents disable modules?', a: 'Yes. Building admins can toggle modules on/off at any time.' },
  { q: 'Data & GDPR?', a: 'Hosted on Google Cloud (EU data centres). No personal data visible outside the building.' },
  { q: 'Support?', a: 'In-app "Contact Support", live chat on website, or email info@conexa.life.' }
];

const Pricing = () => (
  <Layout>
    {/* ─────────────────────────── Hero ─────────────────────────── */}
    <section className="bg-gradient-to-br from-conexa-light-grey to-white py-14 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="font-inter text-lg text-gray-600 mb-8">
          One flat monthly fee unlocks <strong>every module</strong> for every resident in your building.
        </p>
        <img
          src="/assets/pricing_1.png"
          width={800}
          height={600}
          alt="Infographic showing one flat fee for unlimited residents and modules"
          className="mx-auto rounded-xl shadow-md"
        />
      </div>
    </section>

    {/* ──────────────────── Pricing Cards ──────────────────── */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Free Community Plan */}
          <Card className="p-6 border border-gray-200">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">Free Community</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-gray-900">€0</span>
                  <span className="ml-2 text-gray-600">/ forever</span>
                </div>
              </div>
              <ul className="space-y-1 mb-6 text-sm">
                <li className="flex items-center"><Check className="w-4 h-4 text-conexa-primary mr-2" />Home Repairs</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-conexa-primary mr-2" />Local Posts</li>
              </ul>
              <a
                href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa&hl=en-US&ah=gz9G-WCHhz5UVkJh502cYJIcG4E"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full py-4 text-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all hover:scale-105">
                  Get Started Free
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Building Membership Plan */}
          <Card className="relative p-6 border-2 border-conexa-primary shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-conexa-primary text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">Building Membership</h3>
                <div className="mb-3 flex flex-col items-center">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">€34</span>
                    <span className="ml-2 text-gray-600">/ month</span>
                  </div>
                  <span className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-conexa-primary/10 text-conexa-primary">
                    per building · unlimited residents
                  </span>
                </div>
              </div>

              {/* All modules list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 mb-6 text-sm">
                {allModules.map((m) => (
                  <li key={m} className="flex items-center">
                    <Check className="w-4 h-4 text-conexa-primary mr-2 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>

              <p className="mb-4 text-sm text-gray-600 text-center">
                No hidden fees · VAT added at checkout · Cancel anytime
              </p>

              <a
                href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa&hl=en-US&ah=gz9G-WCHhz5UVkJh502cYJIcG4E"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full py-4 text-lg bg-conexa-primary text-white hover:bg-blue-700 transition-all hover:scale-105" aria-label="Activate Building Membership – €34 flat fee">
                  Activate for Your Building
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* ───────────────────────── FAQ ───────────────────────── */}
    <section className="py-20 bg-conexa-light-grey">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-poppins font-semibold text-3xl text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="w-full">
          {faq.map(({ q, a }) => (
            <AccordionItem key={q} value={q} className="border-b border-gray-200">
              <AccordionTrigger className="py-4 font-medium text-left text-gray-900">{q}</AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default Pricing;
