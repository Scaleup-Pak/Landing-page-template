import { Link } from "react-router-dom";
import FooterLogo from "../assets/footerlogo.png";

export function TermsOfContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo and Title Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[110px] pt-6 sm:pt-8 pb-4 sm:pb-6">
        <Link to="/">
          <img
            src={FooterLogo}
            alt="LA LA LAUGH Logo"
            className="w-20 sm:w-24 md:w-28 lg:w-32 mb-8 sm:mb-12 md:mb-[70px]"
          />
        </Link>
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px]"
          style={{
            fontFamily: "Nunito, sans-serif",
            color: "#000000",
            fontWeight: 700,
            lineHeight: "1.2",
          }}
        >
          Terms of Content
        </h1>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[110px] pb-8 sm:pb-12">
        <div style={{ fontFamily: "Nunito, sans-serif" }}>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-[24px] mb-6 sm:mb-8"
            style={{
              color: "rgba(0, 0, 0, 0.50)",
              fontWeight: 500,
              lineHeight: "144.7%",
            }}
          >
            This Privacy Policy describes how LA LA Laugh collects, uses, and
            shares information when you use our web application. By using the
            web App, you agree to the collection and use of information in
            accordance with this Privacy Policy.
          </p>

          {/* Section 1 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-3 sm:mb-4"
              style={{
                color: "#000",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              1. Introduction
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              Welcome to Beautify! Your privacy is important to us. This Privacy
              Policy explains how we collect, use, and protect your information
              when you use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-3 sm:mb-4"
              style={{
                color: "#000",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              2. Information We Collect
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px] mb-2 sm:mb-3"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              We collect the following data when you use our services:
            </p>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px] mb-2"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              - Personal Information: Name, email address, and payment details.
            </p>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              - Usage Data: Information about how you interact with our software,
              including image uploads and downloads.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-3 sm:mb-4"
              style={{
                color: "#000",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              3. How We Use Your Information
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px] mb-2 sm:mb-3"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              We use the collected data to:
            </p>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px] mb-2"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              - Provide and improve our services.
            </p>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px] mb-2"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              - Conduct analytics and research.
            </p>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              - Communicate with you regarding updates, promotions, and customer
              support.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-3 sm:mb-4"
              style={{
                color: "#000",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              4. Data Sharing
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              We do not share, sell, or rent your personal data to third parties.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-3 sm:mb-4"
              style={{
                color: "#000",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              5. Data Retention & Deletion
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              You may delete your account and payment information at any time.
              Upon deletion, we will remove your data from our systems, except
              for legally required retention.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-3 sm:mb-4"
              style={{
                color: "#000",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              6. Security Measures
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              We implement industry-standard security measures to protect your
              data from unauthorized access, alteration, or loss.
            </p>
          </div>

          {/* Section 7 - Your Rights */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-3 sm:mb-4"
              style={{
                color: "#000",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              7. Your Rights
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px] mb-2 sm:mb-3"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              As a user, you have the right to:
            </p>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px] mb-2"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              - Access and update your data.
            </p>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              - Request account and data deletion.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-3 sm:mb-4"
              style={{
                color: "#000",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              8. Legal Compliance
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              Lumashape operates in the USA and complies with applicable U.S.
              data privacy laws.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-8 sm:mb-12">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-3 sm:mb-4"
              style={{
                color: "#000",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              9. Contact Information
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                color: "rgba(0, 0, 0, 0.50)",
                fontWeight: 500,
                lineHeight: "144.7%",
              }}
            >
              If you have any questions, contact us at:{" "}
              <a
                href="mailto:support@lalalaugh.com"
                style={{ color: "#3931C5", textDecoration: "none" }}
              >
                support@lalalaugh.com
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
            Lalalaughteams @ all rights reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#"
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
            <a
              href="www/youtube.com"
              className="text-[#999999] hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
