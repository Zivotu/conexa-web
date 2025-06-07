// src/pages/Blog1.jsx
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Blog1 = () => {
  const pics = [1, 2, 3, 4].map((i) => `/assets/blog_1_pic_${i}.png`);

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-96 overflow-hidden rounded-b-3xl shadow-lg mb-12">
        <img
          src="/assets/Blog_1.png"
          alt="Digital Communities"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="absolute bottom-8 left-8 text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Digital Communities
          </h1>
          <p className="mt-2 text-lg md:text-xl font-light">
            The Paradox of Digital Connectivity
          </p>
        </div>
      </div>

      {/* Article */}
      <article className="prose lg:prose-xl mx-auto py-8 px-4">
        <p>
          We live in an era where our phones are our constant companions, delivering a new wave of notifications and likes every few seconds. However, despite ubiquitous online communication, global studies reveal surprisingly high rates of loneliness: 13% of Europeans feel isolated most of the time, while among young people (ages 18–24), that figure rises to 57%. It is within this contrast that the key paradox of our digital networks lies—they can connect us to the world, but not to the person living just next door.
        </p>

        {/* Inline image #1 */}
        <figure className="my-8">
          <img src={pics[0]} alt="Illustration of digital loneliness" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Digital notifications can’t replace eye contact.
          </figcaption>
        </figure>

        <blockquote className="border-l-4 border-conexa-primary pl-4 italic text-lg">
          “Man is by nature a social animal.” – Aristotle
        </blockquote>

        <p>
          Aristotle’s notion of sociability feels more relevant than ever in the age of algorithms, where the absence of genuine interaction feels like a battle already lost. To restore true closeness, we must devise ways for the digital and the physical to operate in harmonious synergy.
        </p>

        <h2>Orthogonality of the Digital and the Neighborhood</h2>
        <p>
          Over the centuries, urbanization has brought advantages (opportunities, culture, infrastructure) but also drawbacks—anonymity, fragmentation of social ties, and the breakdown of traditional support networks. In his work <em>Bowling Alone</em>, Robert Putnam extensively argued that the loss of communal activities leads to a weakening of social capital.
        </p>
        <p>
          While online groups expand and grow, word of mouth in a real neighborhood still travels fast—often reaching the first 20 doors in no time. Mobile apps like WhatsApp and Viber have made communication easier, but they have not been able to replace the sense of trust that comes from a personal encounter and a glance over the fence.
        </p>

        {/* Inline image #2 */}
        <figure className="my-8">
          <img src={pics[1]} alt="Neighborhood gossip over fence" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Word-of-mouth still reigns in tight-knit communities.
          </figcaption>
        </figure>

        <p>
          Without physical closeness, digital interaction remains superficial. Psychologists Gifford and Sussman highlight three fundamental needs: the need for a comfortable shared space, a sense of security, and genuine social interaction. When any of these are missing, the city becomes a series of cold, technically perfect but emotionally empty structures.
        </p>

        <h2>The Psychology of Neighborhoods and Sense of Belonging</h2>
        <p>
          In urban environments, psychologists and sociologists distinguish between satisfaction (contentment with infrastructure, services, safety) and belonging (emotional connection and identity). Studying satisfaction reveals which neighborhood features matter daily—from clean streets to the availability of cafés. Belonging, on the other hand, emerges through shared rituals, routines, and a sense of “we.” It’s what motivates residents to trade a long paved hallway for a shared coffee in the building.
        </p>

        {/* Inline image #3 */}
        <figure className="my-8">
          <img src={pics[2]} alt="Residents sharing coffee" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Shared rituals spark real connections.
          </figcaption>
        </figure>

        <p>
          Sociologists Appold and Yuen, investigating life-use diaries in Singapore, concluded that high-rise towers do not disrupt family life—provided the design and spatial conditions are well-adapted. The key is the quality of the shared space, not the height of the building.
        </p>

        <h2>Phygital: The Synergy of Physical and Digital</h2>
        <p>
          The modern city demands a phygital approach: digital commands that play out in the real world. Imagine a push notification for tomorrow’s snow clearance, after which a neighbor (or an algorithm) automatically schedules a time slot for everyone. This is not a distant future; this is Conexa.life today.
        </p>

        {/* Inline image #4 */}
        <figure className="my-8">
          <img src={pics[3]} alt="Phygital city app flow" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Notifications → Confirmation → Action.
          </figcaption>
        </figure>

        <p>
          In practice, phygital implementation means that each resident goes through a continuous flow from their doorstep to the app: notification, confirmation, reminder, and final action—be it cleaning, a meeting, or survey analysis. Such a model blurs the line between the virtual and the real.
        </p>

        <h2>Conclusion – Returning the Warmth of the Neighborhood</h2>
        <p>
          In an era where digital technology eases many aspects of life, the loss of neighborhood ties becomes a loss of autonomy and support. Quality urban life is not defined by tall skyscrapers or super-fast internet, but by our relationships—with people and with place. When the digital and the physical are strategically connected, we get a phygital neighborhood that warms, connects, and protects. Conexa.life is exactly that bridge.
        </p>
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

export default Blog1;
