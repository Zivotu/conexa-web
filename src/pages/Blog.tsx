import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  const posts = [
    {
      id: 'pilot-building-12-zagreb',
      title: 'Pilot: Building #12, Zagreb',
      excerpt: 'How a 48-apartment building in Zagreb transformed their community management in just 30 days with Conexa.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Case Study',
      image: '/assets/blog-zagreb-building.jpg'
    }
    // Future posts would be added here
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
            Conexa Blog
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real communities. See how buildings around the world are using Conexa to strengthen their neighborhoods.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {posts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-1">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 lg:h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="lg:col-span-2 p-6">
                          <div className="flex items-center mb-3">
                            <span className="bg-conexa-light-grey text-conexa-primary text-xs font-inter font-medium px-2 py-1 rounded-full mr-3">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-500 font-inter">
                              {post.date} • {post.readTime}
                            </span>
                          </div>
                          <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-3 group-hover:text-conexa-primary transition-colors">
                            {post.title}
                          </h2>
                          <p className="font-inter text-gray-600 mb-4">
                            {post.excerpt}
                          </p>
                          <span className="inline-flex items-center font-inter font-medium text-conexa-primary">
                            Read More
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="text-center mt-12">
              <Card className="p-8 bg-gray-50">
                <CardContent className="p-0">
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    More Stories Coming Soon
                  </h3>
                  <p className="font-inter text-gray-600">
                    We're working with communities around the world to share their Conexa success stories. 
                    Have a story to share? Get in touch!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
