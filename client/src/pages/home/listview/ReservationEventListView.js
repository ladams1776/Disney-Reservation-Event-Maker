import React, { useState } from 'react';
import useFetchReservationEvents from './useFetchReservationEvents';
import Reservation from './Reservation/Reservation';
import styles from './ReservationEventListView.module.css';

const ReservationEventListView = () => {
  const [events, setEvents] = useState([]);
  useFetchReservationEvents(setEvents);

  return (
    <div className={styles.listView} data-testid="listview">
      {events.map((event) => (
        <div key={event._id} className={styles.reservation}>
          <Reservation {...event} />
        </div>
      ))}
    </div>
  );
};

export default ReservationEventListView;
