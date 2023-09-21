import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    uhs,
    squad,
    csClub,
    ubique,
    threejs,
    sentiment,
    portfolioSite,
    mlrmodel,
    winecluster,
    rstudtio,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "R",
      icon: rstudtio,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full-stack Developer",
      company_name: "Ubique Magazine",
      icon: ubique,
      iconBg: "#FFFFFF",
      date: "March 2022 - Jan 2023",
      points: [
        "Developing and maintaining web app using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, writers and editors",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Spearheaded the project with a management plan and regular meetings",
      ],
    },
    {
      title: "President of Game Dev Club",
      company_name: "The University High School",
      icon: uhs,
      iconBg: "#FFFFFF",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Mentored and taught younger students the fundamentals of game development using tools such as Unity, Blender, C++, and C#, fostering their passion for the field.",
        "Organized and participated in nationwide game development competitions, showcasing proficiency in game design and programming on a larger scale.",
        "Successfully hosted game jams, promoting collaboration and innovation within the club and providing members with hands-on experience in game development.",
        "Served as the President of the Game Dev Club, demonstrating leadership and organizational skills. Contributed to the growth of the club's membership, attracting students with a shared interest in game development.",
      ],
    },
    {
      title: "Committee member",
      company_name: "Society for quantitative analysis and data science",
      icon: squad,
      iconBg: "#FFFFFF",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Collaborated with fellow committee members to plan and execute events, workshops, and initiatives related to quantitative analysis and data science.",
        "Seek sponsorships and meet with companies such as PWC and Janestreet",
        "Played a pivotal role in organizing educational seminars and workshops, providing opportunities for members to enhance their skills in data analysis, statistics, and related fields.",
        "Fostered a sense of community and networking among members, facilitating connections and knowledge-sharing in the field of quantitative analysis and data.",
      ],
    },
    {
      title: "Committee member",
      company_name: "CS Club Adelaide",
      icon: csClub,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - Present",
      points: [
        "Collaborated with other club members or experts in the field to ensure the workshops were informative, up-to-date, and aligned with industry trends.",
        "Shared resources, tutorials, and reference materials with workshop participants, enabling them to continue their AI learning journey beyond the workshops.",
        "Contributed to the broader mission of the Computer Science Club by advancing members' knowledge and skills in emerging technologies like ML, which are increasingly important in the field of computer science.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The website that Khanh has created for my yoga studio has improved its success dramatically.",
      name: "Vi Truong",
      designation: "Owner",
      company: "Grasse yoga studio",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      testimonial:
        "On my arrival to University High School, it was clear to me that Khanh was the glue that bound together much of this vibrant learning community.",
      name: "Christopher Bush",
      designation: "Head of Student Voice and Leadership",
      company: "UHS",
      image: "https://media.licdn.com/dms/image/C5603AQHzsPqYsie7sg/profile-displayphoto-shrink_400_400/0/1628403687989?e=1700697600&v=beta&t=T5kLdOY0jmiEbGJo7ypooGCSzze1ZwsbjEkofPwdWA0",
    },
    {
      testimonial:
        "He just wanted to help the others out. It quickly became apparent that this interaction is typical of the selfless generosity of Khanh.",
      name: "Briget Costelloe",
      designation: "Head of English and Literature",
      company: "UHS",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Did our playlists catch the pandemic blues?",
      description:
        "Sentiment analysis on Australians' daily top 200 songs during COVID-19 compared to pre-pandemic",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "R",
          color: "green-text-gradient",
        },
        {
          name: "NLTK",
          color: "pink-text-gradient",
        },
        {
          name: "Seaborn",
          color: "white-text-gradient",
        },
      ],
      image: sentiment,
      source_code_link: "https://github.com/khanhgn/covid19-sentiment-analysis",
    },
    {
      name: "Prediction Model for forest fires",
      description:
        "A multiple linear regression model incorporating various weather indices to forecast the occurrence and behavior of forest fires.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "R",
          color: "green-text-gradient",
        },
        {
          name: "Excel",
          color: "pink-text-gradient",
        },
      ],
      image: mlrmodel,
      source_code_link: "https://github.com/",
    },
    {
      name: "Classifying wine based on regions with K-means clusterning",
      description:
        "An unsupervised Machine Learning project that aims to classify wine samples to 3 different regions which corresponds to 3 different wineries in Spain.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "R",
          color: "green-text-gradient",
        },
        {
          name: "Excel",
          color: "pink-text-gradient",
        },
      ],
      image: winecluster,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio website",
      description:
        "A portfolio website that displays my projects and experiences :D",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolioSite,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };