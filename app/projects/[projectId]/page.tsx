// app/projects/[projectId]/page.tsx
"use client";
import { useParams } from 'next/navigation';
import ProjectLayout from './layout';
import styles from './ProjectPage.module.css'; // Import CSS module
import Image from 'next/image';
import { projectData } from '../../projectData'; // Import project data

export default function ProjectPage() {
  const { projectId } = useParams();

  const project = projectId && typeof projectId === 'string'
    ? projectData[projectId] 
    : { title: '', subheading: '', role: '', duration: '', team: [], disciplines: [], technologies: [], introduction: '' };

  const isC1proj = projectId === 'capitalonemobile'; 

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
                {project.team.map((item, index) => (
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
              {project.disciplines.map((item, index) => (
                <li key={index} className={styles.bulletItem}>
                  {item}
                </li>
              ))}
            </ul>        
          </section>
          
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
        </div>

        {project.introduction && (
          <section>
            <h3 className={styles.sectionTitle}>INTRODUCTION</h3>
            <p className={styles.sectionContent}>{project.introduction}</p>
          </section>
        )}

        {/* Conditional Layouts */}
        {isC1proj && (
        <section>
          <h3 className={styles.sectionTitle}>PROJECTS OVERVIEW</h3>
          {project.problem && (
            <p className={styles.sectionContent}>{project.problem}</p>
          )}
        </section>
      )}
        {project.learnings && (
          <section>
            <h3 className={styles.sectionTitle}>THE PROCESS: </h3>
            <h2 className={styles.section2Title}>TECHNICAL & PROFESSIONAL LEARNINGS</h2>
            <p className={styles.sectionContent}>{project.learnings}</p>
          </section>
        )}

      </div>

    </ProjectLayout>
  );
}
