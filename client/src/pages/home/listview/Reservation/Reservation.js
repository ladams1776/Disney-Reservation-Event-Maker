import React from 'react';
import styles from './Reservation.module.css';

const Reservation = ({ name, time, startDate, endDate }) => {
  return (
    <div>
      <div className={styles.title}>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.subTitle}>
        <span className={styles.dates}>
          {startDate}-{endDate}
        </span>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
};

export default Reservation;
