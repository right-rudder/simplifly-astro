import {
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  SITE_DESCRIPTION,
} from "../consts";

export default {
  upperHeading: "Enroll to Fly",
  description: SITE_DESCRIPTION,
  contactTitle: "Contact Us",
  address: `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`,
  phone: PHONE_NUMBER,
  email: EMAIL_ADDRESS,
  sections: [
    {
      title: "Why Fly at SimpliFly?",
      content: "Your success is our priority. Learning to fly is a transformative experience, and we are dedicated to providing you with the knowledge, skills, and support you need to reach new heights.",
    },
    {
      title: "Programs to Fit Your Schedule",
      content: "We offer full-time and part-time programs to match your schedule, whether you're training for a career or for recreation.",
    },
    {
      title: "Start Your Career",
      content: "Many of our students have trained with us and successfully transitioned to airline careers. This is your opportunity to take flight!",
    },
  ],
};
