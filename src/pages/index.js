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
import HowItWorks from '../components/HowItWorks';
import Title from '../components/Title';
import DatesAndDelivery from '../components/DatesAndAddress/DatesAndAddress';


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
       className={styles.hero}
        maxWidth={'600px'}
        desktopImage={'/banner10.png'}
        mobileImage={'/bannerMobile.png'} 
        title={'Find Your Rental'}
        subtitle={'Book your Bathroom Trailer Online'}
        ctaText={''}
        ctaAction={goToShop}
      />
      
      {/* <DatesAndDelivery className={styles.hideOnDesktop} /> */}


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

      <div className={styles.howItWorksContainer}>
     {/* How It Works */}
     <HowItWorks
  bgColor="var(--standard-light-grey)"
  title="How It Works"
  steps={[
    "1. Choose Your Porta Potty Type: Browse through our range of porta potty options, suitable for various events and needs. Whether it's a simple model or a luxury unit, we've got you covered.",
    "2. Specify Quantity & Details: Indicate how many porta potties you'll need, along with the delivery address and the dates they'll be required.",
    "3. Optional Add-Ons: Enhance your rental experience by selecting from a variety of add-ons. Whether it's extra hand sanitizers, lighting, or any other amenity, you can customize your rental to fit your exact needs.",
    "4. Instant Price Calculation: Once you've provided the necessary details, our system will instantly calculate the total price for your rental. No hidden fees, just transparent pricing.",
    "5. Add to Cart & Checkout: After reviewing your selection and the total price, simply add your choices to the cart and proceed to checkout.",
    "6. Booking Confirmation: After successfully completing the checkout process, you'll receive a confirmation. Rest assured, our team will then reach out to you to finalize the delivery and any other details. Change of plans? No worries. If you cancel your booking within 3 days, you'll receive a full refund, no questions asked."
  ]}
/>

</div>

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
