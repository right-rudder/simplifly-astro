import { COMPANY_NAME } from "../consts";

const groundSchoolData = {
  pageTitle: `In-Person Ground School Sessions in Mesa, AZ | ${COMPANY_NAME}`,
  pageDescription:
    "Join SimpliFly's in-person ground school sessions led by experienced instructors. Open to all student pilots—whether you're enrolled in a school or not. Just $50 for 3 hours of training in Mesa, AZ.",
  pageKeywords:
    "ground school Mesa AZ, pilot ground school, aviation classes Mesa, flight training Mesa, SimpliFly Flight School ground school, aviation knowledge classes",

  // Top Header
  header: {
    stars: false,
    imagePath: "/src/assets/valley-of-the-sun-fly-over.webp",
    imageAlt: "SimpliFly students participating in a ground school session",
    headerH1: `Ground School at <br>SimpliFly`,
    paragraph: `Join our in-person ground school sessions in Mesa, AZ—open to anyone who wants to sharpen their aviation knowledge. Whether you're training at SimpliFly, another school, or haven’t started flight training yet, our $50, 3-hour sessions are a great way to build your confidence and understanding. Each session is led by our instructor Dolly and covers essential topics for every student pilot.`,
    buttons: [
      {
        name: "Sign Up Now – $50",
        link: "https://www.flightcircle.com/shop/f97c5d7539a7/4000020629",
        primary: true,
      },
      {
        name: "Call to Register",
        link: "tel:1-480-718-2656",
        primary: true,
      },
    ],
  },
};

export default groundSchoolData;
