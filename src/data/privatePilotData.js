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
    upperHeading: "Get Started With a",
    heading: "Private Pilot License",
    subHeading: "A PPL is the begining of your journey in aviation, whether you want to fly for fun or professionally, this is the starting point for every aspiring pilot",
    
    title: "Overview",
    description: `
      Earning your Private Pilot License (PPL) at SimpliFly Flight School is your first step into the world of aviation. This program is designed for aspiring pilots who want to learn how to operate an aircraft safely and confidently. Whether you aim to fly recreationally or use this as a stepping stone toward a professional pilot career, our expert instructors will guide you through each phase of your training.
      <br/>
      <br/>
      Throughout the course, you will receive a combination of in-depth ground school instruction and hands-on flight training. You’ll learn about aerodynamics, flight controls, navigation, meteorology, airspace regulations, and emergency procedures. Additionally, you'll gain experience in essential skills such as radio communication, flight planning, and performing takeoffs and landings at different airports.
      <br/>
      <br/>
      By the end of the program, you will have completed the necessary flight hours, mastered basic and advanced maneuvers, and be fully prepared to pass your FAA Private Pilot checkride. Our goal is to ensure that you graduate with not only the knowledge but also the confidence to take to the skies as a licensed private pilot.`,

    keyPoints: [
      "Expert Guidance from Certified Flight Instructors",
      "Comprehensive Flight and Ground Training",
      "FAA-Approved Curriculum",
      "Mastering Basic and Advanced Flight Maneuvers",
    ],
    cta: {
      title: "Take a Discovery Flight",
      description:
        "Experience flying firsthand with a SimpliFly discovery flight. This is your chance to take control and explore the skies over Arizona.",
      button: {
        name: "Book Now",
        link: "/discovery-flight",
      },
    },

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
};

export default privatePilotData;
