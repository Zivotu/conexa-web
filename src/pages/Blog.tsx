// src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const posts = [
  {
    id: 'blog-1',
    title: 'Digital Communities: The Paradox of Digital Connectivity',
    thumbnail: '/assets/Blog_1.jpg',
    link: '/blog/blog-1',
  },
  {
    id: 'blog-2',
    title: 'Modern Urban Living: Navigating Challenges and Embracing Digital Transformation',
    thumbnail: '/assets/Blog_2.jpg',
    link: '/blog/blog-2',
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
              <Link key={post.id} to={post.link} className="group">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-80 object-cover rounded-xl mb-4 group-hover:opacity-90 transition"
                />
                <h2 className="text-2xl font-poppins font-semibold text-gray-900 text-center group-hover:text-conexa-primary transition">
                  {post.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
