import footerLogo from "../assets/images/common/logo.svg";

export type TermsContentRule = {
  title: string;
  points: string[];
};

export type TermsSimpleSection = {
  title: string;
  points: string[];
};

export type TermsOfContentPageContent = {
  logoSrc: string;
  logoAlt: string;
  pageTitle: string;
  intro: string;
  notAllowedTitle: string;
  notAllowedRules: TermsContentRule[];
  enforcement: TermsSimpleSection;
  remember: TermsSimpleSection;
};

export const termsOfContentPageContent: TermsOfContentPageContent = {
  logoSrc: footerLogo,
  logoAlt: "LA LA LAUGH Logo",
  pageTitle: "La La Laugh Community Guidelines",
  intro:
    "La La Laugh was built to spread joy through humor. To keep our community safe, inclusive, and fun, we ask every user and creator to follow these guidelines. By using La La Laugh, you agree to respect these rules.",
  notAllowedTitle: "What's Not Allowed",
  notAllowedRules: [
    {
      title: "Offensive or discriminatory content",
      points: [
        "No hate speech, bullying, or mean-spirited jokes targeting religion, race, gender, sexual orientation, nationality, or other personal traits.",
        "Comedy that humiliates or intimidates individuals or groups isn't welcome.",
      ],
    },
    {
      title: "Violence and harm",
      points: [
        "No realistic depictions of people or animals being killed, tortured, or abused.",
        "No content that encourages violence, reckless behavior, or the use of weapons.",
      ],
    },
    {
      title: "Sexually explicit content",
      points: [
        "Overly sexual or pornographic material is not allowed.",
        "Humor with explicit sexual organs or acts is prohibited.",
      ],
    },
    {
      title: "Exploiting sensitive events",
      points: [
        "Don't post content that profits from or makes light of tragedies (e.g., violent conflicts, terrorist attacks, epidemics).",
      ],
    },
    {
      title: "Religious attacks",
      points: [
        "Inflammatory religious commentary and misleading use of sacred texts are not permitted.",
      ],
    },
    {
      title: "Illegal or criminal activity",
      points: [
        "No content that encourages crime or facilitates illegal purchases (e.g., firearms, drugs).",
        "We will cooperate with law enforcement if needed.",
      ],
    },
    {
      title: "Targeting kids",
      points: [
        "Currently, La La Laugh does not allow content directed at children. Future features for younger users will be designed under strict supervision and parental controls.",
      ],
    },
    {
      title: "Spam and unwanted contact",
      points: [
        "Don't use La La Laugh to spam, harass, or send unwanted messages.",
        "Attempting to use the platform for solicitation or scams will result in removal.",
      ],
    },
  ],
  enforcement: {
    title: "How We Enforce These Rules",
    points: [
      "Users can report content or creators directly in the app.",
      "Reported content will be reviewed, and we aim to remove objectionable material within 24 hours.",
      "Accounts that repeatedly break the rules may lose monetization rights or be banned.",
    ],
  },
  remember: {
    title: "Remember",
    points: [
      "La La Laugh is for humor and joy only.",
      "We welcome creativity, parody, and satire - but not at the expense of safety, dignity, or respect.",
      "If you're unsure whether something crosses the line, it probably does. Choose kindness.",
    ],
  },
};
