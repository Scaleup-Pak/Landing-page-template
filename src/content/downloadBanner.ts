import playstoreIcon from "../assets/images/common/playstore.png";
import appleIcon from "../assets/images/common/applelogo.png";
import bannerImage from "../assets/images/downloadbanner/banner.png";

export type DownloadStoreButton = {
  id: string;
  iconSrc: string;
  iconAlt: string;
  eyebrow: string;
  label: string;
  href: string;
  ariaLabel: string;
};

export type DownloadBannerContent = {
  previewImageSrc: string;
  previewImageAlt: string;
  heading: string;
  description: string;
  storeButtons: DownloadStoreButton[];
};

export const downloadBannerContent: DownloadBannerContent = {
  previewImageSrc: bannerImage,
  previewImageAlt: "Lalalaugh app download section preview",
  heading: "Download the AI Home Inspection App",
  description: "Download AI Home Inspection App today and Inspect Your Home.",
  storeButtons: [
    {
      id: "google-play",
      iconSrc: playstoreIcon,
      iconAlt: "Google Play Store icon",
      eyebrow: "GET IT ON",
      label: "Google Play",
      ariaLabel: "Download on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.coachmendai.app&pcampaignid=web_share",
    },
    {
      id: "app-store",
      iconSrc: appleIcon,
      iconAlt: "Apple App Store icon",
      eyebrow: "Download On the",
      label: "App Store",
      ariaLabel: "Download on the App Store",
      href: "https://apps.apple.com/us/app/mend-pain-relief-wellness/id6754682775",
    },
  ],
};
