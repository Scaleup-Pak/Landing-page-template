import { Link } from "react-router-dom";
import FooterLogo from "../assets/footerlogo.png";

export function Advertiser() {
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
          style={{ fontFamily: "Nunito, sans-serif", lineHeight: "1.2" }}
        >
          LA LA LAUGH — ADVERTISERS & SPONSORS PROPOSAL
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-[28px] font-bold text-[#3931C5]">
          Humor Sells — and does it well.
        </p>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[110px] pb-12 sm:pb-16">
        <div style={{ fontFamily: "Nunito, sans-serif" }}>
          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] mb-12 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            <strong className="text-black">A Joy-Driven Advertising Experience for a New Generation</strong>
          </p>

          {/* 1. Introduction */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mb-6">
            1. Where Brands Meet Joy
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-700 mb-8" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            La La Laugh is built on one core belief:<br />
            <strong>If you understand people, you understand business.</strong>
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-500 mb-10" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            People come to us to reset, laugh, and feel good. Brands that join us early connect with audiences in their happiest, most receptive moments.
          </p>

          <div className="bg-[#F8F8F8] rounded-2xl p-6 sm:p-8 lg:p-12 mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-black mb-6">Why Humor Wins</h3>
            <ul className="space-y-4 text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-600" style={{ fontWeight: 500 }}>
              <li>90% of people remember brands that use humor</li>
              <li>70% prefer a brand that’s funny</li>
              <li>80% are more likely to buy again if a brand makes them laugh</li>
            </ul>
            <p className="mt-6 text-lg sm:text-xl lg:text-[26px] font-semibold text-black">
              Advertising on La La Laugh isn’t just reach — it’s positive emotional impact.
            </p>
          </div>

          {/* 2. Philosophy */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mb-6">
            2. Our Advertising Philosophy
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-500 mb-12" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            We create an environment where ads feel natural, light, and welcome.<br />
            No negativity. No disruption. Just brand messages perfectly aligned with joy.
          </p>

          {/* 3. Formats */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mb-8">
            3. Advertising Formats
          </h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black mb-3">Feed-Integrated Placements</h3>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px]" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                Seamless, humor-friendly visuals that blend naturally into the content flow.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black mb-3">Backtrackable Reminder Banners</h3>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px]" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                Subtle, revisit-friendly banners that keep your brand top-of-mind.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black mb-3">Branded Comedy Challenges</h3>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px]" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                Sponsor fun competitions like Best Joke of the Week, monthly talent challenges, or annual awards. Your brand becomes part of the entertainment.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black mb-3">Creator Collaborations</h3>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px]" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                Partner with rising comedic talent for sponsored videos, custom scripts, and authentic humorous brand moments that never feel forced.
              </p>
            </div>
          </div>

          {/* 4. Sponsorship Opportunities */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mt-12 mb-8">
            4. Sponsorship Opportunities
          </h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black mb-3">Founding Sponsors Program</h3>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px]" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                Early partners enjoy long-term rate advantages, first access to new ad spaces, priority category selection, and co-branded seasonal activations.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black mb-3">Category Sponsorships</h3>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px]" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                Exclusively own a vertical: Food • Travel • Fashion • Tech • Wellness<br />
                Your brand becomes the cultural voice of that space.
              </p>
            </div>
          </div>

          {/* 5. Analytics */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mt-12 mb-6">
            5. Analytics With Integrity
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px] mb-8" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            We reject inflated metrics. You get honest, transparent reporting:
          </p>
          <ul className="pl-6 space-y-3 text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            <li>• Completed views</li>
            <li>• Engagement (laughs, shares, interactions)</li>
            <li>• Sentiment tracking (positive resonance)</li>
            <li>• Demographics & language insights</li>
            <li>• Transparent skip and view-through rates</li>
          </ul>

          {/* 6. Creative Partnership */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mt-12 mb-6">
            6. Creative Partnership Approach
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px] mb-12" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            Advertisers aren’t “clients” — they’re co-creators of joyful storytelling.<br />
            We welcome brands ready to experiment, innovate, and connect authentically through humor and positivity.
          </p>

          {/* 7. Why Join Now */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mt-12 mb-6">
            7. Why Join Us Now
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px] leading-relaxed" style={{ fontWeight: 500, lineHeight: "1.447" }}>
            La La Laugh isn’t just another platform.<br />
            It’s a movement away from digital toxicity and toward joy, humanity, and creative expression.<br /><br />
            Early partners position themselves as cultural pioneers, champions of positive entertainment, and foundational voices in an emerging humor ecosystem.<br /><br />
            <strong className="text-black text-lg sm:text-xl lg:text-[28px]">
              This is the beginning of a new era in social entertainment.<br />
              Let’s build it together.
            </strong>
          </p>
        </div>
      </div>

      {/* Footer – Same as Terms page */}
      <div className="bg-white">
        <div className="mt-8 px-4 sm:px-6 md:px-8 lg:pl-16 lg:pr-12 xl:pl-24 xl:pr-16 2xl:pl-[110px] sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-[#CCCCCC] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pb-6">
          <p
            style={{ fontFamily: "Nunito, sans-serif" }}
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