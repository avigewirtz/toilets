import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const RentalDates = () => {
  const [dates, setDates] = useState([null, null]);

  const handleChange = (dates, dateStrings) => {
    setDates(dates);
    console.log('From:', dateStrings[0], ', to:', dateStrings[1]);
  };

  return (
    <div>
      <h6>Rental Dates</h6>
      <RangePicker
        ranges={{
          Today: [moment(), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default RentalDates;
