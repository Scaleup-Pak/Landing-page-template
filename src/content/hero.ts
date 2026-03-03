import heroImage from "../assets/images/hero/hero.png";

export type StoreButtonContent = {
  eyebrow: string;
  label: string;
  ariaLabel: string;
  href: string;
};

export type HeroContent = {
  headline: {
    accent: string;
    lineOne: string;
    lineTwo: string;
  };
  description: string;
  storeButtons: {
    googlePlay: StoreButtonContent;
    appStore: StoreButtonContent;
  };
  imageSrc: string;
  previewImageLink: string;
  imageAlt: string;
};

export const heroContent: HeroContent = {
  headline: {
    accent: "Smarter",
    lineOne: "Home Maintenance",
    lineTwo: "Starts Here",
  },
  description:
    "Easily upload photos of your property and let our advanced AI analyze every detail. Receive a comprehensive report with risk levels, damage identification, and repair cost estimates-fast and accurate.",
  storeButtons: {
    googlePlay: {
      eyebrow: "GET IT ON",
      label: "Google Play",
      ariaLabel: "Download on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.coachmendai.app&pcampaignid=web_share",
    },
    appStore: {
      eyebrow: "Download On the",
      label: "App Store",
      ariaLabel: "Download on the App Store",
      href: "https://apps.apple.com/us/app/mend-pain-relief-wellness/id6754682775",
    },
  },
  imageSrc: heroImage,
  previewImageLink:
    "https://apps.apple.com/us/app/mend-pain-relief-wellness/id6754682775",
  imageAlt: "AI home inspection mobile app preview",
};
