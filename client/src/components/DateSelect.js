import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './DateSelect.module.css';

const DateSelect = ({ date, setDate }) => (
    <DatePicker
        selected={date}
        onChange={e => setDate(e)}
        className={styles.date}
    />
);

export default DateSelect;