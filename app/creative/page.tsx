import ProjectLayout from './layout';
import styles from './Creative.module.css'; // Import your CSS module
import homeStyles from './../Home.module.css'; // Import your CSS module
import Image from 'next/image';
import Link from 'next/link';

export default function Creative() {
  return (
    <ProjectLayout>
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>check out some of my creative design work!</h1>

        <h1 className={styles.h1}>PROJECTS</h1>
        <div className={homeStyles.scrollContainer}>
          <div className={homeStyles.imageContainer}>
            <Link href="/projects/furniture">
              <Image 
                src="/images/furniture.png"  
                alt="Social Furniture"
                width={550}  
                height={300} 
                className={homeStyles.image}
              />
              <div className={homeStyles.date}>Spring 2024</div>
              <div className={homeStyles.caption}>Social Furniture at Brown</div>
              <div className={homeStyles.descriptor2}>Creating interactions between strangers</div>
              <div className={homeStyles.descriptor}>FURNITURE DESIGN | 3D MODELING | DESIGN ENGINEERING</div>
            </Link>
          </div>

          <div className={homeStyles.imageContainer}>
            <Link href="/projects/horse">
              <Image 
                src="/images/horse.png"  
                alt="Horse App"
                width={550}  
                height={300} 
                className={homeStyles.image}
              />
              <div className={homeStyles.date}>Summer 2023</div>
              <div className={homeStyles.caption}>Horse Health Web App</div>
              <div className={homeStyles.descriptor2}>Re-envisioning data entry + communication</div>
              <div className={homeStyles.descriptor}>UI UX DESIGN | DEVELOP FOR GOOD</div>
            </Link>
          </div>
        </div>

        <h1 className={styles.h1}>MISC</h1>
        <p><em>I&apos;m also passionate about graphic design and media work - some of my experiences include: </em></p>
        <br />

        <h1 className = {styles.heading}>Social media/graphic design work for Brown&apos;s TRUE (Transfer and Resumed Undergraduate Education) program</h1>
        <p>As the TRUE Communications Advisor, I was in charge of all pre-matriculation promotional/preparational material and communication for incoming Brown transfer students. Check out some of my design work below:</p>
        <br />

        <div className={styles.imageRow}>

        <div className={styles.imageContainer}>
            <Image 
              src={`/images/true.png`} 
              alt="Image" 
              width={850} 
              height={600}
              className={styles.image} 
            />
            <div className={styles.caption}>My design for the TRUE orientation handbook & merchandise!</div>
        </div>

        <div className={styles.imageContainer}>
            <Image 
              src={`/images/true2.png`} 
              alt="Image" 
              width={680} 
              height={600}
              className={styles.image} 
            />
            <div className={styles.caption}>My social media work - drawing + posting TRUE student advisors</div>
            </div>

            <div className={styles.imageContainer}>
            <Image 
              src={`/images/true3.png`} 
              alt="Image" 
              width={700} 
              height={600}
              className={styles.image} 
            />
            <div className={styles.caption}>Some more promotional content for the TRUE Instagram page</div>
        </div>
            
</div>

    <br />


    <h1 className = {styles.heading}>Official student blogger website for Fall 2023 study abroad program.</h1>

    <p>For my study abroad program in Copenhagen, Denmark, I was selected as a blogging ambassador for the program, so I got to design my own blog to share my abroad experience and post weekly</p>

    <a href="https://natspassport1.wordpress.com/" style={{ color: 'blue', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" >Check out my blog site here!</a>

    <Image 
        src={`/images/blog.png`} 
        alt="Image" 
        width={1000} 
        height={700} 
        className={styles.image} 
      />

    <br />

      </div>
    </ProjectLayout>
  );
}
