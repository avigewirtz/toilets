import React, { useState } from 'react';
import * as styles from './Hero.module.css';
import Button from '../Button';
import { Link } from 'gatsby';
import DatesAndDelivery from '../DatesAndAddress/DatesAndAddress';
import BookingModal from '../BookingModal'; 
import { navigate } from 'gatsby';
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleUpdate = (filled) => {
    setIsFilled(filled);
  };
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };


  return (
    <div className={styles.root} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content} style={{ maxWidth: maxWidth }}>
        {header && <span className={styles.header}>{header}</span>}
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        <Button onClick={() => navigate('/shop')} level={'primary'}>
          BOOK NOW
        </Button>

{/* Conditionally render the BookingModal based on the state */}
{isModalVisible && <BookingModal onClose={handleCloseModal} />}
        {/* <DatesAndDelivery onUpdate={handleUpdate}/> */}
      
       
      </div>
    </div>
  );
};

export default Hero;
