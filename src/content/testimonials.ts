import avatar1 from "../assets/images/testimonials/image1.png";
import avatar2 from "../assets/images/testimonials/image2.png";
import avatar3 from "../assets/images/testimonials/image3.png";
import avatar4 from "../assets/images/testimonials/image4.png";
import avatar5 from "../assets/images/testimonials/image5.png";
import avatar6 from "../assets/images/testimonials/image6.png";

export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
};

export type TestimonialsContent = {
  heading: string;
  description: string;
  items: TestimonialItem[];
};

export const testimonialsContent: TestimonialsContent = {
  heading: "Smarter Inspections, Proven by Users",
  description:
    "Discover how homeowners like you are using our AI-powered inspections to detect damage early, understand repair costs, and make smarter property decisions-all within minutes.",
  items: [
    {
      id: "david-elson",
      quote:
        "I uploaded a few photos of a wall crack, and within minutes I had a full report with risk level and cost estimate. It saved me from a major structural issue later.",
      name: "David Elson",
      role: "Civil Engineer",
      avatarSrc: avatar1,
    },
    {
      id: "lorri-warf",
      quote:
        "The AI report was detailed and easy to understand. I especially liked being able to chat with the AI to clarify repair suggestions before calling a contractor.",
      name: "Lorri Warf",
      role: "Architectural Engineer",
      avatarSrc: avatar2,
    },
    {
      id: "jerry-helfer",
      quote:
        "As a first-time homeowner, this app gave me peace of mind. The risk assessment helped me prioritize repairs without overspending.",
      name: "Jerry Helfer",
      role: "Software Engineer",
      avatarSrc: avatar3,
    },
    {
      id: "paula-mora",
      quote:
        "I used it before buying a property, and it highlighted roof damage I had not noticed. The estimated repair cost helped during price negotiation.",
      name: "Paula Mora",
      role: "Software Engineer",
      avatarSrc: avatar4,
    },
    {
      id: "iva-ryan",
      quote:
        "Instead of waiting days for an inspection, I got insights in minutes. The cost estimate range was surprisingly accurate compared to my contractor's quote.",
      name: "Iva Ryan",
      role: "Civil Engineer",
      avatarSrc: avatar5,
    },
    {
      id: "mary-freund",
      quote:
        "The AI report was detailed and easy to understand. I especially liked being able to chat with the AI to clarify repair suggestions before calling a contractor.",
      name: "Mary Freund",
      role: "Architectural Engineer",
      avatarSrc: avatar6,
    },
  ],
};
