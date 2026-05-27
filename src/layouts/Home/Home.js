import gamestackTexture2Large from 'assets/350F-web.png';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/350F-web.png';
import gamestackTextureLarge from 'assets/grecale-web.png';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/grecale-web.png';
import sliceTextureLarge from 'assets/pi-3by2.jpeg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/pi-16by9.jpeg';
// import questionTexture from 'assets/redQ-3by2.jpeg';
// import questionTextureLg from 'assets/redQ-og.png';
import experienceImg from 'assets/resume.png';
import experienceImgLg from 'assets/resume.png';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Engineer', 'Architect', 'Innovator'];

// IMPORTANT TO-DO: Add back section 4 when the Aerospace Project is ready. Until then, leave that code commented out.

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  // const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFive, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Software Engineer"
        description="Design portfolio of Chase Wheeler — a self-driven, self-taught Full Stack Software Developer 
        and aspiring AI Engineer that has worked with various languages, frameworks, 
        databases, and other technologies to create efficient, scalable products."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="JavaScript Autonomous Car"
        description="A self-driving car simulation utilizing neural networks, genetic algorithms, and machine learning concepts."
        buttonText="View project"
        buttonLink="https://github.com/Sneaky1000/js-autonomous-car" // Replace with /projects/slice later
        model={{
          type: 'laptop',
          alt: 'Autonomous car project made with JavaScript',
          textures: [
            {
              srcSet: [sprTexture, sprTexture],
              placeholder: sprTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Responsive Websites"
        description="Websites designed and built with various frameworks that look great on both PC and mobile devices."
        buttonText="View website"
        buttonLink="https://www.maseratiofpuentehills.com/the-all-new-2023-grecale/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Mathmatical Concept Visualizations"
        description="This is one of many side projects that visualizes math formulas/concepts (Image is of Pi in Python)."
        buttonText="View project"
        buttonLink="https://github.com/Sneaky1000/pi-in-python" // To-do: Replace with /projects/slice later
        model={{
          type: 'laptop',
          alt: 'Pi visualization in Python',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      {/* <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={3}
        title="Interested in more of my projects?"
        description="This link will take you to a sneak peek at some projects I'm currently working on."
        buttonText="View More"
        buttonLink="/projects/aerospace-project"
        model={{
          type: 'laptop',
          alt: 'See more projects',
          textures: [
            {
              srcSet: [questionTexture, questionTextureLg],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      /> */}
      <ProjectSummary
        id="experience"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={'💼'}
        title="My Professional Experience"
        description="You can explore my comprehensive professional background and gain insight into my portfolio of career-related projects/achievements here."
        buttonText="View Experience"
        buttonLink="/experience/"
        model={{
          type: 'laptop',
          alt: 'A resume displaying my skills, work experience, projects, and skills',
          textures: [
            {
              srcSet: [experienceImg, experienceImgLg],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
