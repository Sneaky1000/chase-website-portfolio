import backgroundAeroLarge from 'assets/aero-bg.jpg';
import backgroundAeroPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroBackgroundUnknownLarge from 'assets/red-placeholder.jpg';
import imageAeroBackgroundUnknownPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroBackgroundUnknown from 'assets/red-placeholder.jpg';
import backgroundAero from 'assets/aero-bg.jpg';
import imageAeroComponentsDarkLarge from 'assets/red-placeholder.jpg';
import imageAeroComponentsDarkPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroComponentsDark from 'assets/red-placeholder.jpg';
import imageAeroComponentsLightLarge from 'assets/red-placeholder.jpg';
import imageAeroComponentsLightPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroComponentsLight from 'assets/red-placeholder.jpg';
import imageAeroDesignSystemDarkLarge from 'assets/red-placeholder.jpg';
import imageAeroDesignSystemDarkPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroDesignSystemDark from 'assets/red-placeholder.jpg';
import imageAeroDesignSystemLightLarge from 'assets/red-placeholder.jpg';
import imageAeroDesignSystemLightPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroDesignSystemLight from 'assets/red-placeholder.jpg';
import imageAeroProjectDarkLarge from 'assets/red-placeholder.jpg';
import imageAeroProjectDarkPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroProjectDark from 'assets/red-placeholder.jpg';
import imageAeroProjectLightLarge from 'assets/red-placeholder.jpg';
import imageAeroProjectLightPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroProjectLight from 'assets/red-placeholder.jpg';
// import videoAeroMotionLarge from '';
// import videoAeroMotionPlaceholder from '';
// import videoAeroMotion from '';
import imageAeroSchema1DarkLarge from 'assets/red-placeholder.jpg';
import imageAeroSchema1DarkPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroSchema1Dark from 'assets/red-placeholder.jpg';
import imageAeroSchema1LightLarge from 'assets/red-placeholder.jpg';
import imageAeroSchema1LightPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroSchema1Light from 'assets/red-placeholder.jpg';
import imageAeroSchema2DarkLarge from 'assets/red-placeholder.jpg';
import imageAeroSchema2DarkPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroSchema2Dark from 'assets/red-placeholder.jpg';
import imageAeroSchema2LightLarge from 'assets/red-placeholder.jpg';
import imageAeroSchema2LightPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroSchema2Light from 'assets/red-placeholder.jpg';
import imageAeroStoryboarderDarkLarge from 'assets/red-placeholder.jpg';
import imageAeroStoryboarderDarkPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroStoryboarderDark from 'assets/red-placeholder.jpg';
import imageAeroStoryboarderLightLarge from 'assets/red-placeholder.jpg';
import imageAeroStoryboarderLightPlaceholder from 'assets/red-placeholder.jpg';
import imageAeroStoryboarderLight from 'assets/red-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
// import { Link } from 'components/Link'; // UNCOMMENT when adding a link to anything
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './AerospaceProject.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Coming Soon...';
const description =
  'This project is a work-in-progress. More will be added as I finish up my degrees.';
const roles = [
  'AI/ML Models',
  'Aerospace Concepts',
  'Software Development',
];

