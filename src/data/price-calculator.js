import { PHONE_NUMBER } from "../consts.js";

const faPhone = `
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
  <path fill="currentColor" d="M160.2 25c-7.9-18.9-28.5-28.9-48.1-23.6l-5.5 1.5C42 20.5-13.2 83.1 2.9 159.3C40 334.3 177.7 472 352.7 509.1C429 525.3 491.5 470 509.1 405.4l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2c-70.3-34.9-126.9-93.3-159.4-165l44.2-36c13.9-11.3 18.6-30.4 11.8-47z"/>
</svg>
`;

export const data = {
  title: "Simplifly's Flight Training Estimator",
  subTitle: "Find out how much your training will cost",
  coursesHeld: {
    title: "Certificates and Ratings Currently Held",
    items: [
      {
        id: "heldPPL",
        idMobile: "heldPPL-mobile",
        title:
          "Private Pilot Certificate <small className='font-bold'>(PPL)</small>",
        controlVar: false,
      },
      {
        id: "heldInstrument",
        idMobile: "heldInstrument-mobile",
        title: "Instrument Rating",
        controlVar: false,
      },
      {
        id: "heldCPF",
        idMobile: "heldCPF-mobile",
        title:
          "Commercial Pilot Certificate <small className='font-bold'>(CPL)</small>",
        controlVar: false,
      },
      {
        id: "heldCFI",
        idMobile: "heldCFI-mobile",
        title:
          "Certified Flight Instructor <small className='font-bold'>(CFI)</small>",
        controlVar: false,
      },
      {
        id: "heldCFII",
        idMobile: "heldCFII-mobile",
        title:
          "Certified Flight Instructor-Instrument <small className='font-bold'>(CFII)</small>",
        controlVar: false,
      },
      {
        id: "heldME",
        idMobile: "heldME-mobile",
        title: "Multi-Engine Rating",
        controlVar: false,
      },
    ],
  },
  courses: {
    title: "Certificates and Ratings You Want to Obtain",
    items: [
      {
        id: "ppl",
        idMobile: "ppl-mobile",
        title:
          "Private Pilot Certificate <small className='font-bold'>(PPL)</small>",
        simpleTitle: "Private Pilot Certificate (PPL)",
        cost: 20000,
        controlVar: true,
      },
      {
        id: "intrument",
        idMobile: "intrument-mobile",
        title: "Instrument Rating",
        simpleTitle: "Instrument Rating",
        cost: 18000,
        controlVar: true,
      },
      {
        id: "cpl",
        idMobile: "cpl-mobile",
        title:
          "Commercial Pilot Certificate <small className='font-bold'>(CPL)</small>",
        simpleTitle: "Commercial Pilot Certificate (CPL)",
        cost: 27000,
        controlVar: true,
      },
      {
        id: "cfi",
        idMobile: "cfi-mobile",
        title:
          "Certified Flight Instructor <small className='font-bold'>(CFI)</small>",
        simpleTitle: "Certified Flight Instructor (CFI)",
        cost: 9000,
        controlVar: true,
      },
      {
        id: "cfii",
        idMobile: "cfii-mobile",
        title:
          "Certified Flight Instructor-Instrument <small className='font-bold'>(CFII)</small>",
        simpleTitle: "Certified Flight Instructor-Instrument (CFII)",
        cost: 4500,
        controlVar: true,
      },
      {
        id: "me",
        idMobile: "me-mobile",
        title: "Multi-Engine Rating",
        simpleTitle: "Multi-Engine Rating",
        tooltip:
          "Career track students need 25 total ME hours to reach a Multi-Engine certification. You can achieve this by either getting your MEI or flying 15 hours via time building.",
        cost: 10500,
        controlVar: true,
      },
    ],
  },
  addOns: {
    title: "Add Ons:",
    items: [
      {
        id: "starter",
        idMobile: "starter-mobile",
        title: "Starter Bundle",
        tooltip:
          "Includes a passive headset, pilot bag, pilot training books, a logbook, foggles, a ForeFlight subscription while enrolled, and a kneeboard.",
        cost: 1000,
        controlVar: false,
      },
      {
        id: "checkride",
        idMobile: "checkride-mobile",
        title: "Checkride Fees",
        tooltip:
          "Depending on your DPE, you can plan to budget around $900 for most checkrides with the exceptions being the CFI initial (~$1,500) and CFI add-ons (~$1,200 each).",
        cost: 7000,
        controlVar: false,
      },
      {
        id: "written",
        idMobile: "written-mobile",
        title: "Written Test Fees",
        tooltip:
          "Written tests are ~$175 per certification (not required for the Multi-Engine Rating or MEI add-on).",
        cost: 1050,
        controlVar: false,
      },
      {
        id: "headset",
        idMobile: "headset-mobile",
        title: "Aviation Headset",
        tooltip:
          "Receive <strong>$299.00</strong> off of your Zulu 3 Headset if you choose to upgrade your Starter Package at Summit Flight Academy.",
        cost: 1200,
        controlVar: false,
      },
    ],
  },
  total: {
    title: "Zero to Hero",
    subTitle: "Fly for a career, within a year!",
    tooltip:
      "This pricing is based on <strong>250 hours</strong> and flying full-time. While pricing can vary within our other programs, it does less so for our Zero to Hero Program. However, the speed at which you can achieve the level you wish will be based upon your availability and time commitment. There is no way to go Zero to Hero in a year doing anything less than full-time. Flying 3-4 days a week makes Zero to Hero achievable in 12-15 months and flying 2-3 days a week is achievable in 15-18 months.",
  },
  ctas: [
    {
      content: "Contact Us",
      url: "/contact",
      sendData: true,
    },
    {
      content: `${faPhone}<span>${PHONE_NUMBER}</span>`,
      url: `tel:${PHONE_NUMBER}`,
      sendData: false,
    },
  ],
};
