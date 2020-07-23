import React from 'react';
import DateSelect from 'components/DateSelect';
import styles from './DateFields.module.css';

const DateFields = ({ startDate, setStartDate, endDate, setEndDate }) => (
  <>
    <div className={styles.date}>
      <DateSelect date={startDate} setDate={setStartDate} />
      <DateSelect date={endDate} setDate={setEndDate} />
    </div>
    <div className={styles.date}>
      <label className={styles.label}>Start Date</label>
      <label className={styles.label}>End Date</label>
    </div>
  </>
);

export default DateFields;
