import ProjectLayout from './layout';
import styles from './About.module.css'; // Import your CSS module
import homeStyles from './../Home.module.css'; // Import your CSS module
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <ProjectLayout>
      <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Hi, I&apos;m Natalie Zhu!</h1>
      <p><b>Here&apos;s a little about me</b></p> 
      

      </div>
    </ProjectLayout>
  );
}
