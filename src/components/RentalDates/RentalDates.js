import React, { useState, useEffect } from 'react';  // Added useEffect for initialization
import { DatePicker, Tooltip } from 'antd';
import dayjs from 'dayjs';  // Import dayjs for parsing and formatting dates
import * as styles from './RentalDates.module.css';

const { RangePicker } = DatePicker;

const RentalDates = ({ onDateChange }) => {
  const [dates, setDates] = useState([null, null]);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const savedStartDate = localStorage.getItem('savedStartDate');
    const savedEndDate = localStorage.getItem('savedEndDate');

    if (savedStartDate && savedEndDate) {
      setDates([dayjs(savedStartDate), dayjs(savedEndDate)]);
    }
  }, []);

  const calculateNumberOfDays = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;
    const start = dayjs(startDate);  // Use dayjs for better date operations
    const end = dayjs(endDate);
    return end.diff(start, 'day') + 1;
  };

  const handleChange = (dates, dateStrings) => {
    setDates(dates);

    if (dates[0] && dates[1]) {
      setShowTooltip(true);
      // Save the dates to local storage as ISO strings
      localStorage.setItem('savedStartDate', dates[0].toISOString());
      localStorage.setItem('savedEndDate', dates[1].toISOString());
    } else {
      setShowTooltip(false);
    }

    onDateChange(dateStrings);
  };

  useEffect(() => {
    // If there are saved dates in local storage, inform the parent component
    if (dates[0] && dates[1]) {
      onDateChange([dates[0].format("MMMM D, YYYY"), dates[1].format("MMMM D, YYYY")]);
    }
  }, [dates, onDateChange]);  // The dependency ensures the effect runs when the dates change

  return (
    <div>
      <span className={styles.quantityLabel}><b>Rental Dates</b></span>
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
            value={dates}
            onChange={handleChange}
            size="large"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default RentalDates;