export const AerospaceProject = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="aero">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundAero}
          srcSet={`${backgroundAero.src} 1080w, ${backgroundAeroLarge.src} 2160w`}
          placeholder={backgroundAeroPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Back to Earth"
          url="/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageAeroProjectDark, imageAeroProjectDarkLarge]
                  : [imageAeroProjectLight, imageAeroProjectLightLarge]
              }
              placeholder={
                isDark
                  ? imageAeroProjectDarkPlaceholder
                  : imageAeroProjectLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="This will be important Alt text someday."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>WiP - The Problem</ProjectSectionHeading>
            <ProjectSectionText>
              This section will describe the problem and why the project was created.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [imageAeroComponentsDark, imageAeroComponentsDarkLarge]
                  : [imageAeroComponentsLight, imageAeroComponentsLightLarge]
              }
              placeholder={
                isDark
                  ? imageAeroComponentsDarkPlaceholder
                  : imageAeroComponentsLightPlaceholder
              }
              alt={'Placeholder alt text'}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Night theme</SegmentedControlOption>
                <SegmentedControlOption>Day theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>The Design</ProjectSectionHeading>
              <ProjectSectionText>
                How the project was designed...
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageAeroDesignSystemDark, imageAeroDesignSystemDarkLarge]
                  : [imageAeroDesignSystemLight, imageAeroDesignSystemLightLarge]
              }
              placeholder={
                isDark
                  ? imageAeroDesignSystemDarkPlaceholder
                  : imageAeroDesignSystemLightPlaceholder
              }
              alt="Placeholder alt text"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>How It Works</ProjectSectionHeading>
              <ProjectSectionText>
                How to run the project locally...
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageAeroBackgroundUnknown, imageAeroBackgroundUnknownLarge]}
                placeholder={imageAeroBackgroundUnknownPlaceholder}
                alt="Placeholder alt text"
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>WiP</ProjectSectionHeading>
                  <ProjectSectionText>
                    This is a text section. No way! Soon, there will be video too.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              {/* <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoAeroMotion, width: 1280 },
                  { src: videoAeroMotionLarge, width: 2560 },
                ]}
                placeholder={videoAeroMotionPlaceholder}
                alt="This will be a demo of the project"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              /> */}
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>More Stuff</ProjectSectionHeading>
              <ProjectSectionText>
                Problem solving and challenges?
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageAeroStoryboarderDark, imageAeroStoryboarderDarkLarge]
                  : [imageAeroStoryboarderLight, imageAeroStoryboarderLightLarge]
              }
              placeholder={
                isDark
                  ? imageAeroStoryboarderDarkPlaceholder
                  : imageAeroStoryboarderLightPlaceholder
              }
              alt="Placeholder alt text"
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  And More!
                </ProjectSectionHeading>
                <ProjectSectionText>
                  Why this project is so amazing.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageAeroSchema2Dark, imageAeroSchema2DarkLarge]
                    : [imageAeroSchema2Light, imageAeroSchema2LightLarge]
                }
                placeholder={
                  isDark
                    ? imageAeroSchema2DarkPlaceholder
                    : imageAeroSchema2LightPlaceholder
                }
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageAeroSchema1Dark, imageAeroSchema1DarkLarge]
                    : [imageAeroSchema1Light, imageAeroSchema1LightLarge]
                }
                placeholder={
                  isDark
                    ? imageAeroSchema1DarkPlaceholder
                    : imageAeroSchema1LightPlaceholder
                }
                alt="Placeholder alt text"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.066, 0.402, -0.438],
                  text: 'North America',
                  hidden: true,
                },
                {
                  position: [-0.306, -0.096, -0.504],
                  text: 'South America',
                  hidden: true,
                },
                {
                  position: [-0.372, 0.444, 0.156],
                  text: 'Europe',
                  hidden: true,
                },
                {
                  position: [-0.546, 0.084, 0.234],
                  text: 'Africa',
                  hidden: true,
                },
                {
                  position: [0.054, 0.342, 0.492],
                  text: 'Asia',
                  hidden: true,
                },
                {
                  position: [0.39, -0.246, 0.378],
                  text: 'Australia',
                  hidden: true,
                },
                {
                  position: [-0.012, -0.6, 0.054],
                  text: 'Antarctica',
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      Demo Explanation 1
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Focus on this... wowza.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Demo Explanation 2
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Now this is cool too...
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'North America',
                'South America',
                'Europe',
                'Africa',
                'Asia',
                'Australia',
                'Antarctica',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Demo Explanation 3
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Did you know you can click and drag the world around???
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'North America',
                'South America',
                'Europe',
                'Africa',
                'Asia',
                'Australia',
                'Antarctica',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              // meshes={['EarthPartial', 'Chunk']}
              meshes={['Atmosphere', 'EarthFull']}
              labels={['Mantle', 'Outer core', 'Inner core']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Demo Explanation 4
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      How this project could be improved or something...
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                What I learned, what can be improved, and how this affects my future.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
