import howItWorksImage from "../assets/images/howitworks/howitworks.png";
import riskIcon from "../assets/images/howitworks/mage_goals-fill.png";
import reportIcon from "../assets/images/howitworks/Frame.png";
import chatIcon from "../assets/images/howitworks/DiscordLogo.png";
import estimateIcon from "../assets/images/howitworks/Calculator.png";

export type HowItWorksFeature = {
  icon: "risk" | "report" | "chat" | "estimate";
  iconSrc: string;
  title: string;
  description: string;
};

export type HowItWorksContent = {
  heading: string;
  description: string;
  leftPanel: {
    primaryAction: string;
    primaryActionHref: string;
    secondaryAction: string;
    secondaryActionHref: string;
    imageSrc: string;
    imageAlt: string;
  };
  features: HowItWorksFeature[];
};

export const howItWorksContent: HowItWorksContent = {
  heading: "Advanced AI Inspection Features for Your Home",
  description:
    "Our AI app makes home inspections effortless-detecting damage, assessing risks, estimating repair costs, and providing instant actionable insights.",
  leftPanel: {
    primaryAction: "Download Report",
    primaryActionHref:
      "https://play.google.com/store/apps/details?id=com.coachmendai.app&pcampaignid=web_share",
    secondaryAction: "Chat with Ai Inspector",
    secondaryActionHref:
      "https://apps.apple.com/us/app/mend-pain-relief-wellness/id6754682775",
    imageSrc: howItWorksImage,
    imageAlt: "AI home inspection app screen preview",
  },
  features: [
    {
      icon: "risk",
      iconSrc: riskIcon,
      title: "Damage Detection & Risk Assessment",
      description:
        "Understand the severity of detected damage with clear risk levels, helping you prioritize repairs effectively.",
    },
    {
      icon: "report",
      iconSrc: reportIcon,
      title: "Quick Reports",
      description:
        "Receive comprehensive inspection reports in minutes, eliminating the need for time-consuming physical inspections.",
    },
    {
      icon: "chat",
      iconSrc: chatIcon,
      title: "AI Home Inspector",
      description:
        "Clarify any part of your inspection report instantly by chatting with the AI for personalized guidance.",
    },
    {
      icon: "estimate",
      iconSrc: estimateIcon,
      title: "Repair Estimates",
      description:
        "Get accurate cost estimates for repairs, allowing you to plan and budget with confidence.",
    },
  ],
};
