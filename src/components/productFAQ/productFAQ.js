import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import * as styles from './productFAQ.module.css';
import Box from '@mui/material/Box';

const ProductFAQ = (props) => {
    const { bgColor, title, steps } = props;
    const [openIndex, setOpenIndex] = useState(-1); // No step is expanded initially
  
    const toggleListItem = (index) => {
      if (openIndex === index) {
        setOpenIndex(-1);
      } else {
        setOpenIndex(index);
      }
    };
  
    return (
      <div className={styles.root} style={{ backgroundColor: bgColor }}>
        <span><h4><b>{title}</b></h4></span>
        <Box className={styles.boxContainer}>
          <List component="nav" aria-labelledby="nested-list-subheader">
            {steps && steps.map((step, index) => {
              const stepParts = step.split(":");
              const stepTitle = stepParts.shift();
              const stepDescription = stepParts.join(":");
  
              return (
                <div key={index}>
                  <ListItem button onClick={() => toggleListItem(index)}>
                    <ListItemText primary={<b>{stepTitle}</b>} />
                    {openIndex === index ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem>
                        <ListItemText primary={stepDescription} />
                      </ListItem>
                    </List>
                  </Collapse>
                </div>
              );
            })}
          </List>
        </Box>
      </div>
    );
};

export default ProductFAQ;
