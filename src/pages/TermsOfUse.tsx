import { Link } from "react-router-dom";
import FooterLogo from "../assets/footerlogo.png";

export function TermsOfUse() {
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
          Terms of Use & Privacy Policy
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Effective Date: September 1st, 2024 | Entity: Ideas to Move Forward LLC
        </p>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 pb-8 sm:pb-12 md:pb-16">
        <div style={{ fontFamily: "Nunito, sans-serif" }}>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-8 text-gray-500"
            style={{ fontWeight: 500, lineHeight: "1.447" }}
          >
            Welcome to La La Laugh! These Terms of Use (“Terms”) govern your access to and use of the La La Laugh app and related services (the “Service”). By creating an account or using the Service, you agree to these Terms and our Privacy Policy.
          </p>

          {/* 1. The La La Laugh Service */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">1. The La La Laugh Service</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
              La La Laugh is the world’s first social entertainment platform built to share humor and connect people through laughter. Our mission is to create joy and foster community in a safe and inclusive environment.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
              The Service includes:
            </p>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Tools for users to create, share, and discover jokes, comedy, and parody.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Community features to help users connect and build an audience.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Systems for brand partnerships, advertising, and monetization for creators.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Inclusive innovations such as a patented left-hand toggle and accessibility features.</li>
            </ul>
          </div>

          {/* 2. Eligibility */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">2. Eligibility</h2>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• You must be at least 13 years old to use La La Laugh.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• If you are under 18, you represent that you have parental/guardian consent.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Certain features may not be available in all regions due to local laws.</li>
            </ul>
          </div>

          {/* 3. User-Generated Content (UGC) */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">3. User-Generated Content (UGC)</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
              La La Laugh is a humor-first platform. By posting, you agree that:
            </p>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• You own or have the rights to the content you post.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Content must be comedic, parody, or humor-focused. Content that violates this will be removed.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• You may not post harmful, hateful, violent, sexually explicit, or illegal material.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• You may not post private/confidential information without consent.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• You are responsible for ensuring your content does not infringe intellectual property rights.</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mt-6 mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
              We retain the right to:
            </p>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Remove or restrict content that violates these Terms or our Community Guidelines.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Suspend or terminate accounts engaged in repeated or severe violations.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Cooperate with law enforcement where required.</li>
            </ul>
          </div>

          {/* 4. Moderation and Safety */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">4. Moderation and Safety</h2>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• La La Laugh provides in-app tools for reporting inappropriate or infringing content.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Users may also block or mute accounts to control their experience.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Reported content will be reviewed, and appropriate action will be taken, including removal or suspension.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• While we aim to foster a positive community, you may encounter content you find offensive. We do not guarantee that all such content will be removed immediately.</li>
            </ul>
          </div>

          {/* 5. Privacy Policy */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">5. Privacy Policy</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
              Providing our Service requires collecting and processing some of your information.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>We collect:</p>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Account information (name, email, username).</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Content you share (text, images, video).</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Device and usage data (log-ins, activity, settings).</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mt-6 mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>We use your data to:</p>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Operate, improve, and secure the Service.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Personalize your experience.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Provide creator monetization and advertising features.</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mt-6 mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
              We do not sell your personal information. We may share anonymized or aggregated data with advertisers to improve relevance.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>Data Rights:</p>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                • You may request deletion of your account and data at any time via in-app settings or by contacting{" "}
                <a href="mailto:support@lalalaugh.com" className="text-[#3931C5] hover:underline">support@lalalaugh.com</a>.
              </li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                • We comply with Apple’s App Tracking Transparency (ATT) rules. If we use IDFA or third-party ad tracking, you will be asked for explicit consent.
              </li>
            </ul>
          </div>

          {/* 6. Monetization and Advertising */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">6. Monetization and Advertising</h2>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• La La Laugh is free to use.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Ads may appear on the platform. Advertisers may target ads, but your personal information (e.g., email, phone number) will not be shared without your consent.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Creators may monetize content through our Creator Program, including ads, tips, challenges, and brand collaborations.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• La La Laugh reserves the right to run its own promotional content and campaigns.</li>
            </ul>
          </div>

          {/* 7. Restrictions */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">7. Restrictions</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>You agree not to:</p>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Use the Service for unlawful purposes.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Harass, exploit, or harm others.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Circumvent moderation or security systems.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Use bots, scrapers, or unauthorized automation.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Sell, rent, or trade accounts or user data.</li>
            </ul>
          </div>

          {/* 8. Intellectual Property */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">8. Intellectual Property</h2>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• You retain ownership of content you post.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
                • By posting, you grant La La Laugh a non-exclusive, worldwide, royalty-free license to host, display, and promote your content for the operation of the Service. This license ends when your content is deleted.
              </li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Our logos, trademarks, and app design remain the property of Ideas to Move Forward LLC.</li>
            </ul>
          </div>

          {/* 9. Content Removal and Account Termination */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">9. Content Removal and Account Termination</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-4 text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
              We may suspend or terminate accounts, remove content, or restrict access if:
            </p>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• You violate these Terms or Community Guidelines.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Your actions create legal risk for La La Laugh or its users.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• You infringe intellectual property repeatedly.</li>
            </ul>
          </div>

          {/* 10. Disclaimer of Warranties and Limitation of Liability */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">10. Disclaimer of Warranties and Limitation of Liability</h2>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• The Service is provided “as is” without warranties of any kind.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• We are not responsible for user-generated content.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• To the maximum extent permitted by law, La La Laugh is not liable for damages, lost profits, or data.</li>
            </ul>
          </div>

          {/* 11. Arbitration and Dispute Resolution */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">11. Arbitration and Dispute Resolution</h2>
            <ul className="pl-6 space-y-2">
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• Disputes must be resolved by binding arbitration, except where small claims or intellectual property issues apply.</li>
              <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>• You may opt out of arbitration by contacting us within 30 days of acceptance of these Terms.</li>
            </ul>
          </div>

          {/* 12. Updates */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">12. Updates</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
              We may update these Terms and Privacy Policy. Users will be notified in-app or via email, and continued use of the Service constitutes acceptance of the updated Terms.
            </p>
          </div>

          {/* Contact Us */}
          <div className="mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 font-bold text-black">Contact Us</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-gray-500" style={{ fontWeight: 500, lineHeight: "1.447" }}>
              Ideas to Move Forward LLC<br />
              1309 Coffeen Avenue, STE 1200<br />
              Sheridan, Wyoming 82801<br /><br />
              Email: <a href="mailto:support@lalalaugh.com" className="text-[#3931C5] hover:underline">support@lalalaugh.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer (unchanged) */}
      <div className="bg-white">
        <div className="mt-8 px-4 sm:px-6 md:px-8 lg:pl-16 lg:pr-12 xl:pl-24 xl:pr-16 2xl:pl-[110px] sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-[#CCCCCC] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pb-6">
          <p style={{ fontFamily: "Nunito, sans-serif" }} className="text-[#00000066] text-xs sm:text-[20px] text-center sm:text-left">
            Lalalaughteams @ all rights reserved
          </p>
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
            href="https://www.tiktok.com/@lalalaughapp"
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://www.linkedin.com/company/109815478/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://www.instagram.com/lalalaughapp/"
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://www.facebook.com/profile.php?id=61583015866921&sk=about"
            target="_blank"
            rel="noopener noreferrer"
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