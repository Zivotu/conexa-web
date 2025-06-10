import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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

let faq: { q: string; a: string }[] = [];

const Pricing = () => {
  const { t } = useTranslation();
  faq = [
    { q: t('pricing_page.faq_q1'), a: t('pricing_page.faq_a1') },
    { q: t('pricing_page.faq_q2'), a: t('pricing_page.faq_a2') },
    { q: t('pricing_page.faq_q3'), a: t('pricing_page.faq_a3') },
    { q: t('pricing_page.faq_q4'), a: t('pricing_page.faq_a4') },
    { q: t('pricing_page.faq_q5'), a: t('pricing_page.faq_a5') },
    { q: t('pricing_page.faq_q6'), a: t('pricing_page.faq_a6') },
    { q: t('pricing_page.faq_q7'), a: t('pricing_page.faq_a7') },
    { q: t('pricing_page.faq_q8'), a: t('pricing_page.faq_a8') },
    { q: t('pricing_page.faq_q9'), a: t('pricing_page.faq_a9') },
    { q: t('pricing_page.faq_q10'), a: t('pricing_page.faq_a10') },
  ];
  return (
  <Layout>
    {/* ─────────────────────────── Hero ─────────────────────────── */}
    <section className="bg-gradient-to-br from-conexa-light-grey to-white py-14 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-4">
          {t('pricing_page.title')}
        </h1>
        <p className="font-inter text-lg text-gray-600 mb-8">
          {t('pricing_page.subtitle')}
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
                <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">
                  {t('pricing_page.free_plan')}
                </h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-gray-900">€0</span>
                  <span className="ml-2 text-gray-600">{t('pricing_page.free_forever')}</span>
                </div>
              </div>
              <ul className="space-y-1 mb-6 text-sm">
                <li className="flex items-center"><Check className="w-4 h-4 text-conexa-primary mr-2" />{t('index.home_repairs')}</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-conexa-primary mr-2" />{t('index.local_posts')}</li>
              </ul>
              <a
                href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa&hl=en-US&ah=gz9G-WCHhz5UVkJh502cYJIcG4E"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full py-4 text-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all hover:scale-105">
                  {t('pricing_page.get_started_free')}
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Building Membership Plan */}
          <Card className="relative p-6 border-2 border-conexa-primary shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-conexa-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {t('pricing_page.most_popular')}
              </span>
            </div>
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">
                  {t('pricing_page.building_membership')}
                </h3>
                <div className="mb-3 flex flex-col items-center">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">€34</span>
                    <span className="ml-2 text-gray-600">{t('pricing_page.per_month')}</span>
                  </div>
                  <span className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-conexa-primary/10 text-conexa-primary">
                    {t('index.per_building_unlimited_residents')}
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
                {t('pricing_page.note')}
              </p>

              <a
                href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa&hl=en-US&ah=gz9G-WCHhz5UVkJh502cYJIcG4E"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full py-4 text-lg bg-conexa-primary text-white hover:bg-blue-700 transition-all hover:scale-105" aria-label="Activate Building Membership – €34 flat fee">
                  {t('pricing_page.activate_building')}
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
        <h2 className="font-poppins font-semibold text-3xl text-gray-900 text-center mb-10">
          {t('pricing_page.faq_title')}
        </h2>
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
};

export default Pricing;
