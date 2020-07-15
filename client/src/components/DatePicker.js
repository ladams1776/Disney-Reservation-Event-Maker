import React from 'react';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import "react-google-flight-datepicker/dist/main.css";
import styles from './DatePicker.module.css';

const DatePicker = () => (
    <RangeDatePicker
        startDate={new Date()}
        endDate={new Date()}
        // onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
        minDate={new Date(1900, 0, 1)}
        maxDate={new Date(2100, 0, 1)}
        dateFormat="D"
        monthFormat="MMM YYYY"
        startDatePlaceholder="Start Date"
        endDatePlaceholder="End Date"
        disabled={false}
        className={styles.date}
        startWeekDay="monday"
    />
);

export default DatePicker;