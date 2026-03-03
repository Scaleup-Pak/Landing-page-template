export type LegalFooterSocialLink = {
  id: "youtube" | "tiktok" | "linkedin" | "instagram" | "facebook";
  href: string;
  ariaLabel: string;
};

export type LegalFooterContent = {
  copyright: string;
  socialLinks: LegalFooterSocialLink[];
};

export const legalFooterContent: LegalFooterContent = {
  copyright: "AI Home Inspection @ all rights reserved",
  socialLinks: [
    {
      id: "youtube",
      href: "https://www.youtube.com/@lalalaughapp",
      ariaLabel: "YouTube",
    },
    {
      id: "tiktok",
      href: "https://www.tiktok.com/@lalalaughapp",
      ariaLabel: "TikTok",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/company/109815478/admin/dashboard/",
      ariaLabel: "LinkedIn",
    },
    {
      id: "instagram",
      href: "https://www.instagram.com/lalalaughapp/",
      ariaLabel: "Instagram",
    },
    {
      id: "facebook",
      href: "https://www.facebook.com/profile.php?id=61583015866921&sk=about",
      ariaLabel: "Facebook",
    },
  ],
};
