import {
    frontend,
    cobol,
    physics,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    python,
    cob,
    mainframe,
    blender,
    tableau,
    cpp,
    angular,
    vue,
    git,
    figma,
    bologna,
    lmu,
    yangzhou,
    alten,
    icypeas,
    ca,
    mapp,
    pawbook,
    weather,
    calculator,
    tenzies,
    drum_machine,
    timer,
    battleship,
    kimwen,
    gameoflife,
    // threejs,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: frontend,
      link: "work"
    },
    {
      title: "Cobol Developer",
      icon: cobol,
      link: "work"
    },
    {
      title: "Physics Researcher",
      icon: physics,
      link: "physics"
    }
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular JS",
      icon: angular,
    },
    {
      name: "Vue.js",
      icon: vue,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Python",
      icon: python,
    },
    {
      name: "Cobol",
      icon: cob,
    },
    {
      name: "IBM Mainframe",
      icon: mainframe,
    },
    {
      name: "C++",
      icon: cpp,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "Blender",
      icon: blender,
    },
  ];
  
  const studies = [
    {
      title: "Theoretical Physics",
      company_name: "Yangzhou University (China )",
      icon: yangzhou,
      iconBg: "#1f2937",
      date: "Sep 2020 - May 2024",
      points : [
        "Thesis title: 'Entropy and Thermodynamic Effects of Black Holes and Cosmology'",
      ]
    },
    {
      title: "Theoretical Physics",
      company_name: "LMU - Ludwig-Maximilians-Universität München (Germany)",
      icon: lmu,
      iconBg: "#1f2937",
      date: "Sep 2018 - Sep 2019",
      points: [
        "Thesis written as part of the Erasmus+ project with the research group of prof.Dvali.",
      ],
    },
    {
      title: "Theoretical Physics",
      company_name: "University of Bologna (Italy)",
      icon: bologna,
      iconBg: "#1f2937",
      date: "Sep 2017 - Feb 2020",
      points: [
        "Thesis title: 'Quantum rotating black holes and extra dimensions'",
        "Grade : 110/110",
      ],
    },
    {
      title: "Physics",
      company_name: "University of Bologna (Italy)",
      icon: bologna,
      iconBg: "#1f2937",
      date: "Sep 2014 - Oct 2017",
      points: [
        "Thesis title: 'Modelli cosmologici di Friedmann-Robertson-Walker'",
        "Grade : 110/110",
      ],
    }
  ];

  const experiences = [
    {
      title: "Cobol Developer",
      company_name: "Crédit Agricole",
      icon: ca,
      iconBg: "#1f2937",
      date: "Nov 2023 - CURRENT",
      points: [
        "Actively involved in all stages of the software development lifecycle in the current role at Crédit Agricole.",
        "Responsibilities include understanding client requirements, building features, and testing the application.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Icypeas",
      icon: icypeas,
      iconBg: "#1f2937",
      date: "Aug 2023 - Sep 2023",
      points: [
        "Actively contributed to the development of a role based email search that utilized Vue.js.",
        "Created a dynamic loading component for processing during a search.",
        "Actively developed certain subdomains that incorporated relevant information for the user.",
        "Implemented an important component relating to result visualization.",
        "Worked with data management tools.",
        "Actively participated in scrum rituals.",
      ]
    },
    {
      title: "Frontend Developer",
      company_name: "Alten Italia",
      icon: alten,
      iconBg: "#1f2937",
      date: "Nov 2022 - May 2023",
      points: [
        "Gained valuable experience in web development with two popular frameworks: Angular and React.",
        "Utilized Angular to create a dynamic web application that visualized clients and consultants on a map.",
        "Implemented essential filtering and search capabilities within the Angular application.",
        "Added features for importing and exporting search results to enhance the client-consultant matching process.",
        "Expanded skill set by learning React and developed a solid understanding of its capabilities through personal projects.",
      ],
    }
  ];

  const projects = [
    {
      language: 'Angular',
      prjs: [
        { name: "Mapp",
          description:
            "Web application that allows users to compare, search and match clients and resources for the company Alten. This work was successfully presented as a demo for the development of a real internal managment application.",
          image: mapp,
          source_code_link: "https://github.com/CherryChiriko/mapp",
        },
        { name: "Pawbook",
          description:
            "Witty and funny Facebook clone for pets.",
          image: pawbook,
          source_code_link: "https://github.com/CherryChiriko/pawbook",
        },
      ],
    },
    {
      language: 'React',
      prjs: [
        { name: "Weather app",
          description:
            "A web application that visualizes current weather conditions for various cities. It features a search bar for selecting a city, and upon selection, the background image dynamically updates to reflect the chosen location's weather. The application integrates with a weather API and is built using React and Redux.",
          image: weather,
          source_code_link: "https://github.com/CherryChiriko/Weather",
        },
        { name: "Calculator",
          description:
            "This calculator utilizes regular expressions (RegEx) to carry out mathematical operations using formula logic. The interface displays the current operation in yellow, while the last entered number is shown in white.",
          image: calculator,
          source_code_link: "https://github.com/CherryChiriko/calculator",
        },
        { name: "Tenzies game",
          description:
            "This is a dice game called 'Tenzies'. The goal of the game is to roll the dice and try to get all of them to display the same value. To aid you in achieving this, you can choose to hold (or fix) certain dice while rolling the others. It features a confetti animation upon victory.",
          image: tenzies,
          source_code_link: "",
        },
        { name: "Drum machine",
          description:
            "This drum pad application simulates a virtual drum set. You can trigger drum sounds by either pressing the corresponding keys on your keyboard or clicking the buttons displayed on the screen. The name of the sound is then shown in the aqua-colored box on the right.",
          image: drum_machine,
          source_code_link: "https://github.com/CherryChiriko/drum-machine",
        },
        { name: "Timer",
          description:
            "This timer is designed to implement the productivity-boosting Pomodoro technique, that alternates study/work sessions of 25 minutes with a 5-minutes break. The app sends an acoustic signal to alert you of the phase change.",
          image: timer,
          source_code_link: "https://github.com/CherryChiriko/timer",
        },
      ],
    },
    {
      language: 'Python',
      prjs: [
        { name: "Black hole evaporation model",
          description:
            "This model implements an algorithm for the evaporation of a charged and rotating black hole, demonstrating the flaws of the Kim Wen model and opening new research prospects. A graphic interface on kivy allows you to select the particles in the system.",
          image: kimwen,
          source_code_link: "",
        },
        { name: "Battleship game",
          description:
            "A battleship console game. The user can select the cell to attack and the app will show the updated board, showing whether it hit water or a ship. If the ship is sunk, water is automatically displayed all around it.",
          image: battleship,
          source_code_link: "",
        },
        { name: "Game of life",
          description:
            "An implementation of Conway's game of life. Choosing an initial configuration of colored cells, the system evolves following a set of rules to create unique patterns.",
          image: gameoflife,
          source_code_link: "",
        },
      ],
    },
    
  ];
  
  export { services, technologies, studies, experiences, projects };