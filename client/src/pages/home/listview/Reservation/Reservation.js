import React from 'react';
import styles from './Reservation.module.css';

const Reservation = ({ name, times, dates }) => {
    return (<div>
        <div className={styles.title}>
            <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.subTitle}>
            <span className={styles.dates}>{dates.reduce((acc, date) => date)}</span>
            <span className={styles.time}>{times.reduce((acc, time) => time)}</span>
        </div>
    </div>);
};

export default Reservation;