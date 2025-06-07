// src/pages/Blog1.jsx
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

/**
 * Blog1 - Smart Buildings, AI, and Digital Communities
 * Final version: only one image at the end (Blog_1_pic_1.jpg)
 */
const Blog1 = () => {
  return (
    <Layout>
      {/* ===================== HERO ===================== */}
      <header className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 tracking-tight">
            Smart Buildings, AI, and Digital Communities
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-600">
            <em>The Paradox of Digital Connectivity</em>
          </p>
        </div>
      </header>

      {/* ===================== MAIN ===================== */}
      <main className="py-16 bg-white">
        <article className="prose prose-lg max-w-3xl mx-auto text-gray-800 prose-headings:text-conexa-primary prose-headings:font-poppins px-4">
          {/* Intro */}
          <p>
            We live in an era where our <strong>phones are our constant companions</strong>, delivering a new wave of notifications and likes every few seconds. However, despite ubiquitous online communication, global studies reveal surprisingly high rates of loneliness: <strong>13% of Europeans feel isolated most of the time</strong>, while among young people (ages 18-24), that figure rises to <strong>57%</strong>. This stark contrast reveals the key paradox of our digital networks - they can connect us to the world, but <strong>not necessarily to the person living just next door</strong>.
          </p>

          <blockquote className="not-italic font-medium text-gray-700 border-l-4 border-conexa-primary pl-4">
            "Man is by nature a social animal." - Aristotle
          </blockquote>

          <p>
            Aristotle's notion of sociability feels more relevant than ever in the age of algorithms, where the absence of <strong>genuine interaction</strong> can feel like a battle already lost. To restore true closeness, we must devise ways for the <strong>digital and the physical</strong> to work in harmonious synergy.
          </p>

          {/* ===================== Orthogonality ===================== */}
          <h2>Orthogonality of the Digital and the Neighbourhood</h2>
          <p>
            Over the centuries, urbanisation has brought advantages - opportunity, culture, infrastructure - but also <strong>anonymity, fragmented social ties</strong>, and the breakdown of traditional support networks. In <em>Bowling Alone</em>, Robert Putnam argues that when communal activities disappear, social capital quickly weakens.
          </p>
          <p>
            While online groups can expand overnight, <strong>word of mouth in a real neighbourhood</strong> still travels fast - often reaching the first twenty doors in no time.
          </p>

          {/* ===================== Psychology ===================== */}
          <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            The Psychology of Neighbourhoods and Sense of Belonging
          </h2>
          <p>
            In urban environments, researchers distinguish between <strong>satisfaction</strong> and <strong>belonging</strong>. Satisfaction shows which neighbourhood features matter day-to-day; belonging emerges through <strong>shared rituals and routines</strong>.
          </p>

          <p>
            Sociologists Appold and Yuen, studying life-use diaries in Singapore, concluded that high-rise towers do not disrupt family life - provided <strong>shared spaces are well-designed</strong>.
          </p>

          {/* ===================== Phygital ===================== */}
          <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            Phygital: The Synergy of Physical and Digital
          </h2>
          <p>
            The modern city demands a <strong>phygital approach</strong>: digital commands that play out in the real world. Imagine a push notification for tomorrow's snow clearance, after which a neighbour (or an algorithm) schedules a slot for everyone.
          </p>
          <p>
            In practice, phygital implementation guides each resident through: <strong>notification → confirmation → reminder → action</strong>.
          </p>

          {/* ===================== Pillars ===================== */}
          <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            Essential Elements of Quality Urban Life
          </h2>
          <h3>1. Space and Greenery</h3>
          <p>Nature within the city has a <strong>regenerative effect</strong>.</p>

          <h3>2. Safety and Reliability</h3>
          <p>A sense of security comes not only from surveillance, but also from <strong>reliable neighbours</strong>.</p>

          <h3>3. Acts of Community</h3>
          <p>Without <strong>collective action</strong>, there is no belonging.</p>

          {/* ===================== Conexa ===================== */}
          <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            Conexa.life at the Heart of the Story
          </h2>
          <p>
            Conexa.life is not just another app - it aims to be the <strong>backbone of a new digital culture for neighbourhoods</strong>.
          </p>
          <p>
            In this way, every resident becomes an <strong>active participant</strong> rather than a passive observer.
          </p>

          {/* ===================== Conclusion ===================== */}
          <h2>Conclusion - Returning the Warmth of the Neighbourhood</h2>
          <p>
            Digital technology solves many problems, yet <strong>neighbourhood ties remain irreplaceable</strong>.
          </p>
          <p>
            Conexa.life is exactly that: a <strong>bridge between the digital and the real</strong>.
          </p>

          {/* Final Image */}
          <img
            src="/assets/Blog_1_pic_1.jpg"
            alt="Community interacting through Conexa"
            className="rounded-lg shadow-md w-full md:w-2/3 mx-auto my-12"
            loading="lazy"
          />

          {/* CTA */}
          <p className="text-center font-semibold mt-12">
            <a
              href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa"
              className="underline hover:text-conexa-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Conexa.life for Free
            </a>
          </p>
        </article>
      </main>

      {/* FOOTER */}
      <footer className="py-12 bg-conexa-light-grey border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <Link
            to="/blog"
            className="inline-block bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-full transition"
          >
            ← Back to Blog
          </Link>
        </div>
      </footer>
    </Layout>
  );
};

export default Blog1;
