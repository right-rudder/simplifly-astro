import { COMPANY_NAME } from "../consts";

const coursesIndex = {
  data: {
    // SEO Header Stuff
    pageTitle: `Training Programs | ${COMPANY_NAME}`,
    pageDescription:
      "Discover SimpliFly Flight School’s comprehensive pilot training programs. From Private Pilot License to advanced certifications like Instrument Rating, Multi-Engine, and Certified Flight Instructor, our expert-led courses are designed to help you achieve your aviation dreams.",
    pageKeywords:
      "flight training courses Arizona, aviation certifications, private to commercial pilot, multi-engine rating training, CFI courses Mesa, aviation school programs",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/airline-pilot-courses-at-flight-school-simplifly-arizona-flying-lessons.webp",
      imageAlt:
        "Photograph of a SimpliFly Flight School aircraft soaring over the Arizona landscape",
      headerH1: `Pilot <br>PROGRAMS</span>`,
      paragraph: `Join SimpliFly Flight School and take your first step towards a successful aviation career. Whether you're starting with a discovery flight or pursuing advanced ratings, we’re here to support you every step of the way.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-at-simplifly",
          primary: false,
        },
        /* TODO Guilherme : Remove? Not sure where this is supposed to point to */
        /* {
          name: "Program Guide",
          link: "/path",
          primary: false,
        }, */
      ],
    },
  },
};

export default coursesIndex;
