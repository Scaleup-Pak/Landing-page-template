import { Link } from "react-router-dom";
import FooterLogo from "../assets/footerlogo.png";

export function Advertiser() {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo and Title Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 pt-6 sm:pt-8 pb-4 sm:pb-6">
        <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-[#3931C5] focus:ring-offset-2">
          <img
            src={FooterLogo}
            alt="LA LA LAUGH Logo"
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          />
        </Link>
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px] font-bold text-black"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Advertising on La La Laugh
        </h1>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 pb-8 sm:pb-12 md:pb-16">
        <div style={{ fontFamily: "Nunito, sans-serif" }}>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-6 sm:mb-8 text-gray-500"
            style={{ fontWeight: 500, lineHeight: "1.447" }}
          >
            Welcome to La La Laugh's Advertising Platform! Our mission is to connect brands with our vibrant community of humor enthusiasts. Whether you're a local business or a global brand, La La Laugh offers unique opportunities to engage with an audience that values creativity, laughter, and authentic connections.
          </p>

          {/* Section 1 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-3 sm:mb-4 font-bold text-black"
            >
              1. Why Advertise on La La Laugh?
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-3 sm:mb-4 text-gray-500"
              style={{ fontWeight: 500, lineHeight: "1.447" }}
            >
              La La Laugh is more than just a social platform—it's a movement built around humor and human connection. Our advertising solutions are designed to:
            </p>
            <ul className="pl-6 space-y-2">
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Reach an engaged audience of millions who actively seek entertainment and joy
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Leverage authentic, user-generated content that resonates with our community
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Drive meaningful engagement through humor-focused campaigns
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Build brand loyalty with positive, laughter-driven associations
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-3 sm:mb-4 font-bold text-black"
            >
              2. Advertising Formats
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-3 sm:mb-4 text-gray-500"
              style={{ fontWeight: 500, lineHeight: "1.447" }}
            >
              We offer a variety of advertising formats to suit different campaign goals and budgets:
            </p>
            <ul className="pl-6 space-y-2">
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • <strong>In-Feed Ads:</strong> Native advertisements that blend seamlessly with user content
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • <strong>Story Sponsorships:</strong> Branded content integrated into user-generated stories
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • <strong>Challenge Campaigns:</strong> Interactive brand challenges that encourage user participation
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • <strong>Creator Partnerships:</strong> Collaborate with popular creators for authentic brand storytelling
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-3 sm:mb-4 font-bold text-black"
            >
              3. Targeting and Measurement
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-3 sm:mb-4 text-gray-500"
              style={{ fontWeight: 500, lineHeight: "1.447" }}
            >
              Our advanced targeting capabilities ensure your ads reach the right audience:
            </p>
            <ul className="pl-6 space-y-2">
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Demographic targeting (age, location, interests)
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Behavioral targeting based on user engagement patterns
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Lookalike audiences for expanded reach
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Real-time performance analytics and reporting
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-3 sm:mb-4 font-bold text-black"
            >
              4. Campaign Guidelines
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-3 sm:mb-4 text-gray-500"
              style={{ fontWeight: 500, lineHeight: "1.447" }}
            >
              To maintain our positive community environment, all advertising campaigns must adhere to our guidelines:
            </p>
            <ul className="pl-6 space-y-2">
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Content must be appropriate and align with our community values
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • No misleading or deceptive advertising practices
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Respect for user privacy and data protection standards
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Compliance with all applicable advertising laws and regulations
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-3 sm:mb-4 font-bold text-black"
            >
              5. Getting Started
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-3 sm:mb-4 text-gray-500"
              style={{ fontWeight: 500, lineHeight: "1.447" }}
            >
              Ready to launch your campaign on La La Laugh? Here's how to get started:
            </p>
            <ul className="pl-6 space-y-2">
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Contact our advertising team at{" "}
                <a
                  href="mailto:advertising@lalalaugh.com"
                  className="text-[#3931C5] hover:underline"
                >
                  advertising@lalalaugh.com
                </a>
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Schedule a consultation to discuss your campaign objectives
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Receive a customized proposal with targeting recommendations
              </li>
              <li
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
                style={{ fontWeight: 500, lineHeight: "1.447" }}
              >
                • Launch your campaign with our dedicated account management support
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-8 sm:mb-12">
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-3 sm:mb-4 font-bold text-black"
            >
              6. Contact Our Advertising Team
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-3 sm:mb-4 text-gray-500"
              style={{ fontWeight: 500, lineHeight: "1.447" }}
            >
              Ideas to Move Forward LLC
              <br />
              Advertising Department
              <br />
              1309 Coffeen Avenue, STE 1200
              <br />
              Sheridan, WY 82801, USA
            </p>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500"
              style={{ fontWeight: 500, lineHeight: "1.447" }}
            >
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
      <div className="bg-white">
        <div className="mt-8 px-4 sm:px-6 md:px-8 lg:pl-16 lg:pr-12 xl:pl-24 xl:pr-16 2xl:pl-[110px] sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-[#CCCCCC] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pb-6">
          <p
            style={{ fontFamily: "Nunito, sans-serif" }}
            className="text-[#00000066] text-xs sm:text-[20px] text-center sm:text-left"
          >
            Lalalaugh @ all rights reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://www.youtube.com/@lalalaughapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[#999999] hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[#999999] hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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