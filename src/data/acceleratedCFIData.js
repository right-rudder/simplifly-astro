import { COMPANY_NAME } from "../consts";

const acceleratedCFIData = {
  pageTitle: `Accelerated CFI | ${COMPANY_NAME}`,
  pageDescription:
    "Launch your career as a flight instructor with SimpliFly Flight School's Accelerated Certified Flight Instructor (CFI) program. Gain the experience and skills needed to teach the next generation of pilots.",
  pageKeywords:
    "certified flight instructor Arizona, CFI training Mesa, flight instructor certification, become a CFI, flight school, pilot instructor training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/airline-pilot-courses-at-flight-school-simplifly-arizona-flying-lessons.webp",
    imageAlt:
      "SimpliFly Flight School student and flight instructor in a Cessna airplane cockpit",
    headerH1: `Accelerated CFI`,
    paragraph: `The Accelerated CFI Course is an intensive full immersion month long class designed to get you checkride ready for both your CFI and CFII!`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll-at-simplifly",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Start Your Career as a",
    heading: "CFI / CFII",
    subHeading:
      "Becoming a Certified Flight Instructor (CFI) allows you to gain valuable flight experience while teaching new pilots the skills they need to succeed.",
    title: "Overview",
    description: `
      The course consists of two class sessions a day, from Monday to Friday, with a total of over 80 hours of ground lessons, 15 hours of flight time in our Cessna 172 aircraft, 5 hours of Redbird simulator time, and spin training.
      <br/>
      <br/>
      It is a 4 week program with the first week focusing on the FOIs, the following two weeks focusing on the remainder of the CFI material, and the fourth week is for CFII.
      <br/>
      <br/>
      After the completion of the course students will have all of their lesson plans finished and will be endorsed for both their CFI and CFII checkrides. In addition, the cost of the course is $8,800.`,

    keyPoints: [
      "4 week program",
      "Two class sessions a day, from Monday to Friday",
      "Over 80 hours of ground lessons",
      "15 hours of flight time in our Cessna 172 aircraft",
      "5 hours of Redbird simulator time",
      "5 hours of spin training",
    ],

    cta: {
      imagePath: "/src/assets/female_pilot_smiling-simplifly-mesa-become-a-pilot.webp",
      imageAlt: "Female pilot smiling",
      title: "Enroll in the Accelerated CFI Program",
      description:
        "Start your journey as a Certified Flight Instructor at SimpliFly Flight School and gain the experience needed for a successful aviation career.",
      button: {
        name: "Enroll Now",
        link: "/enroll-at-simplifly",
      },
    },

    faqs: [
      {
        question: "What is the cost of the Accelerated CFI program?",
        answer:
          "The cost of the course is $8,800.",
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

export default acceleratedCFIData;
