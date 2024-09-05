// app/projects/[projectId]/page.tsx
"use client";
import { useParams } from 'next/navigation';
import ProjectLayout from './layout';
import styles from './ProjectPage.module.css'; // Import CSS module
import Image from 'next/image';
import { projectData } from '../../projectData'; // Import project data
import VideoTest from '../../video'; 


export default function ProjectPage() {
  const { projectId } = useParams();

  const project = projectId && typeof projectId === 'string'
    ? projectData[projectId] 
    : { title: '', subheading: '', role: '', duration: '', team: [], disciplines: [], technologies: [], introduction: '' };

  const isMPproj = projectId === 'microplasticdetection'; 
  const isSFproj = projectId === 'furniture'; 
  const isC1 = projectId === 'capitalonemobile'; 
  const isHorse = projectId === 'horse'; 



  return (
    <ProjectLayout>
      <div className={styles.pageContainer}>
        <div className={styles.imageContainer}>
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

        {project.role && (
          <section>
            <h3 className={styles.gridTitle}>ROLE</h3>
            <p className={styles.gridContent}>{project.role || 'No roles listed.'}</p>
          </section>
                  )}

{project.org && (
          <section>
            <h3 className={styles.gridTitle}>ORGANIZATION</h3>
            <p className={styles.gridContent}>{project.org || 'No org listed.'}</p>
          </section>
          )}

{project.duration && (
          <section>
            <h3 className={styles.gridTitle}>DURATION</h3>
            <p className={styles.gridContent}>{project.duration || 'No duration listed.'}</p>
          </section>
          )}


          {project.team && (
            <section>
              <h3 className={styles.gridTitle}>TEAM</h3>
              <ul className={styles.bulletList}>
                {project.team.map((item, index) => (
                  <li key={index} className={styles.bulletItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

        {project.disciplines && (
          <section>
            <h3 className={styles.gridTitle}>DISCIPLINES</h3>
            <ul className={styles.bulletList}>
              {project.disciplines.map((item, index) => (
                <li key={index} className={styles.bulletItem}>
                  {item}
                </li>
              ))}
            </ul>        
          </section>
        )}
          
          {project.technologies && (
          <section>
            <h3 className={styles.gridTitle}>TECHNOLOGIES</h3>
            <ul className={styles.bulletList}>
              {project.technologies.map((item, index) => (
                <li key={index} className={styles.bulletItem}>
                  {item}
                </li>
              ))}
            </ul>        
          </section>
                      )}
        </div>


        {project.introduction && (
          <section>
            <h3 className={styles.sectionTitle}>INTRODUCTION</h3>
            <p className={styles.sectionContent}>{project.introduction}</p>
          </section>
        )}

{isC1 && (
        <section>

          <Image 
            src={`/images/twoGoals.png`}
            alt="Image"
            width={1000}  
            height={800} 
          />
        <p><em> **Unfortunately, it is not possible for me to share the final products of what I worked on due to the confidentiality of my work at Capital One.       </em></p>
        </section>
      )}

{project.problem && (
      <section>
          <h3 className={styles.sectionTitle}>PROJECTS OVERVIEW</h3>
            <p className={styles.sectionContent}>{project.problem}</p>
        </section>
)}

        {project.learnings && (
          <section>
            <h3 className={styles.sectionTitle}>THE PROCESS: </h3>
            <h2 className={styles.section2Title}>TECHNICAL & PROFESSIONAL LEARNINGS</h2>
            <p className={styles.sectionContent}>{project.learnings}</p>
          </section>
        )}

      {isMPproj && (
        <section>
          <h3 className={styles.sectionTitle}>RESEARCH POSTER</h3>
          <p>Take a look at my final research project below!</p>

          <Image 
            src={`/images/mpposter.png`}
            alt="Image"
            width={1000}  
            height={800} 
          />
        <p>
          <a href="https://github.com/natzhu03/microplastic-detection" style={{ color: 'blue', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" >Github Repo</a>
        </p>
        </section>
      )}

{isHorse && (
        <section>
          <p>Take a look at what I worked on:</p>

          <h3 className={styles.sectionTitle}>STORYBOARDING</h3>
          <p>I created storyboards in order to visually map out the story of the MTR app&apos;s life and understand its potential user flow.</p>
          <Image 
            src={`/images/storyboarding.png`}
            alt="Image"
            width={1000}  
            height={800} 
          />

          <h3 className={styles.sectionTitle}>WIREFRAMES & LOFIS</h3>
          <p>Then, I created the following wireframes for the dashboard & Horse Profile page:</p>
          <Image 
            src={`/images/lofis.png`}
            alt="Image"
            width={1000}  
            height={800} 
          />

          <h3 className={styles.sectionTitle}>MID-FIS</h3>
          <p>Based on the team&apos;s existing wireframes and Lo-Fi prototypes, I took on the task of upgrading our page designs to Mid-Fidelity versions: </p>
          <Image 
            src={`/images/midfis.png`}
            alt="Image"
            width={1000}  
            height={800} 
          />
          <h3 className={styles.sectionTitle}>HI-FIS</h3>
          <p>In the last step of the process, I helped to create the following Hi-Fi prototypes for our dashboard: </p>
          <Image 
            src={`/images/hifi.png`}
            alt="Image"
            width={1000}  
            height={800} 
          />

<a href="https://github.com/natzhu03/microplastic-detection" style={{ color: 'blue', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" >Take a look at this project in more detail here</a>










        </section>
      )}



{isSFproj && (
        <section>
          <div>
          < VideoTest />
            </div>
            <p><em>Script, production/editing, storyline by me.</em></p>

          <h3 className={styles.sectionTitle}>THE IDEA</h3>
          <p><em>Why is the Ratty designed the way it is? What physical aspects of Brown&apos;s spaces make people more or less likely to interact? Is it possible to design spaces in a way to encourage complete strangers to connect?</em></p>
          <br />
          <p>These questions were what led me to my final project for Brown University&apos;s ENGN 0930C Design Studio course. My partner, Joyce, and I stayed up until 2am discussing our observations of different spaces at Brown - then leading to the topic of the unfulfilled potential of connecting with strangers. That got us thinking - how can we employ design to foster interactions between strangers?          </p>

          <h3 className={styles.sectionTitle}>THE PROCESS</h3>

          <p>Our preliminary research led us to various existing examples of “social furniture” - including those on playgrounds, at airports, sidewalks etc.</p> 
          <Image 
            src={`/images/inspo.png`}
            alt="Image"
            width={1000}  
            height={800} 
          />

          <p>From there, we began coming up with various new sketches and imaginings of social furniture - from benches to forts to giant umbrellas - that could be placed at various locations on Brown&apos;s campus to foster social interaction.</p>
          <Image 
              src={`/images/sketches.png`}
              alt="Image"
              width={600}  
              height={500} 
            />

<p>Before we got too lost in the brainstorming... we realized we needed to take a step back and redefine more specifically what the true purpose of our designs would be - What exact problem space were we targeting? What particular situation were we focusing on? Which specific user interaction and experience were we envisioning? Ultimately, we determined that our designs should: </p>
<br />
<p>1) Be dynamic – encourage or require direct physical engagement from the user.</p>
<p>2) Involve multi-person interactions – necessitate some form of conversation or collaboration between users to make use of the furniture.</p>
<p>3) Be inviting, enjoyable, and functional – actively draw users in and encourage them to engage with the furniture.</p>
<br />
<p> This led to the development of three key ideas: </p>

<p><b>1. Interactive lawn chairs:</b></p>
          <Image 
              src={`/images/seesaw.png`}
              alt="Image"
              width={1000}  
              height={800} 
            />

<p><b>2. Dynamic benches:</b></p>
          <Image 
              src={`/images/bench.png`}
              alt="Image"
              width={1000}  
              height={800} 
            />

<p><b> 3. Rotating seats: </b></p>
          <Image 
              src={`/images/organics.png`}
              alt="Image"
              width={1000}  
              height={800} 
            />
  
  <p>Considering the design of the chairs, we drew inspiration from minimalist plywood furniture. Its cleverly positioned notches facilitate easy assembly and provide effective structural support for the pieces: </p>
          <Image 
              src={`/images/plywood.png`}
              alt="Image"
              width={1000}  
              height={800} 
            />
<br />
<p> Due to time constraints, we decided that the most effective action for us to take was to design our furniture at a much smaller scale of 1:6. We researched industry-standards for furniture dimensions and tested various iterations of cuts and designs using cardboard modeling.  </p>
<br />
       <Image 
              src={`/images/dimensions.png`}
              alt="Image"
              width={1000}  
              height={800} 
            />
<br />
<p> At the Brown Design Workshop, we 3D modelled, printed and laser cut our designs, before painting them, and finally, simulating the intended experience of using our furniture through filmmaking.  </p>
        <Image 
              src={`/images/bdw.png`}
              alt="Image"
              width={600}  
              height={800} 
            />

<h3 className={styles.sectionTitle}>FINAL PRODUCTS</h3>

        <Image 
              src={`/images/seesawFinal.png`}
              alt="Image"
              width={600}  
              height={800} 
            />

          <Image 
              src={`/images/benchFinal.png`}
              alt="Image"
              width={600}  
              height={800} 
            />


        <Image 
              src={`/images/organicFinal.png`}
              alt="Image"
              width={600}  
              height={800} 
            />
         

          <p>Finally, to tie it all together... take a look at this video I directed and produced to simulate practical use and real-world user scenarios for our furniture designs on Brown&apos;s campus.</p> 
          <p><em>Disclaimer: it rocks!.</em></p>
          <br />
          <div>
            < VideoTest />
          </div>
          </section>
      )}


      </div>

    </ProjectLayout>
  );
}
