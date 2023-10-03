import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './CSS/about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        {/* <Hero
          maxWidth={'900px'}
          image={'/about-image.png'}
          title={`John NY Anytime \n Leading Portta Potty Suplier`}
        /> */}

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
    <div className={styles.detailContainer} ref={historyRef}>
        <p>
            Founded in 2021, John NY Anytime is a leading porta potty service in New York, ensuring cleanliness and convenience for events and construction sites.
        </p>
        <br />
        <br />
        <p>
            With a strong commitment to quality and customer satisfaction, we have rapidly grown as a trusted name in the industry. Our units are well-maintained, ensuring a hygienic environment for all users. Whether you're hosting a big event or need facilities for a construction project, John NY Anytime is there for you, anytime.
        </p>
    </div>
</Container>


        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
    <div className={styles.content}>
        <h3>Our Values</h3>
        <div ref={valuesRef}>
            <p>
                John NY Anytime has always been at the forefront of providing sanitation solutions to the New York community. We understand the significance of clean and easily accessible facilities, especially during events or in construction sites. While our industry is different, our commitment to quality and innovation is unwavering. As we've grown, our core values have remained the same.
            </p>
            <ol>
                <li>Commitment to hygiene and cleanliness</li>
                <li>Reliability and timely service</li>
                <li>Customer-centric approach</li>
            </ol>
            <img alt={'founder'} src={'/about2.png'}></img>
        </div>
        <h3>Sustainability</h3>
        <div id={'#sustainability'} ref={sustainabilityRef}>
            <p>
                Our founder, John Doe, believed in creating sustainable solutions for sanitation needs. From day one, our porta potties have been designed to be environmentally friendly, minimizing waste and utilizing eco-friendly cleaning agents.
            </p>
            <p>
                Manufactured with care, our units are built for durability and long-lasting performance, reducing the need for frequent replacements. This not only serves our clients better but also minimizes our carbon footprint.
            </p>
            <p>
                John NY Anytime is more than just a sanitation solution; it's a commitment to the community, environment, and a promise of reliability.
            </p>
        </div>
    </div>
</Container>


        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
