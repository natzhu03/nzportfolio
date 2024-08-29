// app/projects/[projectId]/page.tsx
"use client";
import { useParams } from 'next/navigation';
import ProjectLayout from './layout';
import styles from './ProjectPage.module.css'; // Import CSS module
import Image from 'next/image';


type Project = {
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
  learnings?: string[];
};

type ProjectData = {
  [key: string]: Project;
};

const projectData: ProjectData = {
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
As a technology development intern on Capital Ones Associate Experience team, I worked on the enhancement and development of an internal iOS mobile application used by 10,000+ associates. By driving end-to-end Swift development, I significantly improved the apps user experience, expanded its functionality, and increased accessibility, ultimately boosting workplace productivity.

During my internship, I worked on two projects:
#1 Increasing app data accessibility through home screen widgets
#2 Integrating mini-application into super-application
`,
  problem: 'To access data, such as pending approval requests, users would have to click into the super-app, then the mini-app. I created a widget that users can add to their homescreen to access live data from inside the app, and that automatically updates in response to any user updates within the app. Additionally, Capital One&apos;s internal podcasting application exists only as an outdated standalone web platform which many users don&apos;t use as it&apos;s clunky and outdated. We implemented a completely redesigned, reimagined version as a mini-application using SwiftUI, allowing users to search, play, download 1000+ live posted podcasts. These super-app iOS developments will be deployed as part of the app&apos;s next version release and accessible to all its users',
    technical: 'The technical process: Going into this project, Swift/SwiftUI was a completely new language and framework for me to use. The idea of Views, ViewModels was all new, and there were some tips and tricks that you could only know from experience. Throughout the weeks, I learned the importance of code reusability and splitting aspects of the app into components. I learned how to work with data received from API calls in Swift - how that is decoded/processed. I created many of the app components and in doing so, learned the importance of making code flexible and intuitive. I implemented solutions for data storage, including data posted/inputted by users and reflected by the app to create a customized/personal experience. One major frustration was the long loading times, which significantly impacted user loading times. More specifically, slow response from the UI when data changed - I engineered solutions that required data only be updated/reloaded when necessary, and placed hefty data calculations on the background thread. Additionally, app loading times were long when loading the 100+, live podcast data. I learned that the solution to this was implementing caching and concurrency, enabling API calls to occur in tandem and therefore optimize simultaneous data loading operations. Through this, I was able to decrease the app loading time by 90%, greatly improving the user experience. Finally, in regards to the home screen widget - had to engineer solutions for passing data from the app into the widget.',
    learnings: ['Technical process: General impact and learnings: Working as a team required utmost clarity, readability, and reusability with the code. In our final intern presentation, we realized the amount of people this affected as they expressed their enthusiasm in response to our demo. Realized the importance of our work in truly optimizing the user experience.']
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
    learnings: ['insert learnings']
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

export default function ProjectPage() {
  const { projectId } = useParams();

  const project = projectId && typeof projectId === 'string'
    ? projectData[projectId] 
    : { title: '', subheading: '', role: '', duration: '', team: [], disciplines: [], technologies: [], introduction: '' };

  return (
    <ProjectLayout>
      <div className={styles.pageContainer}>
        <div className = {styles.imageContainer}>
      <Image 
              src={`/images/${project.image}`}
              alt="Image"
              width={650}  
              height={500} 
              className={styles.image}
            />
            </div>

        <h1 className={styles.h1}>{project.title || 'Project Not Found'}</h1>
        <p style={{ fontStyle: 'italic' }}>
        {project.subheading || 'No subheading available.'}
      </p>        
        <div className={styles.container}>
        <section>
          <h3 className={styles.gridTitle}>ROLE</h3>
          <p className={styles.gridContent}>{project.role || 'No roles listed.'}</p>
        </section>
        <section>
          <h3 className={styles.gridTitle}>DURATION</h3>
          <p className={styles.gridContent}>{project.duration || 'No duration listed.'}</p>
        </section>

        {project.team && (
        <section>
          <h3 className={styles.gridTitle}>TEAM</h3>
          <ul className={styles.bulletList}>
            {project.team?.map((item, index) => (
              <li key={index} className={styles.bulletItem}>
                {item}
              </li>
            ))}
          </ul>
          </section>
        )}

        <section>
          <h3 className={styles.gridTitle}>DISCIPLINES</h3>
          <ul className={styles.bulletList}>
            {project.disciplines?.map((item, index) => (
              <li key={index} className={styles.bulletItem}>
                {item}
              </li>
            ))}
          </ul>        </section>
        <section>
          <h3 className={styles.gridTitle}>TECHNOLOGIES</h3>
          <ul className={styles.bulletList}>
            {project.technologies?.map((item, index) => (
              <li key={index} className={styles.bulletItem}>
                {item}
              </li>
            ))}
          </ul>        </section>
        </div>

        {project.introduction && (
          <section>
            <h3 className={styles.sectionTitle}>INTRODUCTION</h3>
            <p className={styles.sectionContent}>{project.introduction}</p>
          </section>
        )}

        {project.problem && (
          <section>
            <h3 className={styles.sectionTitle}>Problem Statement</h3>
            <p className={styles.sectionContent}>{project.problem}</p>
          </section>
        )}

        {project.achievements && (
          <section>
            <h3 className={styles.sectionTitle}>Achievements</h3>
            <p className={styles.sectionContent}>{project.achievements}</p>
          </section>
        )}


      {project.technical && (
          <section>
            <h3 className={styles.sectionTitle}>Technical Process</h3>
            <p className={styles.sectionContent}>{project.technical}</p>
          </section>
        )}

        {project.learnings && (
          <section>
            <h3 className={styles.sectionTitle}>Learnings</h3>
            <p className={styles.sectionContent}>{project.learnings}</p>
          </section>
        )}

      </div>
    </ProjectLayout>
  );
}
