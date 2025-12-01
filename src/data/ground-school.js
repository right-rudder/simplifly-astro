import { COMPANY_NAME, PHONE_NUMBER } from "../consts";

const groundSchoolData = {
  pageTitle: `In-Person Ground School Sessions in Mesa, AZ | ${COMPANY_NAME}`,
  pageDescription:
    "Join SimpliFly's in-person ground school sessions led by experienced instructors. Open to all student pilots—whether you're enrolled in a school or not. Just $50 for 3 hours of training in Mesa, AZ.",
  pageKeywords:
    "ground school Mesa AZ, pilot ground school, aviation classes Mesa, flight training Mesa, SimpliFly Flight School ground school, aviation knowledge classes",

  // Top Header
  header: {
    stars: false,
    imagePath: "/src/assets/flying-over-arizona-simplifly-mesa-commercial-pilot.jpg",
    imageAlt: "SimpliFly students participating in a ground school session",
    headerH1: `Ground School at <br>SimpliFly`,
    paragraph: `Join our in-person ground school sessions in Mesa, AZ—open to anyone who wants to sharpen their aviation knowledge. Whether you're training at SimpliFly, another school, or haven’t started flight training yet, our $50, 3-hour sessions are a great way to build your confidence and understanding. Each session is led by our instructor Dolly Woodhall and covers essential topics for every student pilot.`,
    buttons: [
      {
        name: "Sign Up Now",
        link: "#form",
        primary: true,
      },
      {
        name: "See Schedule",
        link: "#schedule",
        primary: true,
      },
      {
        name: "Call to Register",
        link: `tel:${PHONE_NUMBER}`,
        primary: true,
      },
    ],
  },
};

export default groundSchoolData;
