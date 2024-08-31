export type Project = {
    image?: string;
    title: string;
    subheading: string;
    role: string;
    duration: string;
    team?: string[];
    disciplines: string[];
    technologies: string[];
    introduction?: string;
    problem?: string;
    achievements?: string[];
    technical?: string;
    learnings?: string;
  };
  
  export type ProjectData = {
    [key: string]: Project;
  };


export const projectData: ProjectData = {
    capitalonemobile: {
      image: 'capitalone.png',
      title: 'Mobile Development at Capital One',
      subheading: 'Increasing user accessibility and app functionality to improve workplace productivity.',
      role: 'Software Engineer Intern',
      duration: 'Jun 2024 - Aug 2024',
      team: ['Alex Chang - Manager', 'Harry Li - Intern', 'Charlie Lin - Intern'],
      disciplines: ['iOS Mobile Application', 'Front-End Development', 'Design'],
      technologies: ['SwiftUI'],
      introduction: `
As a technology development intern on Capital One’s Associate Experience team, I worked on the enhancement and development of an internal iOS mobile application used by 10,000+ associates. By driving end-to-end Swift development, I significantly improved the app’s user experience, expanded its functionality, and increased accessibility, ultimately boosting workplace productivity.
  
  During my internship, I worked on two projects:
  #1 Increasing app data accessibility through home screen widgets
  #2 Integrating mini-application into super-application
  `,
  problem: `
  Project #1: Modern Mini-App Integration

    Capital One’s podcasting application previously existed as a standalone web platform. To increase user accessibility and usage of this platform, I helped to implement a completely redesigned, reimagined version of this podcasting application as a mini-application within the main super-application (with 10,000+ users) using SwiftUI, allowing users to search, play, download 1000+ live posted podcasts. These super-app iOS developments will be deployed as part of the app’s next version release. 
  
  Project #2: Accessible & Convenient Data Access

    In order to access urgent, time-sensitive data for Capital One’s main expense & authorization approval request pipeline, users would have to click into the application, and then into a mini-app within the super-app. To remedy this multi-step process, I created a widget that users could easily add to their home screen allowing them to access live data from within the app. This widget also automatically updates in response to the users actions (e.g. approving/declining requests) within the app. 
`,
learnings: `
SWIFT - A NEW PROGRAMMING LANGUAGE
Going into iOS mobile development, I was completely new to Swift/SwiftUI. Many concepts were quite unfamiliar (I mean, what even is a ViewModel???), and I learned soon that many best practices and nuanced techniques were best gained through hands-on experience! Over the course of my internship, I became proficient in Swift-specific concepts including closures, protocols, extensions, and state management. More importantly, I learned how to modularize code into reusable components, efficiently manage data flow across views, and connect front-end and back-end in Swift.
 
"GOOD" & COLLABORATIVE CODING
What is “good” coding? This internship taught me that it’s more than just basic object-oriented principles - I discovered how effective code can be described by two main principles: reusability and readability! Thoughtful naming conventions and organized file structures can go a long way, especially in a collaborative setting such as mine. Additionally, I learned that with good code, sometimes more is more - when it means enhancing clarity and intuitiveness. Finally, I found a lot of joy in the brainstorming and design thinking process in figuring out the best way to break the app into reusable components.

THINKING ABOUT THE USER
A large amount of my work was user facing - one initiative I worked on was implementing solutions for managing data storage - including user-generated content to create a personalized experience within the app. One significant challenge was the lengthy loading times, which negatively affected user experience, especially when data changes led to slow UI responses. 
To address this, I developed solutions to update and reload data only when necessary, and offloaded intensive data calculations to background threads. Furthermore - slow app loading times were caused by processing over 100 live podcast data entries. By implementing caching and concurrency, I optimized simultaneous API calls and improved data loading efficiency. As a result, I reduced app loading times by 90%, significantly enhancing the user experience. 
During the final project presentation, I was pleased to see the positive reactions and enthusiasm from the audience which really emphasized the importance of my work in optimizing user experience.
 `,
    },
    microplasticdetection: {
      image: 'microplastic.png',
      title: 'AI-Powered Microplastic Detection',
      subheading: 'Developing and automating underwater microplastic detection through deep learning technology.',
      role: 'Lead Research Intern',
      duration: 'May 2023 - Aug 2023',
      team: ['Dr. Masudul Imtiaz - PI', 'Md Abdul Baset Sarker - mentor'],
      disciplines: ['Machine Learning', 'Computer Vision'],
      technologies: ['Python', 'YOLO (You Only Look Once) Object Detection models', 'Deep SORT Object Tracking algorithm', 'ML Libraries: PyTorch, SuperGradients', 'Intel RealSense Library'],
      introduction: 'Microplastics are a pressing threat to marine and freshwater environments. Given the current lack of technologies for rapidly identifying and quantifying microplastics in underwater environments, I worked with the Clarkson University AI Vision Lab (AVHBAC) to develop a real-time camera-based system capable of detecting and tracking underwater microplastics. \n\nAs one of ten undergraduate students selected for the Clarkson University NSF-funded research program, I took on a leading role on this project, guiding its progression and direction over the internship period of three months.',
      problem: 'As the lead researcher on this project, I decided on the new direction of the project through my observations that 1. The current detection system failed to capture the distance from camera to microplastiic and 2. Smaller-sized microplastics were being detected at much lower rates.',
      achievements: ['Trained and implemented novel deep learning model for microplastic detection, achieving 5x more accurate detections of small-sized microplastics.', 'Integrated software with three-dimensional camera system to derive depth data from images, resulting in a 37% improvement in microplastic size and velocity calculations.', 'Integrated new microplastic detection system with advanced object tracking algorithm DeepSORT to enable real-time multi-object microplastic tracking.'],
      learnings: 'insert learnings'
    },
    biometricapp: {
      image: 'biometric.png',
      title: 'AI Vision Lab',
      subheading: 'Details about the AI Vision Lab...',
      role: 'Lead Research Intern',
      duration: 'May 2023 - Aug 2023',
      team: ['Dr. Masudul Imtiaz - mentor'],
      disciplines: ['Android Application'],
      technologies: ['Java'],
    },
    compbio: {
      image: 'evolution.png',
      title: 'Exploring Computational Biology',
      subheading: 'Unveiling evolutionary relationships through computational tools',
      role: 'Undergraduate Research Assistant',
      duration: 'Jul 2021 - Jun 2022',
      disciplines: ['Evolutionary Biology'],
      technologies: ['Python', 'R', 'C++'],
    },
    evolution: {
      title: 'Exploring Computational Biology',
      subheading: 'Unveiling evolutionary relationships through computational tools',
      role: 'Undergraduate Research Assistant',
      duration: 'Jul 2021 - Jun 2022',
      disciplines: ['Evolutionary Biology'],
      technologies: ['Python', 'R', 'C++'],
    },
  };
  
  