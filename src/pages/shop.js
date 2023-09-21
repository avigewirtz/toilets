import React, { useState, useEffect } from 'react';
import * as styles from './CSS/shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import { generateMockProductData } from '../helpers/mock';
import Button from '../components/Button';
import Config from '../config.json';
import products from '../helpers/product.json';

const ShopPage = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [displayedItemsCount, setDisplayedItemsCount] = useState(6);  // Initially set to 6
  const [selectedFilters, setSelectedFilters] = useState({ category: []});
  const [sortOrder, setSortOrder] = useState('default'); // default, lowToHigh, highToLow
const [showSortDropdown, setShowSortDropdown] = useState(false);

const [resetCounter, setResetCounter] = useState(0);




const toggleFilter = (filterType, filterValue) => {
  setSelectedFilters(prevState => {
    const newFilters = { ...prevState };
    const index = newFilters[filterType].indexOf(filterValue);
    if (index > -1) {
      newFilters[filterType].splice(index, 1);
    }
    return newFilters;
  });
  setResetCounter(prev => prev + 1); // Increment the counter here
};

  
  const generateChips = () => {
    const chipElements = [];
  
    Object.keys(selectedFilters).forEach(filterType => {
      selectedFilters[filterType].forEach(filterValue => {
        chipElements.push(
          <Chip
            key={`${filterType}-${filterValue}`}
            name={filterValue}
            close={() => toggleFilter(filterType, filterValue)}
          />
        );
      });
    });
  
    return chipElements;
  };
  

  const filteredProducts = products.filter(product => {
    return Object.keys(selectedFilters).every(key => {
      if (selectedFilters[key].length === 0) return true;
      
      // Check if product tags include any of the selected categories
      if (key === 'category') {
        return selectedFilters[key].some(filter => product.tags.includes(filter));
      }
      
      return true;
    });
  });

  const totalItems = filteredProducts.length;

  const data = generateMockProductData(Math.min(displayedItemsCount, totalItems), 'potty');

  const handleLoadMore = () => {
    const remainingItems = totalItems - displayedItemsCount;
    const itemsToLoad = Math.min(remainingItems, 6);
    if (itemsToLoad > 0) {
      setDisplayedItemsCount(displayedItemsCount + itemsToLoad);
    }
  };

  useEffect(() => {
    
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

// Reset displayedItemsCount when filters are applied
useEffect(() => {
  setDisplayedItemsCount(Math.min(6, filteredProducts.length));
}, [resetCounter, filteredProducts.length]);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  const sortedAndFilteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case 'lowToHigh':
        return a.price - b.price;
      case 'highToLow':
        return b.price - a.price;
      default:
        return 0;
    }
  });


  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { label: 'Porta Potties' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Porta Potties`}
          subtitle={
            'Look to our porta potties for modern, sanitary solutions on-the-go. From compact units to spacious facilities, our range ensures cleanliness and convenience for every event.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>{totalItems} items</span>
            <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div
                className={`${styles.iconContainer} ${styles.sortContainer}`}
                role={'presentation'}
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                <span>Sort by</span>
                <Icon symbol={'caret'} />
                {showSortDropdown && (
                  <div className={styles.sortDropdown}>
                    <div onClick={() => { setSortOrder('lowToHigh'); setShowSortDropdown(false); }}>
                      Lowest to Highest
                    </div>
                    <div onClick={() => { setSortOrder('highToLow'); setShowSortDropdown(false); }}>
                      Highest to Lowest
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
            onFilterChange={setSelectedFilters}  // Assume CardController calls this on filter change
          />
          <div className={styles.chipsContainer}>
            {generateChips()}
          </div>
          <div className={styles.productContainer}>
            <span className={styles.mobileItemCount}>{totalItems} items</span>
            <ProductCardGrid data={sortedAndFilteredProducts.slice(0, displayedItemsCount)}></ProductCardGrid>


          </div>
          <div className={styles.loadMoreContainer}>
            <span>{displayedItemsCount} of {totalItems}</span>
            {displayedItemsCount < totalItems && 
              <Button fullWidth level={'secondary'} onClick={handleLoadMore}>
                LOAD MORE
              </Button>
            }
          </div>
        </Container>
      </div>
      <LayoutOption />
    </Layout>  
  );
};

export default ShopPage;
