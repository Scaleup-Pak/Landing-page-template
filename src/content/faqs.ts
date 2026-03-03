export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqsContent = {
  heading: string;
  description: string;
  items: FaqItem[];
  defaultOpenId: string;
};

export const faqsContent: FaqsContent = {
  heading: "Frequently Asked Questions",
  description: "Everything you need to know about Consiliari AI and Career Roadmap.",
  defaultOpenId: "inspection-report-expanded",
  items: [
    {
      id: "inspection-report",
      question: "How does your AI analyze my home and generate an inspection report?",
      answer:
        "Upload photos of your home, and our AI analyzes them to detect visible damage. It then generates a detailed report with risk levels and estimated repair costs. You can also chat with the AI to clarify findings or ask follow-up questions.",
    },
    {
      id: "inspection-report-expanded",
      question: "How does your AI analyze my home and generate an inspection report?",
      answer:
        "Upload photos of your home, and our AI analyzes them to detect visible damage. It then generates a detailed report with risk levels and estimated repair costs. You can also chat with the AI to clarify findings or ask follow-up questions.",
    },
    {
      id: "damage-types",
      question: "What types of home damage can the AI detect from uploaded photos?",
      answer:
        "The AI can detect a wide range of visible issues, including cracks, water stains, roof damage, mold signs, paint deterioration, damaged fixtures, and exterior wear. Accuracy depends on photo quality and visibility.",
    },
    {
      id: "professional-inspection",
      question: "Do I still need a professional inspection after using the app?",
      answer:
        "For major transactions or high-risk findings, yes. The app gives a fast and practical first assessment, while a licensed inspector can provide on-site verification where required.",
    },
    {
      id: "insurance-documentation",
      question: "Can I use the inspection report for insurance or documentation purposes?",
      answer:
        "You can use the report as supporting documentation and a reference for claims, maintenance records, and contractor conversations. Specific insurer requirements may still vary.",
    },
    {
      id: "chat-clarify",
      question: "Can I chat with the AI to clarify or better understand my report?",
      answer:
        "Yes. You can ask follow-up questions directly in chat to understand risks, suggested repairs, and cost ranges in plain language.",
    },
  ],
};
