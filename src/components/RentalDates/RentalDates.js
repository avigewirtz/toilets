import React, { useState } from 'react';
import { DatePicker, Tooltip } from 'antd';
import moment from 'moment';
import * as styles from './RentalDates.module.css';

const { RangePicker } = DatePicker;

const RentalDates = ({ onDateChange }) => {
  const [dates, setDates] = useState([null, null]);
  const [showTooltip, setShowTooltip] = useState(false);

  const calculateNumberOfDays = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;
  
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.abs(end - start);
    
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    
    return days === 0 ? 1 : days;
  };

  const handleChange = (dates, dateStrings) => {
    setDates(dates);
    
    const numberOfDays = calculateNumberOfDays(dateStrings[0], dateStrings[1]);

    if (dateStrings[0] && dateStrings[1]) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  
    onDateChange(dateStrings);
  };

  return (
    <div>
      <span className={styles.quantityLabel}>Rental Dates</span>
      <div className={styles.dateInputContainer}>
        <Tooltip 
          title={
            dates[0] && dates[1]
              ? `${calculateNumberOfDays(dates[0], dates[1])} ${
                  calculateNumberOfDays(dates[0], dates[1]) === 1 ? 'day' : 'days'
                } selected`
              : ""
          }
          visible={showTooltip}
        >
          <RangePicker
            className={styles.datePicker}
            format="MMMM D, YYYY"
            onChange={handleChange}
            size="large"  // Increase the size of the RangePicker
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default RentalDates;
