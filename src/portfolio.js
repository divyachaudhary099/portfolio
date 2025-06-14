/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Divya Choudhary",
  title: "Hi all, I'm Divya",
  subTitle: emoji(
    "A passionate Front-End Developer 💻 with a strong foundation in Java and hands-on experience in HTML, CSS, TypeScript, and Angular. Currently working as a Trainee QA Engineer, gaining valuable experience with Selenium and Java but my true passion lies in development! I'm driven by the creativity and impact of building intuitive, responsive web applications, and I’m eager to grow in a role that keeps me close to the technologies I love. 🚀"
  ),
  resumeLink:
    "./containers/greeting/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/divyachaudhary099",
  linkedin: "https://www.linkedin.com/in/divya-choudhary1802/",
  gmail: "divya099chaudhary@gmail.com",
  leetcode: "https://leetcode.com/u/divyachaudhary099/",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am a tech enthusiast and I want to learn whatever there is, right now I am a QA but being in testing have made me realize that how much I enjoy development and I have great problem solving skills so I want to get into development and follow that path.",
  skills: [
    emoji(
      "⚡ Build responsive and dynamic user interfaces using HTML, CSS, TypeScript, and Angular"
    ),
    emoji("🛠️ Currently learning backend development with Java to become a more well-rounded full stack developer"),
    emoji(
      "⚡ Experience with test automation using Selenium and Java as a QA Trainee"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    // {
    //   skillName: "TypeScript",
    //   fontAwesomeClassname: "fab fa-ts"
    // },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "selenium",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Gobind Singh Indraprastha University, Delhi",
      logo: require("./assets/images/image.png"),
      subHeader: "Bachelors of Technoly in Computer science",
      duration: "2020 - 2024",
      desc: "Participated in the research and published a reasearch paper titled “Enhancing Travel Experience: Integrating Road Intelligence with Budget & Trip Planning Apps” at ICAMC 2024, organized by HMR Institute of Technology and Management, New Delhi, reaching an audience of over 500 attendees.",
      descBullets: [
        "President of Anchoring club",
        "Secured Rank 1 in Academics in semester 7 with CGPA 9.8",
        "President of Fashion society",
        "Social media and PR Head of E-cell HMR",
        "Co-founder and General secratary of Pink Legal Club Phoenix"
      ]
    },
    {
      schoolName: "Bal Bharati Public School, Delhi",
      logo: require("./assets/images/bbps.jpeg"),
      subHeader: "School",
      duration: "2020 batch",
      desc: "Ranked top 10% in the PCM. Secured 89% in class 12th and 93% in class 10th",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Testing",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Trainee QA Engineer",
      company: "The Indian Express",
      companylogo: require("./assets/images/indianexpress.png"),
      date: "November 2024 – Present",
      desc: "🐞 Trainee QA Engineer | Proudly recognized as “Bug Hunter” and awarded Employee of the Month (March) for breaking things before users could! 🚀",
      descBullets: [
        "Built a robust UI testing framework for The Indian Express website using Selenium",
        "Recognized for identifying critical bugs and contributing to overall product quality"
      ]
    },
    {
      role: "Junior Software engineer",
      company: "Fastswiff",
      companylogo: require("./assets/images/fastswiff.jpg"),
      date: "June 2024 – November 2024",
      desc: "Built and delivered 2+ real-world projects using HTML, CSS, TypeScript, and Angular in a fast-paced startup environment 🚀.",
       descBullets: [
        "Developed responsive, user-friendly web interfaces tailored to real client needs",
        "Collaborated closely with cross-functional teams to ensure seamless UI/UX and timely delivery"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "M-Tech Software",
      companylogo: require("./assets/images/mtech.jpg"),
      date: "July 2023 – Sep 2023",
      desc: "Gained hands-on experience working with SQL Server for both client support and internal development tasks ⚙️",
       descBullets: [
        "Assisted in managing and querying large datasets to support ERP functionalities",
        "Contributed to database maintenance and optimization for real-time client applications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "Ramayan Search Council",
      projectDesc: "Developed frontend pages of this website using html and css throughout both in desktop and mobile view",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ramayanresearchcouncil.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/auraacre.png"),
      projectName: "Aura Acre",
      projectDesc: "Worked with html, css, typescript and angular to develop the frontend of website along with the dashboard",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.auraacre.com/theme/modern"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Employee of the Month - March 2025",
      subtitle:
        "I got employee of the month as a trainee in the month of march within 4 months of joining this organization because of my exceptional observational skills and was given the title Bug hunter. Also, I introduced Gen AI testcases in my team.",
      image: require("./assets/images/indianexpress.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/divya-choudhary1802_what-can-i-say-success-is-my-passion-jk-activity-7334624421116092417-2A7L?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJ3oawB9weYUzq3VCv_VdbOZu1M7Juwpdw"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9582172111",
  email_address: "divya099chaudhary@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
