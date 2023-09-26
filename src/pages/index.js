import * as React from 'react';
import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './CSS/index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'front-page');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner.png'}
        title={'Reliable Porta Potty Rentals'}
        subtitle={'Clean, Sanitary, and Timely Delivered'}
        ctaText={'Find your rental'}
        ctaAction={goToShop}
      />
{/* Message Container */}
<div className={styles.messageContainer}>
    <p>
        Providing reliable porta potty solutions for all your events and projects. Proudly servicing all 50 US states.
    </p>
    <p>
        Partnered with <span className={styles.gold}>EventMaster</span> and 
         <span className={styles.gold}> ConstructionPros</span> to ensure timely deliveries and service.
    </p>
</div>

     {/* Collection Container */}
     {/* <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Categories'} />
          <ProductCollectionGrid />
        </Container>
      </div> */}



      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Porta Potties'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>


      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'About John NY Anytime'}
        quote={
          'We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.'
        }
      />

         {/* Blog Grid */}
         <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Blog'} subtitle={'Notes on life and style'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          //  name={'Styled by You'}
          
          // subtitle={'Tag @JohnNYAnytime to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/social/socialMedia1.png`} alt={'social media 1'} />
          <img src={`/social/socialMedia2.png`} alt={'social media 2'} />
          <img src={`/social/socialMedia3.png`} alt={'social media 3'} />
          <img src={`/social/socialMedia4.png`} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
