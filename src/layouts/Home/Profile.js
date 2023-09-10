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
      Hi, I’m Chase. I currently live in California working as a full stack developer at{' '}
      <Link href="https://tkmkt.com/">TurnKey Marketing</Link>. I’m a self-driven, self-taught 
      Full Stack Software Developer and aspiring Back-End Software Developer/DevOps Engineer 
      that has worked with various languages, frameworks, databases, libraries, and other technologies to 
      create efficient, scalable products. You can check out more of my professional experience <Link href='/experience/'>here</Link>. 
      If you’re interested in hiring an ever-growing software engineer to help build effective and resilient 
      applications, feel free to check out my{' '}<Link href="/pdfs/chase-wheeler-resume.pdf" download="chase-wheeler-resume.pdf" target="_blank">resume</Link>
      {' '}or{' '}<Link href='/contact/'>contact me</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    I’ve spent a lot of my free time developing and reinforcing my Golang and JavaScript skills. I’ve worked on 
    countless projects—from APIs and bots to responsive websites and full stack applications—in order to hone my 
    understanding of various languages. More recently, I’ve begun working with Python on my free time and have 
    been expanding my knowledge in the areas of artificial intelligence, genetic algorithms, neural networks, 
    and machine learning in general.
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
