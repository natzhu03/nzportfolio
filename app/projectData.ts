export type Project = {
    image?: string;
    title: string;
    subheading: string;
    role?: string;
    org?: string;
    duration?: string;
    team?: string[];
    disciplines?: string[];
    technologies?: string[];
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
As a technology development intern on Capital One's Associate Experience team, I worked on the enhancement and development of an internal iOS mobile application used by 10,000+ associates. By driving end-to-end Swift development, I significantly improved the app's user experience, expanded its functionality, and increased accessibility, ultimately boosting workplace productivity.
  
  During my internship, I worked on two initiatives:
  `,
  problem: `
  PROJECT #1: Modern Mini-App Integration

    Capital One's podcasting application previously existed as a standalone web platform. To increase user accessibility and usage of this platform, I helped to implement a completely redesigned, reimagined version of this podcasting application as a mini-application within the main super-application (with 10,000+ users) using SwiftUI, allowing users to search, play, download 1000+ live posted podcasts. These super-app iOS developments will be deployed as part of the app's next version release. 
  
  PROJECT #2: Accessible & Convenient Data Access

    In order to access urgent, time-sensitive data for Capital One's main expense & authorization approval request pipeline, users would have to click into the application, and then into a mini-app within the super-app. To remedy this multi-step process, I created a widget that users could easily add to their home screen allowing them to access live data from within the app. This widget also automatically updates in response to the users actions (e.g. approving/declining requests) within the app. 
`,
learnings: `
SWIFT - A NEW PROGRAMMING LANGUAGE
Going into iOS mobile development, I was completely new to Swift/SwiftUI. Many concepts were quite unfamiliar (I mean, what even is a ViewModel???), and I learned soon that many best practices and nuanced techniques were best gained through hands-on experience! Over the course of my internship, I became proficient in Swift-specific concepts including closures, protocols, extensions, and state management. More importantly, I learned how to modularize code into reusable components, efficiently manage data flow across views, and connect front-end and back-end in Swift.
 
"GOOD" & COLLABORATIVE CODING
What is “good” coding? This internship taught me that it's more than just basic object-oriented principles - I discovered how effective code can be described by two main principles: reusability and readability! Thoughtful naming conventions and organized file structures can go a long way, especially in a collaborative setting such as mine. Additionally, I learned that with good code, sometimes more is more - when it means enhancing clarity and intuitiveness. Finally, I found a lot of joy in the brainstorming and design thinking process in figuring out the best way to break the app into reusable components.

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
      problem: `
      Previously, the AVHBAC developed a camera-based system that detected the presence and movement of microplastics through an underwater tank. Given the current system, I took notice of three pressing issues: 1. The current detection system failed to capture the distance from camera to microplastic - resulting in accurate microplastic velocity calculations - highlighting the need for a 3d camera based system that also takes into account depth information. Additionally: 2. Smaller-sized microplastics were being detected at significantly lower rates than their bigger counterparts. 3. While the current system could detect the presence of objects (microplastics), it did not track them - meaning that a single moving object was inaccurately counted as multiple moving objects through different frames.

      Over the 10 weeks of my research internship, I led the project towards three corresponding new objectives: implementing the ability for the system to derive depth data from images and consequently enabling accurate velocity and speed calculations, and greatly increasing the accuracy of its detection of extremely small microplastics and consequently making the detection system much more accurate for a real-world environment, and finally implementing microplastic tracking to allow for accurate microplastic population counts.

      By the end of the summer, I had successfully trained and implemented a novel deep learning model for microplastic detection, achieving 5x more accurate detections of small-sized microplastics. Furthermore, I integrated software with three-dimensional camera system to derive depth data from images, resulting in a 37% improvement in microplastic size and velocity calculations. Additionally, I integrated this new microplastic detection system with the advanced object tracking algorithm DeepSORT to enable real-time multi-object microplastic tracking. 
 
      `,
      learnings: `
      - During this internship I learned to rely heavily on documentation, as my work was largely independent and involved me using many new tools I had never encountered before (YOLO, PyTorch etc.)
      - Keeping track of errors is important in case encountering similar issues later on!!!
      - Still, there are many ways left to improve this microplastic tracking system for the real world - taking into account complex background, water turbidity/impurities, irregular microplastic shape etc.

      `
    },
    biometricapp: {
      image: 'biometric.png',
      title: 'Biometric Iris Identification',
      subheading: 'Developing high quality biometric authentication through an android application for iris capture and recording.',
      role: 'Research Intern',
      duration: 'May 2023 - Aug 2023',
      team: ['Dr. Masudul Imtiaz - PI', 'Naveenkumar Venkataswamy - mentor & project lead'],
      disciplines: ['Android Development', 'Computer Vision', 'Front-End Design'],
      technologies: ['Java', 'HTML/CSS', 'OpenCV library', 'Android Studio & Android SDK'],
      introduction: `
      I interned at Clarkson University's AI Vision Lab (AVHBAC) to further their work on developing biometric sensors, biometric data acquisition systems, and biometric testing methodologies. One particular goal in this area is to achieve high quality image capture of iris data, which would result in achieving an optimal biometric authentication system.

      This project aimed to develop a mobile camera-based Android application to perform accurate image capture and storage of irises for users to utilize biometric identification. I decided to improve the performance and usability of this Android application and help develop a new quality assessment feature.
      `,
      problem:  `
      This Android Application was developed by Naveenkumar Venkataswamy and currently detected and captured user irises. However, a few key features were still yet to be implemented - particularly user feedback on image quality. This meant that while iris images could be captured, blurry images were not filtered out or prevented.

      To address this issue, I helped to implement an image blurriness check with the OpenCV library, which applied the Laplacian method. I also worked on optimizing the app's performance, by reworking the Java codebase to best implement the process of image capture, rotation, analysis, and storage. In addition, I helped move time-consuming operations to background threads and reduced app resource consumption. 
       `, 
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
    furniture: {
      image: 'furniture.png',
      title: 'Imagining & Designing "Social Furniture" on the Brown University campus',
      subheading: 'Nudging interactions between strangers through design and engineering',
    },
    horse: {
      image: 'maryland.png',
      title: 'Horse Stressors App Design',
      subheading: 'Redesigning Maryland Therapeutic Riding\'s horse health data tracking system and operations',
      introduction: 'Previously, Maryland Therapeutic Riding (MTR) was inefficiently inputting data on their horse’s stress levels. We tackled this problem by designing a web application to streamline data input and tracking, and improve staff operations.',
      role: "Subteam Lead Designer",
      duration: 'May 2023-Aug 2023',
      technologies: ['Figma', 'Figjam'], 
      org: 'Develop for Good',
      problem: `
      As one of two subteam Design leads, I led the transformation of Maryland Therapeutic Riding’s horse health data tracking system and operations through the design of a new web-based SaaS product, increasing staff accessibility and operational efficiency.
      I also directed essential stages of the design process to redesign client data and spreadsheets as a sophisticated, responsive website, including the storyboarding, wireframing, A/B testing, and low and high-fidelity prototyping phases.
      `,
    },
  };
  
  