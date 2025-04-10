import { COMPANY_NAME } from "../consts";

const visitData = {
  pageTitle: `Visit SimpliFly Flight School in Mesa, AZ | ${COMPANY_NAME}`,
  pageDescription:
    "Visit SimpliFly Flight School in Mesa, AZ, and explore our state-of-the-art aviation training facilities. Schedule a tour today to kickstart your pilot training journey.",
  pageKeywords:
    "flight school Mesa AZ, visit SimpliFly, aviation training Mesa, flight school tour Mesa, pilot training facilities Mesa AZ",

  // Top Header
  header: {
    stars: true,
    imagePath:
      "/src/assets/visitors-to-falcon-field-airport-simplifly-flight-school-mesa-az-croped.webp",
    imageAlt: "SimpliFly Flight School campus and facilities",
    headerH1: `Visit US`,
    paragraph: `Explore SimpliFly Flight School and see firsthand our state-of-the-art facilities and training environment. Schedule a visit today and take the first step towards your aviation career.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll-at-simplifly",
        primary: false,
      },
      {
        name: "Contact Us",
        link: "#contact",
        primary: false,
      },
    ],
  },

  // Visit Details
  details: {
    upperHeading: "Plan Your Visit",
    heading: "Welcome to SimpliFly",
    subHeading:
      "We invite you to visit SimpliFly Flight School and experience our exceptional training environment. Our team is excited to show you around and answer any questions you may have.",
  },
};

export default visitData;
