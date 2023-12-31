import React from 'react';
import Slider from '../Slider';
import * as styles from './Gallery.module.css';

const Gallery = (props) => {
  const { images } = props;

  const customSliderSettings = {
    slidesToShow: 1,
    arrows: true,
  };


  const renderImages = () => {
    return images?.map((imageObject, index) => {
      return (
        <div key={index} className={styles.imageContainer}>
          <img alt={imageObject.alt} src={imageObject.image} />
        </div>
      );
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.sliderContainer}>  {/* renamed to sliderContainer */}
        <Slider settings={customSliderSettings}>
          {images && renderImages()}
        </Slider>
      </div>
    </div>
);

};

export default Gallery;
