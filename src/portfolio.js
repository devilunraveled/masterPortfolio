/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hardik's Portfolio",
  description:
    "If the conversation we are having can occur over a game of chess, where is the board ?",
  og: {
    title: "Hardik Sharma Portfolio",
    type: "website",
    url: "http://devilunraveled.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Hardik Sharma",
  logo_name: "HardikSharma",
  nickname: "devilunraveled",
  subTitle:
    "If the conversation we are having can occur over a game of chess, where is the board ?",
  resumeLink:
    "https://drive.google.com/file/d/1pf_v-OFU2oTorx0BdgrKJQeBigX11C_i/view?usp=sharing",
  portfolio_repository: "https://github.com/devilunraveled/masterPortfolio",
  githubProfile: "https://github.com/devilunraveled",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/devilunraveled",
  // linkedin: "https://www.linkedin.com/in/hardik-sharma-b45775248/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/devilunraveled",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hardik-sharma-b45775248/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:work.sharma.hardik@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/devilunraveled/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Lichess",
    link: "https://lichess.org/devilunraveled",
    fontAwesomeIcon: "fas fa-chess-knight", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Deep understanding of Natural Language Processing",
        "⚡ Worked on numerous projects involving NLP, its application ",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building backends for a number of applications",
        "⚡ Developing Data Usage Agreement Management System, handling legal agreements",
        "⚡ Creating application backend in Node, Express & React",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/devil73unraveled/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/devilunraveled",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/devilunraveled",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/devilunraveled",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "International Institute of Information Technology, Hyderabad",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "iiith_logo.png",
      alt_name: "IIIT Hyderabad",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have done standard CS curriculum course work, such as, Data Structures, Algorithms, Operating System, Database Management Systems, Automata Theory, Advanced Algorithm Design.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, such as SMAI ( Statistical Methods in Artificial Intelligence ), INLP ( Introduction to Natural Langugage Processing), ANLP ( Advanced Natural Language Processing), Topics in Deep Learning and IRE ( Information Retrieval & Extraction )",
        "⚡ I have completed my B.Tech Project under the guidance of Prof. Rahul Mishra in the field of Natural Language Processing, specifically on Unsupervised Question-Answer Generation.",
      ],
      website_link: "http://iiit.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    //   {
    //     title: "Machine Learning",
    //     subtitle: "- Andrew Ng",
    //     logo_path: "stanford_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //     alt_name: "Stanford University",
    //     color_code: "#8C151599",
    //   },
    //   {
    //     title: "Deep Learning",
    //     subtitle: "- Andrew Ng",
    //     logo_path: "deeplearning_ai_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //     alt_name: "deeplearning.ai",
    //     color_code: "#00000099",
    //   },
    //   {
    //     title: "ML on GCP",
    //     subtitle: "- GCP Training",
    //     logo_path: "google_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //     alt_name: "Google",
    //     color_code: "#0C9D5899",
    //   },
    //   {
    //     title: "Data Science",
    //     subtitle: "- Alex Aklson",
    //     logo_path: "ibm_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //     alt_name: "IBM",
    //     color_code: "#1F70C199",
    //   },
    //   {
    //     title: "Big Data",
    //     subtitle: "- Kim Akers",
    //     logo_path: "microsoft_logo.png",
    //     certificate_link:
    //       "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //     alt_name: "Microsoft",
    //     color_code: "#D83B0199",
    //   },
    //   {
    //     title: "Advanced Data Science",
    //     subtitle: "- Romeo Kienzler",
    //     logo_path: "ibm_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //     alt_name: "IBM",
    //     color_code: "#1F70C199",
    //   },
    //   {
    //     title: "Advanced ML on GCP",
    //     subtitle: "- GCP Training",
    //     logo_path: "google_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //     alt_name: "Google",
    //     color_code: "#0C9D5899",
    //   },
    //   {
    //     title: "DL on Tensorflow",
    //     subtitle: "- Laurence Moroney",
    //     logo_path: "deeplearning_ai_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //     alt_name: "deeplearning.ai",
    //     color_code: "#00000099",
    //   },
    //   {
    //     title: "Fullstack Development",
    //     subtitle: "- Jogesh Muppala",
    //     logo_path: "coursera_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //     alt_name: "Coursera",
    //     color_code: "#2A73CC",
    //   },
    //   {
    //     title: "Kuberenetes on GCP",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
    //   {
    //     title: "Cryptography",
    //     subtitle: "- Saurabh Mukhopadhyay",
    //     logo_path: "nptel_logo.png",
    //     certificate_link:
    //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //     alt_name: "NPTEL",
    //     color_code: "#FFBB0099",
    //   },
    //   {
    //     title: "Cloud Architecture",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    " I have worked with absolute small scale startups to large corporations, across the globe. I have also worked with start-ups and collaborated with talented people to create digital products for both business and consumer use.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Stripe",
          company_url: "https://www.stripe.com/",
          logo_path: "stripe_logo.png",
          duration: "June 2025 - Present",
          location: "Bangalore, India",
          description: "Currently working as a Software Developer at Stripe.",
          color: "#000000",
        },
        // {
        //   title: "Software Developer",
        //   company: "Product Labs",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2021",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",
          company: "Mastercard",
          company_url:
            "https://www.mastercard.com/global/en/business/overview/ai-garage.html",
          logo_path: "mastercard_logo.png",
          duration: "May 2024 - July 2024",
          location: "Gurgaon, India",
          description:
            "Improving internal RAG implementation by approximately 5 times, while reducing latency upto 200%, all the while keeping similar accuracy within permissible error. Implemented multiple cutting edge research ideas from scratch into the pipeline.",
          color: "#000000",
        },
        //   {
        //     title: "Data Science Research Intern",
        //     company: "Delhivery Pvt. Ltd.",
        //     company_url: "https://www.delhivery.com/",
        //     logo_path: "delhivery_logo.png",
        //     duration: "May 2019 - Sept 2019",
        //     location: "Gurgaon, Haryana",
        //     description:
        //       "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //     color: "#ee3c26",
        //   },
        //   {
        //     title: "Data Science Intern",
        //     company: "Intel Indexer LLC",
        //     company_url:
        //       "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //     logo_path: "intel_logo.jpg",
        //     duration: "Nov 2018 - Dec 2018",
        //     location: "Work From Home",
        //     description:
        //       "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //     color: "#0071C5",
        //   },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Data Structures and Algorithms Teaching Assistant",
          company: "IIIT Hyderabad",
          company_url: "https://iiit.ac.in/",
          logo_path: "iiith_logo.png",
          duration: "January 2025 - May 2025",
          location: "Hyderabad, Telangana",
          description:
            "Taught Data Structures and Algorithms and DSA using C/C++ to the students. Conducted weekly tutorials and Lab sessions, driving the learning through hands on implementation.",
          color: "#4285F4",
        },
        {
          title: "Information Retrieval and Extraction Teaching Assistant",
          company: "IIIT Hyderabad",
          company_url: "https://iiit.ac.in/",
          logo_path: "iiith_logo.png",
          duration: "August 2024 - Decemeber 2024",
          location: "Hyderabad, Telangana",
          description:
            "Taught Information Retrieval and Extraction, a third year onward elective course, to the students. Designed assignments, and mentored student groups for course projects.",
          color: "#D83B01",
        },
        {
          title: "Discrete Structures Teaching Assistant",
          company: "IIIT Hyderabad",
          company_url: "https://iiit.ac.in/",
          logo_path: "iiith_logo.png",
          duration: "August 2023 - Decemeber 2023",
          location: "Hyderabad, Telangana",
          description:
            "Taught Discrete Structures to the students. Conducted weekly tutorials and mentored UG1 students for the course.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and perform a great level of analysis on them, which helps me unearth deeper understanding of the content.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hardik.jpeg",
    description:
      "You can reach out to me through the following channels, I will try my best to get back to you.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical details I have come across, I am in the process of cleaning it up to make it public.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bangalore, India",
    locality: "Bangalore",
    country: "India",
    region: "Karnataka",
    postalCode: "560103",
    streetAddress: "Prestige Tech Park",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
