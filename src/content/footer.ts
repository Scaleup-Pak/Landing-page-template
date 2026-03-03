import logo from "../assets/images/common/logo.svg";
import playstoreIcon from "../assets/images/common/playstore.png";
import appleIcon from "../assets/images/common/applelogo.png";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterStoreButton = {
  id: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
  eyebrow: string;
  label: string;
  ariaLabel: string;
};

export type FooterSocialLink = {
  id: "youtube" | "tiktok" | "linkedin" | "instagram" | "facebook";
  href: string;
  ariaLabel: string;
};

export type FooterContent = {
  brand: {
    logoSrc: string;
    logoAlt: string;
    description: string;
  };
  download: {
    heading: string;
    storeButtons: FooterStoreButton[];
  };
  company: {
    heading: string;
    links: FooterLink[];
  };
  importantLinks: {
    heading: string;
    links: FooterLink[];
  };
};

export const footerContent: FooterContent = {
  brand: {
    logoSrc: logo,
    logoAlt: "AI Home Inspection logo",
    description:
      "AI Home Inspection helps homeowners detect property damage instantly using AI-powered image analysis. Upload photos, receive a detailed risk assessment with repair cost estimates, and chat with AI for clarity - all in minutes.",
  },
  download: {
    heading: "Download App",
    storeButtons: [
      {
        id: "google-play",
        href: "https://play.google.com/store/apps/details?id=com.coachmendai.app&pcampaignid=web_share",
        iconSrc: playstoreIcon,
        iconAlt: "Google Play",
        eyebrow: "GET IT ON",
        label: "Google Play",
        ariaLabel: "Download on Google Play",
      },
      {
        id: "app-store",
        href: "https://apps.apple.com/us/app/mend-pain-relief-wellness/id6754682775",
        iconSrc: appleIcon,
        iconAlt: "App Store",
        eyebrow: "Download On the",
        label: "App Store",
        ariaLabel: "Download on the App Store",
      },
    ],
  },
  company: {
    heading: "Company",
    links: [
      { label: "How it Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ's", href: "#faqs" },
    ],
  },
  importantLinks: {
    heading: "Important Links",
    links: [
      { label: "Terms of use & Privacy Policy", href: "/terms" },
      { label: "Terms of Contents", href: "/content-terms" },
      { label: "Contact Us", href: "#contact" },
    ],
  }
};
