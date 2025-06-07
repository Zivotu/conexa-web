// src/pages/Blog2.jsx
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Blog2 = () => {
  const pics = [1, 2, 3, 4].map((i) => `/assets/blog_2_pic_${i}.png`);

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-96 overflow-hidden rounded-b-3xl shadow-lg mb-12">
        <img
          src="/assets/Blog_2.png"
          alt="Modern Urban Living"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="absolute bottom-8 left-8 text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Modern Urban Living
          </h1>
          <p className="mt-2 text-lg md:text-xl font-light">
            Navigating Challenges & Embracing Digital Transformation
          </p>
        </div>
      </div>

      {/* Article */}
      <article className="prose lg:prose-xl mx-auto py-8 px-4">
        <h2>The Challenges of Communal Living</h2>

        <h3>Maintenance of Shared Spaces</h3>
        <p>
          Living in a multi-residential building means sharing common areas such as hallways, stairwells, courtyards, parking lots, and elevators. Maintaining these spaces can be a major source of conflict:
        </p>
        <ul>
          <li>Disagreements Over Costs</li>
          <li>Accountability Issues</li>
        </ul>

        {/* Inline image #1 */}
        <figure className="my-8">
          <img src={pics[0]} alt="Shared space maintenance" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Who pays for the lobby facelift?
          </figcaption>
        </figure>

        <h3>Noise and Behavior</h3>
        <p>
          Noise complaints are among the most frequent issues reported by residents:
        </p>
        <ul>
          <li>Daily Disruptions</li>
          <li>Construction and Renovation</li>
        </ul>

        {/* Inline image #2 */}
        <figure className="my-8">
          <img src={pics[1]} alt="Noise complaint" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            A single loud stereo can spark a hallway revolt.
          </figcaption>
        </figure>

        <h3>Collective Decision-Making</h3>
        <p>
          The process of making decisions as a community is fraught with challenges:
        </p>
        <ul>
          <li>Lack of Engagement</li>
          <li>Transparency Issues</li>
          <li>Financial Disputes</li>
        </ul>

        {/* Inline image #3 */}
        <figure className="my-8">
          <img src={pics[2]} alt="Community meeting" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Can digital tools boost meeting turnout?
          </figcaption>
        </figure>

        <h2>The Digital Shift: Overcoming Communication Barriers</h2>
        <p>
          For years, platforms like WhatsApp and Facebook groups have been the go-to solutions for resident communication. However, these channels are often cluttered with irrelevant messages, causing critical information to be lost in the noise.
        </p>

        <h2>Key Findings from Recent Studies</h2>
        <ul>
          <li>Increased Satisfaction</li>
          <li>Reduction in Conflicts</li>
          <li>Streamlined Decision-Making</li>
        </ul>

        {/* Inline image #4 */}
        <figure className="my-8">
          <img src={pics[3]} alt="Digital platform stats" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            +35% satisfaction, –40% conflicts.
          </figcaption>
        </figure>

        <h2>Looking Ahead: The Future of Urban Housing</h2>
        <p>
          As urbanization continues, the need for innovative solutions in residential management becomes ever more critical. Digital transformation is not a fleeting trend; it’s a necessity for creating sustainable, harmonious living environments.
        </p>

        <h2>Emerging Trends in Residential Communities</h2>
        <ul>
          <li>Enhanced Participation</li>
          <li>Improved Safety</li>
          <li>Resource Coordination</li>
        </ul>
      </article>

      {/* Back Link */}
      <div className="text-center py-8">
        <Link
          to="/blog"
          className="inline-block bg-conexa-primary text-white font-medium px-6 py-3 rounded-full hover:bg-conexa-dark transition"
        >
          ← Back to Blog
        </Link>
      </div>
    </Layout>
  );
};

export default Blog2;
