import footerLogo from "../assets/images/common/logo.svg";

export type TermsUseSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TermsUseContact = {
  title: string;
  addressLines: string[];
  email: string;
};

export type TermsOfUsePageContent = {
  logoSrc: string;
  logoAlt: string;
  pageTitle: string;
  intro: string;
  sections: TermsUseSection[];
  contact: TermsUseContact;
};

export const termsOfUsePageContent: TermsOfUsePageContent = {
  logoSrc: footerLogo,
  logoAlt: "LA LA LAUGH Logo",
  pageTitle: "Terms of Use & Privacy Policy",
  intro:
    "Welcome to La La Laugh! These Terms of Use (\"Terms\") govern your access to and use of the La La Laugh app and related services (the \"Service\"). By creating an account or using the Service, you agree to these Terms and our Privacy Policy.",
  sections: [
    {
      title: "1. The La La Laugh Service",
      paragraphs: [
        "La La Laugh is the world's first social entertainment platform built to share humor and connect people through laughter. Our mission is to create joy and foster community in a safe and inclusive environment.",
        "The Service includes:",
      ],
      bullets: [
        "Tools for users to create, share, and discover jokes, comedy, and parody.",
        "Community features to help users connect and build an audience.",
        "Systems for brand partnerships, advertising, and monetization for creators.",
        "Inclusive innovations such as a patented left-hand toggle and accessibility features.",
      ],
    },
    {
      title: "2. Eligibility",
      bullets: [
        "You must be at least 13 years old to use La La Laugh.",
        "If you are under 18, you represent that you have parental/guardian consent.",
        "Certain features may not be available in all regions due to local laws.",
      ],
    },
    {
      title: "3. User-Generated Content (UGC)",
      paragraphs: [
        "La La Laugh is a humor-first platform. By posting, you agree that:",
      ],
      bullets: [
        "You own or have the rights to the content you post.",
        "Content must be comedic, parody, or humor-focused. Content that violates this will be removed.",
        "You may not post harmful, hateful, violent, sexually explicit, or illegal material.",
        "You may not post private/confidential information without consent.",
        "You are responsible for ensuring your content does not infringe intellectual property rights.",
        "We retain the right to remove or restrict content that violates these Terms or our Community Guidelines.",
        "We may suspend or terminate accounts engaged in repeated or severe violations.",
        "We may cooperate with law enforcement where required.",
      ],
    },
    {
      title: "4. Moderation and Safety",
      bullets: [
        "La La Laugh provides in-app tools for reporting inappropriate or infringing content.",
        "Users may also block or mute accounts to control their experience.",
        "Reported content will be reviewed, and appropriate action will be taken, including removal or suspension.",
        "While we aim to foster a positive community, you may encounter content you find offensive. We do not guarantee that all such content will be removed immediately.",
      ],
    },
    {
      title: "5. Privacy Policy",
      paragraphs: [
        "Providing our Service requires collecting and processing some of your information.",
        "We collect:",
      ],
      bullets: [
        "Account information (name, email, username).",
        "Content you share (text, images, video).",
        "Device and usage data (log-ins, activity, settings).",
        "We use your data to operate, improve, and secure the Service.",
        "We use your data to personalize your experience.",
        "We use your data to provide creator monetization and advertising features.",
        "We do not sell your personal information. We may share anonymized or aggregated data with advertisers to improve relevance.",
        "You may request deletion of your account and data at any time via in-app settings or by contacting support@lalalaugh.com.",
        "We comply with Apple's App Tracking Transparency (ATT) rules. If we use IDFA or third-party ad tracking, you will be asked for explicit consent.",
      ],
    },
    {
      title: "6. Monetization and Advertising",
      bullets: [
        "La La Laugh is free to use.",
        "Ads may appear on the platform. Advertisers may target ads, but your personal information (e.g., email, phone number) will not be shared without your consent.",
        "Creators may monetize content through our Creator Program, including ads, tips, challenges, and brand collaborations.",
        "La La Laugh reserves the right to run its own promotional content and campaigns.",
      ],
    },
    {
      title: "7. Restrictions",
      paragraphs: ["You agree not to:"],
      bullets: [
        "Use the Service for unlawful purposes.",
        "Harass, exploit, or harm others.",
        "Circumvent moderation or security systems.",
        "Use bots, scrapers, or unauthorized automation.",
        "Sell, rent, or trade accounts or user data.",
      ],
    },
    {
      title: "8. Intellectual Property",
      bullets: [
        "You retain ownership of content you post.",
        "By posting, you grant La La Laugh a non-exclusive, worldwide, royalty-free license to host, display, and promote your content for the operation of the Service. This license ends when your content is deleted.",
        "Our logos, trademarks, and app design remain the property of Ideas to Move Forward LLC.",
      ],
    },
    {
      title: "9. Content Removal and Account Termination",
      paragraphs: [
        "We may suspend or terminate accounts, remove content, or restrict access if:",
      ],
      bullets: [
        "You violate these Terms or Community Guidelines.",
        "Your actions create legal risk for La La Laugh or its users.",
        "You infringe intellectual property repeatedly.",
      ],
    },
    {
      title: "10. Disclaimer of Warranties and Limitation of Liability",
      bullets: [
        "The Service is provided \"as is\" without warranties of any kind.",
        "We are not responsible for user-generated content.",
        "To the maximum extent permitted by law, La La Laugh is not liable for damages, lost profits, or data.",
      ],
    },
    {
      title: "11. Arbitration and Dispute Resolution",
      bullets: [
        "Disputes must be resolved by binding arbitration, except where small claims or intellectual property issues apply.",
        "You may opt out of arbitration by contacting us within 30 days of acceptance of these Terms.",
      ],
    },
    {
      title: "12. Updates",
      paragraphs: [
        "We may update these Terms and Privacy Policy. Users will be notified in-app or via email, and continued use of the Service constitutes acceptance of the updated Terms.",
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    addressLines: [
      "Ideas to Move Forward LLC",
      "1309 Coffeen Avenue, STE 1200",
      "Sheridan, Wyoming 82801",
    ],
    email: "support@lalalaugh.com",
  },
};
