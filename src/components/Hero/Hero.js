import React, { useState } from 'react';
import * as styles from './Hero.module.css';
import Button from '../Button';
import { Link } from 'gatsby';
import DatesAndDelivery from '../DatesAndAddress/DatesAndAddress';

const Hero = (props) => {
  const {
    title,
    subtitle,
    ctaText,
    ctaAction,
    desktopImage,
    mobileImage,
    maxWidth,
    ctaStyle,
    ctaLink,
    ctaTo,
    header,
  } = props;

  const backgroundImage = typeof window !== 'undefined' && window.innerWidth <= 800 ? mobileImage : desktopImage;

  const [isFilled, setIsFilled] = useState(false);

  const handleUpdate = (filled) => {
    setIsFilled(filled);
  };

  return (
    <div className={styles.root} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content} style={{ maxWidth: maxWidth }}>
        {header && <span className={styles.header}>{header}</span>}
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
       
        {/* <DatesAndDelivery onUpdate={handleUpdate}/> */}
      
       
      </div>
    </div>
  );
};

export default Hero;
