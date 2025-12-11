import { Link } from "react-router-dom";
import FooterLogo from "../assets/footerlogo.png";
import "../Css/Creatorproposal.css";

export function CreatorProposal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo and Title Section */}
      <div className="container-padding pt-8 pb-6">
        <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-[#3931C5] focus:ring-offset-2">
          <img
            src={FooterLogo}
            alt="LA LA LAUGH Logo"
            className="w-24 md:w-28 h-auto mb-8"
          />
        </Link>
        <h1 className="main-title">
          LA LA LAUGH — Creators' Proposal
        </h1>
      </div>

      {/* Content */}
      <div className="container-padding pb-12">
        <p className="subtitle-text">
          The world's first Social Entertainment platform: the Take-a-Break app built for joy, creators, and a healthier digital culture.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="section-heading">
            1. Introduction: Why La La Laugh Exists
          </h2>
          <p className="body-text">
            La La Laugh was created to disrupt the current social media landscape by offering something radically simple: pure entertainment, good energy, and a platform that respects creators.
          </p>
          <p className="body-text">
            People don't need more pressure or toxicity — they need a break. La La Laugh is the <strong>Take-a-Break App</strong>, a joyful escape designed for a better human experience.
          </p>
          <p className="body-text">
            As a company, we commit to staying simple, lean, and profitable from day one. Creators are the core of the creator economy, so our structure and strategy are built around respecting the people who create the value.
          </p>
          <p className="body-text">
            Our Founder & CEO believes strongly in:
          </p>
          <ul className="ml-8 space-y-1 mb-4">
            <li className="list-item">
              <strong>Prioritizing high-quality advertising over chasing investors.</strong> Growth should be sustainable, not dependent on endless funding rounds.
            </li>
            <li className="list-item">
              <strong>Bringing a new era to the creator economy.</strong> Creators deserve transparency, simplicity, and real revenue — not arbitrary rules or algorithmic manipulation.
            </li>
            <li className="list-item">
              <strong>Honoring user choice and the social agora.</strong> We avoid unnecessary censorship or preconceived filtering. Users decide what they want to watch.
            </li>
            <li className="list-item">
              <strong>Restoring real human connection.</strong> Humor is medicine in a polarized world. La La Laugh sparks joy online and encourages more connection offline.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="section-heading">
            2. Our Development Roadmap — Two Phases
          </h2>
          <p className="body-text">
            La La Laugh will grow in two major phases, with a third innovation phase already envisioned.
          </p>
          
          <h3 className="subsection-heading">
            Phase 1 — Launch & Growth
          </h3>
          <p className="body-text">
            Our priority is to grow an authentic community while staying sustainable.
          </p>
          <ul className="ml-6 space-y-2 mb-4">
            <li className="list-item">Build a positive, humor-driven environment</li>
            <li className="list-item">Feature creators early to help them grow</li>
            <li className="list-item">Use sponsorships to operate while Phase 2 is developed</li>
            <li className="list-item">Stay lean, agile, transparent, and community-driven</li>
            <li className="list-item">Prepare the foundation for full monetization</li>
          </ul>
          <p className="body-text">
            In Phase 1, we grow together with creators while securing sponsors that let us operate without sacrificing values.
          </p>

          <h3 className="subsection-heading">
            Phase 2 — Monetization for Creators
          </h3>
          <p className="body-text">
            Once we reach a strong user base, we introduce one of the fairest monetization systems in the industry.
          </p>
          
          <div className="ml-4 space-y-4">
            <div>
              <p className="body-text font-semibold mb-1">
                A. Laugh Coins (Future Development)
              </p>
              <p className="body-text ml-4">
                Creators earn 55%–80% of all in-app tips.
              </p>
            </div>

            <div>
              <p className="body-text font-semibold mb-1">
                B. Revenue Share on Advertising
              </p>
              <p className="body-text ml-4">
                When sponsorships transition to full advertising, creators will receive:
              </p>
              <ul className="ml-10 space-y-1">
                <li className="list-item">60% revenue share for everyone</li>
                <li className="list-item">65% for creators who hit performance milestones</li>
                <li className="list-item">70% lifetime share for individual pieces of content that reach major milestones</li>
              </ul>
              <p className="body-text ml-4 mt-2">
                This rewards merit, not early access.
              </p>
            </div>

            <div>
              <p className="body-text font-semibold mb-1">
                C. Best Joke Awards
              </p>
              <p className="body-text ml-4 mb-1">
                Rewards and visibility for:
              </p>
              <ul className="ml-10 space-y-1">
                <li className="list-item">Joke of the Day</li>
                <li className="list-item">Joke of the Week</li>
                <li className="list-item">Joke of the Month</li>
                <li className="list-item">Joke of the Year</li>
              </ul>
            </div>

            <div>
              <p className="body-text font-semibold mb-1">
                D. Creator Tools (Future Development)
              </p>
              <ul className="ml-10 space-y-1">
                <li className="list-item">Sponsorship management tools</li>
                <li className="list-item">Affiliate and profit-sharing features</li>
                <li className="list-item">Transparent metrics (real views, completions, skips)</li>
              </ul>
            </div>
          </div>

          <h3 className="subsection-heading">
            Phase 3 — Innovation: The Future of the Creator Economy
          </h3>
          <p className="body-text">
            Our CEO — an inventor and innovator — is developing proprietary ideas to elevate creators further.
          </p>
          <p className="body-text">
            This includes "The Creators' Bill of Rights": A commitment to transparency, collaboration, and long-term creator empowerment.
          </p>
          <p className="body-text">
            Phase 3 transforms La La Laugh into a full creative ecosystem.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="section-heading">
            3. Why La La Laugh Is Better Than Anything Else
          </h2>
          
          <div className="space-y-3">
            <div>
              <p className="body-text font-semibold mb-1">
                A. Sponsorship & Brand Management
              </p>
              <p className="body-text ml-4">
                Creators will have built-in tools to work smoothly with advertisers.
              </p>
            </div>

            <div>
              <p className="body-text font-semibold mb-1">
                B. Transparent Metrics
              </p>
              <p className="body-text ml-4">
                No inflated numbers. No mysterious algorithms. Creators and advertisers see real performance from day one.
              </p>
            </div>

            <div>
              <p className="body-text font-semibold mb-1">
                C. A Healthier Entertainment Experience
              </p>
              <p className="body-text ml-4">
                La La Laugh replaces doom-scrolling with pure joy and humor. A lighter mental space = happier creators, better engagement, and sustainable growth.
              </p>
            </div>

            <div>
              <p className="body-text font-semibold mb-1">
                D. Early Creators Become Long-Term Partners
              </p>
              <p className="body-text ml-4 mb-1">
                Creators who join in Phase 1 receive:
              </p>
              <ul className="ml-10 space-y-1">
                <li className="list-item">priority access to monetization</li>
                <li className="list-item">boosted discovery placement</li>
                <li className="list-item">sponsorship visibility</li>
                <li className="list-item">platform recognition</li>
                <li className="list-item">influence on the product's direction</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="section-heading">
            4. Our Mission
          </h2>
          <p className="body-text">
            Our mission is to create a positive, human-first entertainment experience that uplifts people, empowers creators, and rebuilds community through humor.
          </p>
          <p className="body-text">
            La La Laugh is the first Social Entertainment platform — built not for addiction, but for joy.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="section-heading">
            5. And Unlike Other Platforms…
          </h2>
          <p className="body-text">
            La La Laugh will never require:
          </p>
          <ul className="ml-6 space-y-1 mb-4">
            <li className="list-item">minimum watch hours</li>
            <li className="list-item">subscriber thresholds</li>
            <li className="list-item">inflated or fake metrics</li>
            <li className="list-item">confusing "eligibility reviews"</li>
          </ul>
          <p className="body-text">
            We keep it simple. We keep it fair. We keep it human.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-12">
          <h2 className="section-heading">
            6. Conclusion
          </h2>
          <p className="body-text">
            La La Laugh is a movement — a shift toward healthier digital experiences, creator equity, and transparent entertainment.
          </p>
          <p className="body-text">
            We invite creators — comedians, storytellers, entertainers, and anyone who can spark joy — to help build the happiest platform on the internet.
          </p>
          <p className="body-text mb-8">
            This is the beginning of a new era in social entertainment. Let's build it together.
          </p>
          
          <div className="border-t border-gray-300 pt-6 mt-8">
            <p className="body-text font-semibold mb-2">
              Contact Our Creator Team
            </p>
            <p className="body-text">
              Have questions about the Creator Program? We're here to help!<br />
              Ideas to Move Forward LLC<br />
              Creator Program Department<br />
              1309 Coffeen Avenue, STE 1200<br />
              Sheridan, WY 82801, USA
            </p>
            <p className="body-text">
              Email:{" "}
              <a
                href="mailto:creators@lalalaugh.com"
                className="text-[#3931C5] hover:underline"
              >
                creators@lalalaugh.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white border-t border-gray-300">
        <div className="container-padding py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-nunito text-gray-500 text-base text-center md:text-left">
            Lalalaugh © all rights reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@lalalaughapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}