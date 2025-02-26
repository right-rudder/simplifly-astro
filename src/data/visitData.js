import { COMPANY_NAME } from "../consts";

const visitData = {
  pageTitle: `Visit Us | ${COMPANY_NAME}`,
  pageDescription:
    "Plan your visit to SimpliFly Flight School. Learn about our location, facilities, and how to schedule a tour to experience our top-notch aviation training environment.",
  pageKeywords:
    "SimpliFly Flight School visit, flight school tour, aviation training facilities, schedule a visit, flight school location",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/visitors-to-falcon-field-airport-simplifly-flight-school-mesa-az-croped.webp",
    imageAlt:
      "SimpliFly Flight School campus and facilities",
    headerH1: `Visit US`,
    paragraph: `Explore SimpliFly Flight School and see firsthand our state-of-the-art facilities and training environment. Schedule a visit today and take the first step towards your aviation career.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll-now",
        primary: false,
      },
      {
        name: "Discovery Flight",
        link: "/discovery-flight",
        primary: false,
      },
    ],
  },

  // Visit Details
  details: {
    upperHeading: "Plan Your Visit",
    heading: "Welcome to SimpliFly",
    subHeading: "We invite you to visit SimpliFly Flight School and experience our exceptional training environment. Our team is excited to show you around and answer any questions you may have.",
  },
};

export default visitData;
