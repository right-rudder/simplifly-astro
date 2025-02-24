import { COMPANY_NAME } from "../consts";

const certifiedFlightInstructorData = {
  pageTitle: `Certified Flight Instructor (CFI) | ${COMPANY_NAME}`,
  pageDescription:
    "Launch your career as a flight instructor with SimpliFly Flight School’s Certified Flight Instructor (CFI) program. Gain the experience and skills needed to teach the next generation of pilots.",
  pageKeywords:
    "certified flight instructor Arizona, CFI training Mesa, flight instructor certification, become a CFI, flight school, pilot instructor training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/avel-chuklanov-ZEiqbaQhmvE-unsplash.jpg",
    imageAlt:
      "SimpliFly Flight School student and flight instructor in a Cessna airplane cockpit",
    headerH1: `Certified Flight <br>INSTRUCTOR (CFI)</span>`,
    paragraph: `Become a leader in aviation with SimpliFly Flight School’s CFI program. Gain valuable experience while teaching aspiring pilots and advancing your own career.`,
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
    upperHeading: "Meet the Crew",
    heading: "Leadership Team",
    subHeading: "Our leadership team consists of skilled and experienced aviation experts who have a deep passion for the flight training and are dedicated to delivering exceptional training and support to our students.",

    title: "SimpliFly",
    description: `
      The Certified Flight Instructor (CFI) program at SimpliFly Flight School is designed for pilots looking to advance their careers by teaching others how to fly. This program equips you with the instructional skills, flight proficiency, and teaching techniques necessary to become an FAA-certified instructor.
      <br/>
      <br/>
      As a CFI, you will develop expertise in aerodynamics, flight instruction principles, and student pilot training strategies. You’ll also refine your communication skills to effectively teach flight maneuvers, emergency procedures, and airspace regulations.
      <br/>
      <br/>
      Upon completion of this program, you will be prepared to pass the FAA Certified Flight Instructor checkride and begin your career as a flight instructor—gaining flight hours and advancing toward airline or corporate pilot opportunities.`,

    keyPoints: [
      "Gain Valuable Flight Experience While Teaching",
      "Refine Your Instructional & Communication Skills",
      "Prepare for the FAA Certified Flight Instructor Checkride",
      "Start Your Career in Aviation with a CFI Position",
    ],

    cta: {
      title: "Enroll in the CFI Program",
      description:
        "Start your journey as a Certified Flight Instructor at SimpliFly Flight School and gain the experience needed for a successful aviation career.",
      button: {
        name: "Enroll Now",
        link: "/enroll-at-simplifly",
      },
    },

    faqs: [
      {
        question: "How long does it take to become a Certified Flight Instructor?",
        answer:
          "Most students complete their CFI training in 4-8 weeks, depending on proficiency and study schedule.",
      },
      {
        question: "Do I need a Commercial Pilot License before becoming a CFI?",
        answer:
          "Yes, a Commercial Pilot License (CPL) is required before obtaining a Certified Flight Instructor (CFI) certification.",
      },
      {
        question: "What can I do with a CFI certification?",
        answer:
          "As a CFI, you can teach student pilots, build valuable flight hours, and gain experience for future airline or corporate pilot opportunities.",
      },
    ],  
  },
};

export default certifiedFlightInstructorData;
