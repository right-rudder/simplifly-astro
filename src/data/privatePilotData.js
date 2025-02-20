import { COMPANY_NAME } from "../consts";

const privatePilotData = {
  pageTitle: `Private Pilot | ${COMPANY_NAME}`,
  pageDescription:
    "Start your aviation journey with SimpliFly Flight School’s Private Pilot License course. Learn from experienced instructors and gain the foundational skills needed to become a licensed pilot.",
  pageKeywords:
    "private pilot license Arizona, flight school Mesa, pilot training programs, aviation school, learn to fly in Arizona",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/two-pilot-smiling.webp",
    imageAlt: "A SimpliFly Flight School aircraft in flight over Arizona",
    headerH1: `Private Pilot <br>LICENSE</span>`,
    paragraph: `Begin your journey into aviation with SimpliFly Flight School's Private Pilot program. Gain the skills, knowledge, and confidence to take control of the skies.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll-now",
        primary: false,
      },
      {
        name: "Program Guide",
        link: "/path",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    title: "Private Pilot License",
    description:
      "SimpliFly Flight School’s Private Pilot License course provides the foundation for your aviation career. This program includes hands-on flight training, in-depth ground school, and one-on-one instruction to prepare you for solo flights and certification.",
    keyPoints: [
      "Expert Guidance from Certified Flight Instructors",
      "Comprehensive Flight and Ground Training",
      "FAA-Approved Curriculum",
      "Mastering Basic and Advanced Flight Maneuvers",
    ],
    faqs: [
      {
        question: "How long does it take to get a Private Pilot License?",
        answer:
          "On average, it takes 3-6 months to complete the training, depending on your schedule and pace.",
      },
      {
        question: "Do I need prior experience?",
        answer:
          "No prior flying experience is necessary! Our program is designed for beginners looking to start their aviation journey.",
      },
      {
        question: "What does the training include?",
        answer:
          "The program includes flight instruction, ground school, and FAA exam preparation to help you obtain your Private Pilot Certificate.",
      },
    ],  
  },

  // CTA & FAQs
  cta: {
    title: "Take a Discovery Flight",
    description:
      "Experience flying firsthand with a SimpliFly discovery flight. This is your chance to take control and explore the skies over Arizona.",
    button: {
      name: "Book Now",
      link: "/discovery-flight",
    },
  },

};

export default privatePilotData;
