import featureImage1 from "../assets/images/features/image1.png";
import featureImage2 from "../assets/images/features/image2.png";
import featureImage3 from "../assets/images/features/image3.png";
import cameraIcon from "../assets/images/features/Camera.png";
import fileTextIcon from "../assets/images/features/FileText.png";
import downloadIcon from "../assets/images/features/DownloadSimple.png";

export type FeatureStep = {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

export type FeaturesContent = {
  heading: string;
  description: string;
  steps: FeatureStep[];
};

export const featuresContent: FeaturesContent = {
  heading: "Process Our AI Inspection Follows",
  description:
    "From uploading photos to receiving a detailed AI-generated report, our process makes home inspections fast, accurate, and hassle-free. Detect damage, assess risks, estimate repair costs, and get instant guidance-all within minutes.",
  steps: [
    {
      id: "capture-import",
      title: "Capture or Import Photo",
      description:
        "Take pictures of your home using your camera or select them from your gallery.",
      iconSrc: cameraIcon,
      imageSrc: featureImage1,
      imageAlt: "Upload inspection photos screen",
    },
    {
      id: "ai-report",
      title: "AI Damage Detection & Report Generation",
      description:
        "Our AI analyzes the images, identifies damaged areas, assesses risk levels, and provides an estimated repair cost.",
      iconSrc: fileTextIcon,
      imageSrc: featureImage2,
      imageAlt: "AI generated damage report screen",
      reverse: true,
    },
    {
      id: "download-chat",
      title: "Download & Chat with AI",
      description:
        "Get your detailed inspection report instantly. Download it for reference, and chat with the AI to clarify any part of the report or ask questions.",
      iconSrc: downloadIcon,
      imageSrc: featureImage3,
      imageAlt: "Download report and chat screen",
    },
  ],
};
