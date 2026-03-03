

import { Link } from "react-router-dom";
import FooterLogo from "../assets/footerlogo.png";

export function CreatorProposal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo and Title Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[110px] pt-6 sm:pt-8 pb-4 sm:pb-6">
        <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-[#3931C5] focus:ring-offset-2">
          <img
            src={FooterLogo}
            alt="LA LA LAUGH Logo"
            className="w-20 sm:w-24 md:w-28 lg:w-32 mb-8 sm:mb-12 md:mb-[70px] h-auto"
          />
        </Link>
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-black"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.2" }}
        >
          LA LA LAUGH — CREATORS’ PROPOSAL
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-[28px] font-bold text-[#3931C5]">
          The world’s first Social Entertainment platform built for joy, creators,<br className="hidden sm:block" />
          and a healthier digital culture.
        </p>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[110px] pb-12 sm:pb-16">
        <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>

          {/* 1. Introduction */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mb-6 mt-10">
            1. Why La La Laugh Exists
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-500 mb-8" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            La La Laugh was created to disrupt the current social media landscape by offering something radically simple:<br />
            <strong className="text-black">pure entertainment, good energy, and a platform that respects creators.</strong>
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-500 mb-10" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            People don’t need more pressure or toxicity — they need a break.<br />
            La La Laugh is the <strong>Take-a-Break App</strong> — a joyful escape designed for a better human experience.
          </p>

          <div className="bg-[#F8F8F8] rounded-2xl p-6 sm:p-8 lg:p-12 mb-12">
            <p className="text-lg sm:text-xl lg:text-[26px] font-semibold text-black leading-relaxed">
              As a company, we commit to staying simple, lean, and profitable from day one.<br />
              Creators are the core of the creator economy — so everything we build puts you first.
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-500 mb-10" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            Our Founder & CEO believes strongly in:
          </p>
          <ul className="pl-6 space-y-3 text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-600 mb-12" style={{ fontWeight: 500 }}>
            <li>• Prioritizing high-quality advertising over chasing investors</li>
            <li>• Sustainable growth — not endless funding rounds</li>
            <li>• Transparency, simplicity, and real revenue for creators</li>
            <li>• No arbitrary rules or algorithmic manipulation</li>
            <li>• Honoring user choice — no unnecessary censorship</li>
            <li>• Restoring real human connection</li>
            <li>• Humor is medicine in a polarized world</li>
          </ul>

          {/* 2. Roadmap */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mb-6">
            2. Our Development Roadmap — Two Phases (Phase 3 Already in Vision)
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black mb-4">Phase 1 — Launch & Growth</h3>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px]" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                We grow an authentic, joy-driven community while staying sustainable.
              </p>
              <ul className="pl-6 mt-4 space-y-2 text-gray-600 text-base sm:text-lg md:text-xl lg:text-[24px]" style={{ fontWeight: 500 }}>
                <li>• Build a positive, humor-first environment</li>
                <li>• Feature early creators to help you grow</li>
                <li>• Operate via sponsorships — no compromise on values</li>
                <li>• Stay lean, transparent, and community-driven</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black mb-4">Phase 2 — Monetization for Creators (One of the Fairest in the Industry)</h3>
              <ul className="space-y-6 text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-600" style={{ fontWeight: 500 }}>
                <li><strong>A. Laugh Coins</strong> → Creators earn 55%–80% of all in-app tips</li>
                <li><strong>B. Revenue Share on Advertising</strong><br />
                  • 60% for everyone<br />
                  • 65% for performance milestones<br />
                  • 70% lifetime share on viral hits</li>
                <li><strong>C. Best Joke Awards</strong><br />
                  Daily • Weekly • Monthly • Yearly cash & visibility rewards</li>
                <li><strong>D. Creator Tools</strong><br />
                  Sponsorship dashboard • Affiliate features • Transparent real metrics</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black mb-4">Phase 3 — Innovation & The Creators’ Bill of Rights</h3>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px]" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                Proprietary systems and a formal commitment to transparency, collaboration, and long-term creator empowerment.
              </p>
            </div>
          </div>

          {/* 3. Why Better */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mt-12 mb-6">
            3. Why La La Laugh Is Better Than Anything Else
          </h2>
          <ul className="pl-6 space-y-5 text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-600" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            <li>• Built-in sponsorship & brand management tools</li>
            <li>• 100% transparent metrics — no fake numbers, no black-box algorithms</li>
            <li>• Replaces doom-scrolling with joy = happier creators & better engagement</li>
            <li>• Early creators get priority access, boosted placement, and real influence</li>
          </ul>

          {/* 4. Mission */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mt-12 mb-6">
            4. Our Mission
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px] leading-relaxed" style={{ fontWeight: 500 }}>
            To create a positive, human-first entertainment experience that uplifts people, empowers creators, and rebuilds community through humor.
          </p>
          <p className="mt-6 text-lg sm:text-xl lg:text-[28px] font-bold text-black">
            La La Laugh is not built for addiction.<br />
            It’s built for joy.
          </p>

          {/* 5. Unlike Others */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mt-12 mb-6">
            5. And Unlike Other Platforms…
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px] mb-8" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            La La Laugh will <strong>never</strong> require:
          </p>
          <ul className="pl-6 space-y-3 text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-600" style={{ fontWeight: 500 }}>
            <li>• Minimum watch hours</li>
            <li>• Subscriber thresholds</li>
            <li>• Inflated or fake metrics</li>
            <li>• Confusing “eligibility reviews”</li>
          </ul>
          <p className="mt-8 text-lg sm:text-xl lg:text-[26px] font-bold text-black">
            We keep it simple.<br />
            We keep it fair.<br />
            We keep it human.
          </p>

          {/* 6. Conclusion */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mt-12 mb-6">
            6. Let’s Build the Happiest Platform Together
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px] leading-relaxed" style={{ fontWeight: 500 }}>
            La La Laugh is a movement — a shift toward healthier digital experiences, creator equity, and transparent entertainment.<br /><br />
            We invite comedians, storytellers, entertainers, and anyone who can spark joy to join us.<br /><br />
            <strong className="text-black text-lg sm:text-xl lg:text-[28px]">
              This is the beginning of a new era in social entertainment.<br />
              Let’s build it together.
            </strong>
          </p>
        </div>
      </div>

      {/* Footer — Identical to other pages */}
      <div className="bg-white">
        <div className="mt-8 px-4 sm:px-6 md:px-8 lg:pl-16 lg:pr-12 xl:pl-24 xl:pr-16 2xl:pl-[110px] sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-[#CCCCCC] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pb-6">
          <p
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            className="text-[#00000066] text-xs sm:text-[20px] text-center sm:text-left"
          >
            Lalalaughteams @ all rights reserved
          </p>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href="https://www.youtube.com/@lalalaughapp" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-[#3931C5] transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@lalalaughapp" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-[#3931C5] transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/109815478/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-[#3931C5] transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/lalalaughapp/" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-[#3931C5] transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583015866921&sk=about" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-[#3931C5] transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}