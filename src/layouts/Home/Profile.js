import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hello there" start={visible} delay={500} />
    </Heading>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hi, I’m Chase! I currently live in Colorado working as a Senior Software Engineer at{' '}
      <Link href="https://tkmkt.com/">TurnKey Marketing</Link>. I focus on building scalable, data-driven systems and continually 
      expanding my expertise across backend architecture, distributed systems, and performance-focused applications. You can check 
      out more of my professional experience <Link href='/experience/'>here</Link>.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Outside of my professional work, I focus on system design, backend architecture, and building efficient, scalable solutions. 
      I regularly work on projects using JavaScript and Go, while expanding into Python for data-driven and AI applications.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m particularly interested in applying software and artificial intelligence to aerospace problems—especially in simulation, 
      large-scale systems, and intelligent modeling for space-based applications.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      If you’re interested in working with an engineer who is constantly evolving and pushing into new technical domains, feel free to 
      check out my{' '}<Link href="/pdfs/chase-wheeler-resume.pdf" download="chase-wheeler-resume.pdf" target="_blank">resume</Link>
      {' '}or{' '}<Link href='/contact/'>contact me</Link>.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Yours truly"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
