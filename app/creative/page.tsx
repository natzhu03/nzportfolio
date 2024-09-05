import ProjectLayout from './layout';
import styles from '../Home.module.css'; // Import your CSS module
import Image from 'next/image';
import Link from 'next/link';

export default function Creative() {
  return (
    <ProjectLayout>
      <div className={styles.pageContainer}>
        <div className={styles.scrollContainer}>
          <div className={styles.imageContainer}>
            <Link href="/projects/furniture">
              <Image 
                src="/images/furniture.png"  
                alt="Social Furniture"
                width={550}  
                height={300} 
                className={styles.image}
              />
              <div className={styles.date}>Spring 2024</div>
              <div className={styles.caption}>Social Furniture at Brown</div>
              <div className={styles.descriptor2}>Creating interactions between strangers</div>
              <div className={styles.descriptor}>FURNITURE DESIGN | 3D MODELING | DESIGN ENGINEERING</div>
            </Link>
          </div>

          <div className={styles.imageContainer}>
            <Link href="/projects/horse">
              <Image 
                src="/images/horse.png"  
                alt="Horse App"
                width={550}  
                height={300} 
                className={styles.image}
              />
              <div className={styles.date}>Summer 2023</div>
              <div className={styles.caption}>Horse Health Web App</div>
              <div className={styles.descriptor2}>Re-envisioning data entry + communication</div>
              <div className={styles.descriptor}>UI UX DESIGN | DEVELOP FOR GOOD</div>
            </Link>
          </div>
        </div>

        <p><em>Some of my other experiences include:</em></p>
        <p>Social media/graphic design work for Brown&apos;s TRUE (Transfer and Resumed Undergraduate Education) program</p>
        <div className={styles.imageRow}>
  <Image 
    src={`/images/true.png`} 
    alt="Image" 
    width={600} 
    height={400}
    className={styles.image} 
  />
  <Image 
    src={`/images/true2.png`} 
    alt="Image" 
    width={450} 
    height={400}
    className={styles.image} 
  />
  <Image 
    src={`/images/true3.png`} 
    alt="Image" 
    width={500} 
    height={400}
    className={styles.image} 
  />
</div>

    <p>Official blog website for Fall 2023 study abroad program</p>

    <Image 
        src={`/images/blog.png`} 
        alt="Image" 
        width={800} 
        height={500} 
        className={styles.image} 
      />

    <a href=" https://natspassport1.wordpress.com/" target="_blank" rel="noopener noreferrer">
    Blog link here
    </a>

      </div>
    </ProjectLayout>
  );
}
