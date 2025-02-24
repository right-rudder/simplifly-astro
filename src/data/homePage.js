const homePage = {
  data: {
    //SEO Header Stuff
    pageDescription:
      "SimpliFly Flight School & Aircraft Management offers flight training in Kankakee, IL. We offer private pilot training, instrument rating training, commercial pilot training, and more. Contact us today!",
    pageKeywords:
      "flight training, flight school, pilot training, private pilot training, instrument rating training, commercial pilot training, Kankakee, IL",

    //top header
    header: {
      imagePath: "/src/assets/student-pilot-and-cfi-getting-ready-to-take-off-simplifly.webp",
      imageAlt: "SimpliFly Flight School Team at the runway",
      headerH1: `PILOT TRAINING MADE SIMPLE`,
      paragraph:
        "Start your aviation journey with SimpliFly Flight School. Whether you're looking to fly for fun or pursue a career in aviation, Our programs and instructors to help you achieve your goals.",
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-at-simplifly",
          primary: true,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },

    airlinesCloud: {
      airlines: [
        {
          imagePath: "/src/assets/southwest-airlines-logo.webp",
          imageAlt: "Southwest Airlines Logo",
          link: "https://www.southwest.com/"
        },
        {
          imagePath: "/src/assets/allegiant-air-logo.webp",
          imageAlt: "Allegiant Airlines Logo",
          link: "https://www.allegiantair.com/"
        },
        {
          imagePath: "/src/assets/frontier-airlines-logo.webp",
          imageAlt: "Frontier Airlines Logo",
          link: "https://www.flyfrontier.com/"
        },
        {
          imagePath: "/src/assets/hawaiian-airlines-Logo.webp",
          imageAlt: "Hawaiian Airlines Logo",
          link: "https://www.hawaiianairlines.com/"
        },
        {
          imagePath: "/src/assets/skywest-airlines-logo.webp",
          imageAlt: "Skywest Airlines Logo",
          link: "https://www.skywest.com/"
        },
        {
          imagePath: "/src/assets/envoy-air-logo.webp",
          imageAlt: "Envoy Air Logo",
          link: "https://www.envoyair.com/"
        },
        {
          imagePath: "/src/assets/Republic-Airways-Logo.webp",
          imageAlt: "Republic Airways Logo",
          link: "https://rjet.com/"
        },
        {
          imagePath: "/src/assets/endeavor-air-logo.webp",
          imageAlt: "Endeavor Air Logo",
          link: "https://www.endeavorair.com/content/endeavor-air/en_us/home.html"
        },
        {
          imagePath: "/src/assets/contour-airlines-logo.webp",
          imageAlt: "Contour Airlines Logo",
          link: "https://www.contourairlines.com/"
        },
        {
          imagePath: "/src/assets/elite-jets-logo.webp",
          imageAlt: "Elite Jets Logo",
          link: "https://www.elitejets.com/"
        },
        {
          imagePath: "/src/assets/pinnacle-aviation-logo.webp",
          imageAlt: "Pinnacle Aviation Logo",
          link: "https://www.pinnacleaviation.com/"
        },
      ],
    },

    whyElite: {
      upperHeading: "Why SimpliFly Flight School",
      heading: "Our Commitment",
      descriptions: [
        "Founded in 2014 with a vision to bring a flight school to the south suburbs of Chicago,  SimpliFly Flight School continues to be one of the only complete flight institutions in the area.  Join us and make your flying dreams come true!",
        "SimpliFly Flight School and Aircraft Management, LLC is located in Kankakee, just 50 miles south of Chicago. We offer professional and customized flight training programs including one of Chicagoland's only Multi-Engine Accelerated course.",
        "Our team of experienced instructors are dedicated to providing you with the best training experience possible. We are committed to helping you achieve your goals and become a safe, competent pilot.",
      ],
      bullets: [
        {
          title: "Experience in Aviation",
          descriptions: [
            "Our instructors are seasoned professionals with years of experience in the aviation industry.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Individualized Attention",
          descriptions: [
            "We provide personalized training to ensure you receive the attention you need to succeed.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Excellent Customer Service",
          descriptions: [
            "Our team is dedicated to providing you with the best customer service experience possible.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Structured Lessons",
          descriptions: [
            "Our programs are designed to provide you with a structured learning experience that will help you succeed.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
      ],
      imagePath: "/src/assets/elite-flight-training-cfi-training.jpg",
      imageAlt:
        "SimpliFly Flight School & Aircraft Management cessna 172 waiting for takeoff",
    },

    quizCTA: {
      upperHeading: "Take Our Quiz",
      heading: "Can You Become a Pilot?",
      descriptions: [
        "Many aspiring pilots hesitate due to concerns about cost, time, and safety. These concerns often arise from online research and general uncertainty. We understand these valid concerns and encourage you to speak with a SimpliFly Flight School team member to address any questions that may have arisen during your research.",
        "At SimpliFly Flight School, you don't need to make a substantial financial commitment upfront. It all begins with an affordable discovery flight, costing only a few hundred dollars. Pursuing your pilot's license is indeed a significant time investment, but it's a life changing achievement with long lasting rewards. Safety is our utmost priority at Elite, ensuring your journey to becoming a pilot is both fulfilling and safe.",
        `Wondering if a pilot's life is right for you? Discover if the world of aviation is right for you by taking our "Is Flying Right for Me?" quiz. This quiz is designed to help you explore your interests and determine if the skies are where you belong. Get started on your aviation journey by clicking below to take the quiz.`,
      ],
      imageLegend: `Luke Poulos<br><small class="text-white font-normal text-sm">Founder & CEO</small>`,
      imagePath: "/src/assets/benjamin-chambon-7LJLXYpqGl4-unsplash.jpg",
      imageAlt:
        "SimpliFly Flight School & Aircraft Management cessna 172 instrument panel",
      quizModal: true,
    },

    blogfeed: {
      upperHeading: "Our Blog",
      heading: "SimpliFly News",
      description:
        "Stay up to date with the latest news, pilot resources and updates from SimpliFly Flight School & Aircraft Management.",
    },

    flyWithUsCTA: {
      imagePath: "/src/assets/jim-witkowski-sYHjFbnIYbA-unsplash.jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1: `<span class="text-accent-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
      paragraph:
        "Doing a discovery flight is the best way to determine if being a pilot is right for you. Whether you're trying it out for fun or want to fly professionally, doing a discovery flight will allow you to see Kankakee from a new perspective.",
      buttons: [
        {
          name: "Schedule Today",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },

    testimonials: {
      upperHeading: "The SimpliFly Family",
      heading: "Our Students Love Us",
      headingText: [
        "While our main goal is to train future pilots safely and effectively, it’s important to us at SimpliFly Flight School our students have a fun and comfortable environment to practice in. We are proud of the relationships we have built with our students and guests.",
        "Check out what they have to say about their experiences with Us.",
      ],
      buttonText: "Leave Us a Review",
      buttonLink:
        "https://search.google.com/local/writereview?placeid=ChIJYR6NGmjpDYgR_m6mDUwAToY",
      reviews: [
        {
          body: "I had a wonderful experience at SimpliFly. I could tell the entire staff was invested in my success. I really appreciated the flexibility the school provides, allowing me to work full time and work toward my PPL at the same time. Cannot thank my instructor Dolly enough for all the hard work she put in getting me ready for my checkride.",
          author: "Josh A.",
        },
        {
          body: "Best school! Great instructors and very affordable! I feel very fortunate to find this school that allows me to work and learn aviation at the same time. Student environment is also very healthy, not competitive and the students are very encouraging to others.",
          author: "Kathryn W.",
        },
        {
          body: "I became an instructor through SimpliFly and have been more than thrilled with the support from the SimpliFly team through my ratings and up to joining the team my self! I was able to get through my ratings quickly and have made the best friendships along the way! Love this school!",
          author: "Ally M.",
        },
        {
          body: "Just got my private with SimpliFly and have had nothing but great experiences. Doug is a great instructor and wouldn’t have passed my check ride without him. SimpliFly constantly goes above and beyond for me working around my schedule helping me get the training and hours I need. Everyone is very friendly and helpful. Even the owners have personally helped me outside the school navigate the purchase of an airplane. I can’t recommend SimpliFly enough.",
          author: "Parker K.",
        },
        {
          body: "Positive experience at this upstart flight school! The instructors are knowledgeable & super personable and the personalized training has really boosted a lot of confidence in flying for me and so many students. A great place to begin your journey from zero time to the airlines.",
          author: "Nate B.",
        },
        {
          body: "SimpliFly is a great school. The sense of community within the school is exceptional. From the administrative staff to the flight instructors, everyone works together seamlessly to create a positive and supportive atmosphere. This teamwork extends to our interactions with students, fostering an environment that encourages questions, collaboration, and continuous improvement.",
          author: "Caitney S.",
        },
        {
          body: "SimpliFly is an awesome fight school. I have been around to a few flight schools in the area and they are top notch! I completed my CFI with them and they helped me to feel confident in my teaching and training. The instructor are amazing and you can tell they have a passion for what they do. If you want to really understand aviation and become a better pilot this is the place to go!",
          author: "Zach F.",
        },
      ],
    },
  },
};
export default homePage;
