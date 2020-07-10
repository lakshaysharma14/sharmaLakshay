/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Lakshay Sharma",
  title: "Hi all, I'm Lakshay",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web Apps with JavaScript / Reactjs / Nodejs /  and some other cool libraries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IMprUvqMTPF0dSDDqrLRa1_fXtoEIKas/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/lakshaysharma14",
  linkedin: "https://www.linkedin.com/in/lakshay-sharma-26084326/",
  gmail: "17ucc034@lnmiit.ac.in",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Full Stack Developer Who Wants To Explore Every Tech Stack And Data Science Enthusiast.",
  skills: [
    emoji(
      `⚡ A passionate individual who always thrive to work on end to end products which develop sustainable 
      and scalable social and technical systems to create impact. `
    ),
    emoji(
      `⚡I have experience working on projects related to Data Science and Web Development for solving the problems for which I am Interested and Passionate about.`
    ),
    emoji(
      `⚡Currently, I'm in the Final Year of my Bachelor's and looking for opportunities in the field of Full Stack Development and Software Development.`
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design ", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
    {
      Stack: "Data Science",
      progressPercentage: "50%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front End Developer",
      company: "Intermedia",
      companylogo: require("./assets/images/IntermediaLogo.png"),
      date: "May 2018 – May2019",
      desc: "Front End Developer For LNMIIT Research Group Intermedia.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "lakshaysharma14", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company
const bigProjects = {
  title: "Some Big Projects",
  subtitle: "Mern Stack Projects on Which I have Worked On !!",
  projects: [
    {
      image: require("./assets/images/Visitor.png"),
      link: "https://github.com/lakshaysharma14/Visitor-Management-System",
    },
    {
      image: require("./assets/images/Bank.gif"),
      link: "https://github.com/lakshaysharma14/Personal-Banking-System ",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications, that I have completed in the Field of Web Dev and Data Science !",

  achivementsCards: [
    {
      title: "Free Code Camp Front End Certification",
      subtitle:
        "Completed Free Code Camp Front End Certifcation Representing 300 hours of Coursework.",
      image: require("./assets/images/fcc.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/12zraFp5m9zo9Vjh4qANzEM-bZh0YMewO/view?usp=sharing",
        },
      ],
    },
    {
      title: "Coding Elements Full Stack Development Certification",
      subtitle:
        "Completed Full Stack Development Project Based Classroom Course",
      image: require("./assets/images/codingElements.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B4I8atRu3jh-Qmk0UkVCRGJiWlNEQWc2N3FLNk1SOWJ2SXY4/view?usp=sharing",
        },
      ],
    },

    {
      title: "Datacamp Data Science with Python Certification ",
      subtitle:
        "Completed 26 courses under Data Science with Python Track Representing 100 Hours of Course Work",
      image: require("./assets/images/datacamp.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1ESMupedCqJfAlc7cPi_RxAc0Ry8LKBQJ/view?usp=sharing",
        },
        {
          name: "Data Science Project",
          url:
            "https://github.com/lakshaysharma14/BreastCancer-Data-Analysis-Innovaver.git",
        },
      ],
    },
  ],
};

//==================================Blogs Section =========================================================

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
};

//========================================= Talks Sections ==========================================================

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
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

//======================================== Podcast Section ==================================================

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

//==========================================================================================================

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  // subtitle: "F ",
  number: "+91-9599029231",
  email_address: "17ucc034@lnmiit.ac.in",
};

//Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
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
};
