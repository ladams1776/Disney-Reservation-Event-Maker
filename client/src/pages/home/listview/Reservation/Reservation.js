import React from 'react';
import styles from './Reservation.module.css';
import { useHistory } from 'react-router-dom';

const Reservation = ({ _id, name, time, startDate, endDate }) => {
  const { push } = useHistory();

  const onClick = event => {
    event.preventDefault();
    push(`/${_id}`);
  };

  return (
    <div className={styles.reservation} onClick={onClick}>
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
