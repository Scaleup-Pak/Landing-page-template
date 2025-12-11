import { Link } from "react-router-dom";
import FooterLogo from "../assets/footerlogo.png";
import "../Css/Creatorproposal.css";

export function Advertiser() {
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
          A Joy-Driven Advertising Experience for a New Generation
        </h1>
      </div>

      {/* Content */}
      <div className="container-padding pb-12">
        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="section-heading">
            1. Introduction: Where Brands Meet Joy
          </h2>
          <p className="body-text">
            La La Laugh is built on one core belief: <strong>If you understand people, you understand business.</strong>
          </p>
          <p className="body-text">
            People come to us to reset, laugh, and feel good. Brands that join us early connect with audiences in their happiest, most receptive moments.
          </p>
          
          <h3 className="subsection-heading">
            Why Humor Wins
          </h3>
          <ul className="ml-8 space-y-1 mb-4">
            <li className="list-item">90% remember brands using humor</li>
            <li className="list-item">70% prefer a funny brand</li>
            <li className="list-item">80% buy again if a brand makes them laugh</li>
          </ul>
          <p className="body-text">
            Advertising on La La Laugh isn't just reach — it's positive emotional impact.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="section-heading">
            2. Advertising Philosophy
          </h2>
          <p className="body-text">
            We create an environment where ads feel natural, light, and welcome.
          </p>
          <p className="body-text">
            No negativity, no disruption — just brand messages aligned with joy.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="section-heading">
            3. Advertising Formats
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="subsection-heading">
                Feed-Integrated Placements
              </h3>
              <p className="body-text ml-0">
                Seamless, humor-friendly visuals that align with the content flow.
              </p>
            </div>

            <div>
              <h3 className="subsection-heading">
                Backtrackable Reminder Banners
              </h3>
              <p className="body-text ml-0">
                Subtle, revisit-friendly banners offering ongoing brand recall.
              </p>
            </div>

            <div>
              <h3 className="subsection-heading">
                Branded Comedy Challenges
              </h3>
              <p className="body-text ml-0 mb-2">
                Sponsor competitions such as:
              </p>
              <ul className="ml-8 space-y-1">
                <li className="list-item">Best Joke of the Week</li>
                <li className="list-item">Monthly or seasonal talent challenges</li>
                <li className="list-item">Annual performance awards</li>
              </ul>
              <p className="body-text ml-0 mt-3">
                Your brand becomes part of the entertainment.
              </p>
            </div>

            <div>
              <h3 className="subsection-heading">
                Creator Collaborations
              </h3>
              <p className="body-text ml-0 mb-2">
                Partner with rising comedic creators to develop:
              </p>
              <ul className="ml-8 space-y-1">
                <li className="list-item">sponsored videos</li>
                <li className="list-item">custom scripts</li>
                <li className="list-item">humorous brand moments</li>
              </ul>
              <p className="body-text ml-0 mt-3">
                Campaigns feel organic, not forced.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="section-heading">
            4. Sponsorship Opportunities
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="subsection-heading">
                Founding Sponsors Program
              </h3>
              <p className="body-text ml-0 mb-2">
                Early partners unlock:
              </p>
              <ul className="ml-8 space-y-1">
                <li className="list-item">long-term rate advantages</li>
                <li className="list-item">first access to new ad spaces</li>
                <li className="list-item">priority selection for categories & major events</li>
                <li className="list-item">co-branded seasonal activations</li>
              </ul>
            </div>

            <div>
              <h3 className="subsection-heading">
                Category Sponsorships
              </h3>
              <p className="body-text ml-0 mb-2">
                Own a vertical such as:
              </p>
              <ul className="ml-8 space-y-1">
                <li className="list-item">Food</li>
                <li className="list-item">Travel</li>
                <li className="list-item">Fashion</li>
                <li className="list-item">Tech</li>
                <li className="list-item">Wellness</li>
              </ul>
              <p className="body-text ml-0 mt-3">
                Your brand becomes part of the cultural conversation within that space.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="section-heading">
            5. Analytics With Integrity
          </h2>
          <p className="body-text mb-2">
            We reject inflated metrics. Advertisers receive clear, honest reporting:
          </p>
          <ul className="ml-8 space-y-1 mb-4">
            <li className="list-item">Completed views</li>
            <li className="list-item">Engagement (laughs, shares, interactions)</li>
            <li className="list-item">Sentiment tracking (positive resonance)</li>
            <li className="list-item">Demographics & language insights</li>
            <li className="list-item">Transparent skip and view-through rates</li>
          </ul>
          <p className="body-text">
            Trust is built through transparency — and we lead with it.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="section-heading">
            6. Creative Partnership Approach
          </h2>
          <p className="body-text">
            Advertisers are not "clients." They are co-creators of joyful storytelling.
          </p>
          <p className="body-text">
            We welcome brands ready to experiment, innovate, and connect with audiences authentically through humor and positivity.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-12">
          <h2 className="section-heading">
            7. Why Join Us Now
          </h2>
          <p className="body-text">
            La La Laugh isn't just another platform. It's a movement away from digital toxicity and toward joy, humanity, and creative expression.
          </p>
          <p className="body-text mb-2">
            Early partners position themselves as:
          </p>
          <ul className="ml-8 space-y-1 mb-4">
            <li className="list-item">cultural pioneers</li>
            <li className="list-item">champions of positive entertainment</li>
            <li className="list-item">foundational voices in an emerging humor ecosystem</li>
          </ul>
          <p className="body-text mb-8">
            This is the beginning of a new era in social entertainment. Let's build it together.
          </p>
          
          <div className="pt-6 mt-8">
            <p className="body-text font-semibold mb-2">
              Contact Our Advertising Team
            </p>
            <p className="body-text">
              Interested in advertising with La La Laugh? We'd love to hear from you!<br />
              Ideas to Move Forward LLC<br />
              Advertising Department<br />
              1309 Coffeen Avenue, STE 1200<br />
              Sheridan, WY 82801, USA
            </p>
            <p className="body-text">
              Email:{" "}
              <a
                href="mailto:advertising@lalalaugh.com"
                className="text-[#3931C5] hover:underline"
              >
                advertising@lalalaugh.com
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
              href="https://www.tiktok.com/@lalalaughapp"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://www.linkedin.com/company/109815478/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
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
            <a
              href="https://www.instagram.com/lalalaughapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583015866921&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}