import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', padding: '20px' }}>
      
      
      <div style={{ padding: '80px'}} >
      <p>
        <span style={{ fontSize: '30px', marginLeft: '70px'  }}> 👋 Hi there, Im</span> <span style={{ fontSize: '40px' }}>Natalie Zhu</span>.
      </p>

      <p style={{ fontSize: '20px', marginLeft: '260px' }}>a software developer</p>

      <p>
        <span style={{ fontSize: '17px', marginLeft: '260px'  }}>with a background in</span> <span style={{ fontSize: '27px' }}>mobile application development, </span>
      </p>
      <p>
        <span style={{ fontSize: '23px' , marginLeft: '260px'}}>machine learning, </span> <span style={{ fontSize: '20px' }}>design, </span>
        and <span style={{ fontSize: '20px' }}> computational biology, </span>
      </p>

      <p > <span style={{ fontSize: '18px', marginLeft: '100px'}}> check out what Ive worked on</span> <span style={{ fontSize: '22px',}}> below: </span> </p>
      </div>

      <h2 style= {{marginLeft: '30px'}}> work: </h2>

      <div className={styles.scrollContainer}>
        <div className={styles.imageContainer}>
          <Link href="/projects/capitalonemobile">
            <Image 
              src="/images/capitalone.png"  
              alt="Capital One Project"
              width={550}  
              height={300} 
              className={styles.image}
            />
            <div className={styles.date}>Summer 2024</div>
            <div className={styles.caption}>iOS Development @Capital One</div>
            <div className={styles.descriptor}>INTERNSHIP | MOBILE DEVELOPMENT | SWIFT </div>
          </Link>
        </div>

        <div className={styles.imageContainer}>
          <Link href="/projects/microplasticdetection">
            <Image 
              src="/images/microplastic.png"  
              alt="Microplastic Detection"
              width={550}  
              height={300} 
              className={styles.image}
            />
            <div className={styles.date}>Summer 2023</div>
            <div className={styles.caption}>AI powered microplastic detection @AVHBAC</div>
            <div className={styles.descriptor}>RESEARCH INTERNSHIP | MACHINE LEARNING | PYTHON </div>
          </Link>
        </div>

        <div className={styles.imageContainer}>
          <Link href="/projects/biometricapp">
            <Image 
              src="/images/biometric.png"  
              alt="Biometric App"
              width={550}  
              height={300} 
              className={styles.image}
            />
            <div className={styles.date}>Summer 2023</div>
            <div className={styles.caption}>Biometric Android Application @AVHBAC</div>
            <div className={styles.descriptor}>RESEARCH PROJECT | ANDROID DEVELOPMENT | JAVA </div>

          </Link>
        </div>

        <div className={styles.imageContainer}>
          <Link href="/projects/evolution">
            <Image 
              src="/images/evolution.png"  
              alt="Evolution"
              width={550}  
              height={300} 
              className={styles.image}
            />
            <div className={styles.date}>2021-2022</div>
            <div className={styles.caption}>Exploring Evolution through Computation @UCLA Alfaro Lab</div>
            <div className={styles.descriptor}>RESEARCH PROJECTS | COMPUTATIONAL BIOLOGY | R/C++/PYTHON </div>

          </Link>
        </div>
      </div>

      <h2 style= {{marginLeft: '20px'}}> other stuff </h2>


    </div>
    
  );


}


