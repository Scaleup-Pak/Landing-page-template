import logo from "../assets/images/common/logo.svg";

export type HeaderNavLink = {
  href: string;
  label: string;
};

export type HeaderContent = {
  logoSrc: string;
  logoAlt: string;
  ctaText: string;
  ctaHref: string;
  navLinks: HeaderNavLink[];
  activeSections: string[];
};

export const headerContent: HeaderContent = {
  logoSrc: logo,
  logoAlt: "AI Home Inspection logo",
  ctaText: "Contact Us",
  ctaHref: "#contact",
  navLinks: [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faqs", label: "FAQ's" },
  ],
  activeSections: [
    "#about",
    "#how-it-works",
    "#features",
    "#testimonials",
    "#faqs",
    "#contact",
  ],
};
