// src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const posts = [
  {
    id: 'blog-1',
    title: 'Digital Communities: The Paradox of Digital Connectivity',
    thumbnail: '/assets/Blog_1.jpg',
    link: '/blog/blog-1',
    excerpt:
      'How can we feel lonely while being constantly connected? This article explores the digital paradox and the power of real neighborhood ties.',
  },
  {
    id: 'blog-2',
    title: 'Modern Urban Living: Navigating Challenges and Embracing Digital Transformation',
    thumbnail: '/assets/Blog_2.jpg',
    link: '/blog/blog-2',
    excerpt:
      'Living in multi-residential buildings has its pros and cons. Learn how digital tools can improve communication and community harmony.',
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins text-4xl text-gray-900 mb-12 text-center">
            Conexa Blog
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
              >
                <Link to={post.link}>
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-lg mb-4 group-hover:opacity-90 transition"
                  />
                </Link>
                <h2 className="text-2xl font-poppins font-semibold text-gray-900 mb-2 group-hover:text-conexa-primary transition text-center">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-base mb-4 text-center">{post.excerpt}</p>
                <div className="mt-auto text-center">
                  <Link
                    to={post.link}
                    className="inline-block text-conexa-primary font-medium hover:underline transition"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
