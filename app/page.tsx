import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.fullWidthBackground}>
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', padding: '20px' }}>
      
      
      <div style={{ padding: '80px'}} >
      <p>
        <span style={{ fontSize: '30px', marginLeft: '70px'  }}> 👋 Hi there, I&apos;m</span> <span style={{ fontSize: '40px' }}>Natalie Zhu</span>.
      </p>

      <p style={{ fontSize: '20px', marginLeft: '260px' }}>a software developer</p>

      <p>
        <span style={{ fontSize: '17px', marginLeft: '260px'  }}>with a background in</span> <span style={{ fontSize: '26px' }}>mobile application development, </span>
      </p>
      <p>
        <span style={{ fontSize: '23px' , marginLeft: '260px'}}>design, </span> <span style={{ fontSize: '20px' }}>machine learning, </span>
        and <span style={{ fontSize: '20px' }}> computational biology. </span>
      </p>

      <p > <span style={{ fontSize: '18px', marginLeft: '100px'}}> check out what I&apos;ve worked on</span> <span style={{ fontSize: '22px',}}> below: </span> </p>
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
            <div className={styles.descriptor}>INTERNSHIP | FRONT-END DEVELOPMENT | iOS MOBILE </div>
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

      <p style={{ textAlign: 'right', fontStyle: 'italic', fontSize: '14px', color: '#555', marginTop: '10px', marginRight: '100px' }}>
        ^designs by me!
      </p> 
      <h2 style= {{marginLeft: '20px'}}> & more (personal projects + design work): </h2>


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
            <div className={styles.descriptor2}>creating interactions between strangers </div>
            <div className={styles.descriptor}>FURNITURE DESIGN | 3D MODELING | DESIGN ENGINEERING </div>
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
            <div className={styles.descriptor2}> re-envisioning data entry + communication </div>
            <div className={styles.descriptor}>UI UX DESIGN | DEVELOP FOR GOOD </div>

          </Link>
        </div>


        <div className={styles.imageContainer}>
            <Image 
              src="/images/card.png"  
              alt="Twenty Four"
              width={550}  
              height={300} 
              className={styles.image}
            />
            <div className={styles.date}>In Progress</div>
            <div className={styles.caption}>Twenty Four</div>
            <div className={styles.descriptor2}>reimagining a traditional Chinese card game </div>
            <div className={styles.descriptor}>PERSONAL PROJECT | IOS MOBILE APPLICATION | SWIFT </div>
        </div>

        <div className={styles.imageContainer}>

        <a href="https://natzhu03.github.io/biometric.html" style={{ color: 'blue', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" >
        <Image 
              src="/images/gather.png"  
              alt="Gather"
              width={550}  
              height={300} 
              className={styles.image}
            />
            <div className={styles.date}>January 2023</div>
            <div className={styles.caption}>Gather</div>
            <div className={styles.descriptor2}>A web app to reunite old friends</div>
            <div className={styles.descriptor}>HACK@BROWN PROJECT | WEB APPLICATION | REACT/SQL/TWILIO </div>

        </a>
        </div>
      </div>

    </div>
    </div>
    
  );


}

