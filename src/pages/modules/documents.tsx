import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  FileText,
  UploadCloud,
  Search,
  PlusSquare,
  Trash,
  Eye,
  Lock,
  FolderOpen,
  Star,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const DocumentsDetail: React.FC = () => {
  const moduleData: { [key: string]: any } = {
    documents: {
      id: 'documents',
      title: 'Documents',
      description:
        'Important documents – organized, secure, and available whenever you need them.',
      subtitle:
        'Forget searching for invoices, reports, or assignments in old emails and WhatsApp groups. The Documents module in the Conexa app provides a centralized, secure, and easy-to-use space for all official documents of your building or community.',
      highlights: [
        {
          icon: UploadCloud,
          title: 'Upload & Store PDFs',
          description:
            'Upload and store official PDFs and documents in your building’s virtual archive.',
        },
        {
          icon: Search,
          title: 'Quick Search',
          description: 'Search by title for instant access to any document you need.',
        },
        {
          icon: PlusSquare,
          title: 'Add New Documents',
          description:
            'Only administrators can add new documents to keep everything up to date.',
        },
        {
          icon: Trash,
          title: 'Delete Documents',
          description:
            'Administrators can delete outdated or irrelevant documents at any time.',
        },
        {
          icon: Eye,
          title: 'In-App Viewing',
          description:
            'View documents directly within the app—no external viewer required.',
        },
        {
          icon: Lock,
          title: 'Private & Secure',
          description:
            'Documents are accessible only to members of your virtual building, ensuring full privacy.',
        },
        {
          icon: FolderOpen,
          title: 'Everything in One Place',
          description:
            'All official documents are centralized—no more lost files or repeated requests.',
        },
      ],
      testimonial: {
        quote:
          '“I used to ask the building rep for old bills every year. Now I have everything on my phone in seconds.”',
        author: 'Building Resident',
      },
      screenshot: '/assets/Documents_1.jpg',
      faq: [
        {
          question: 'Who can view the documents?',
          answer:
            'Only members of the virtual building to which the documents belong.',
        },
        {
          question: 'Who can add or delete documents?',
          answer:
            'Only the location administrators can add or delete documents.',
        },
        {
          question: 'What types of documents are supported?',
          answer:
            'Currently, only PDF documents are supported, but more formats are planned.',
        },
        {
          question: 'Can I view documents from other buildings?',
          answer:
            'No. Each virtual building has its own separate document space.',
        },
        {
          question: 'Do I need a special app to open PDFs?',
          answer:
            'No. Documents open directly inside the Conexa app without any external viewer.',
        },
        {
          question: 'What if a document is no longer relevant?',
          answer:
            'An administrator can delete it or replace it with a new version at any time.',
        },
      ],
    },
  };

  const module = moduleData['documents'];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-[#f5f5f5] py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className="text-[#fe9100] hover:text-[#d17a00] flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              All Modules
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      <ModuleNav currentId="documents" />

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            {/* Left column: screenshot */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt="Documents module mock-up"
                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#fe9100] object-contain"
              />
            </div>

            {/* Right column: icon + text */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <FileText size={56} className="text-[#fe9100]" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                  {module.title} – One Central Place for Everything That Matters
                </h1>
                <p className="font-inter text-lg lg:text-xl text-gray-600 mb-3">
                  {module.description}
                </p>
                {module.subtitle && (
                  <p className="font-inter text-base lg:text-lg text-gray-500 max-w-prose mx-auto lg:mx-0">
                    {module.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      {module.highlights && module.highlights.length > 0 && (
        <section className="py-12 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                Key Features
              </h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {module.highlights.map((item: any, idx: number) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <IconComponent size={32} className="mb-3 text-[#fe9100]" />
                    <h3 className="font-poppins font-semibold text-base lg:text-lg text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm lg:text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {module.testimonial && (
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4">
            <Card className="p-6 text-center bg-gray-50">
              <CardContent className="p-0">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="font-inter text-base lg:text-lg text-gray-700 mb-2">
                  {module.testimonial.quote}
                </blockquote>
                <p className="font-poppins font-semibold text-gray-900 text-sm lg:text-base">
                  {module.testimonial.author}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* FAQ */}
      {module.faq && module.faq.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                FAQ – {module.title}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {module.faq.map((item: any, idx: number) => (
                  <AccordionItem key={idx} value={`faq-item-${idx}`}>
                    <AccordionTrigger className="font-poppins font-medium text-left py-2">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-inter text-gray-600 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default DocumentsDetail;
