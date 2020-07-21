import React from 'react';
import cn from 'classname';
import { useHistory } from 'react-router-dom';
import styles from './Reservation.module.css';

const Reservation = ({ _id, name, time, startDate, endDate, isSelected }) => {
  const { push } = useHistory();

  const onClick = (event) => {
    event.preventDefault();
    push(`/${_id}`);
  };

  return (
    <div className={cn(styles.reservation, { [styles.isSelected]: isSelected })} onClick={onClick} >
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
