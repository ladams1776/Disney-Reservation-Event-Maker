import React, { useState } from 'react';
import styles from './ReservationEventListView.module.css';
import useFetchReservationEvents from './useFetchReservationEvents';
import Reservation from './Reservation/Reservation';

const ReservationEventListView = () => {
  const [events, setEvents] = useState([]);
  useFetchReservationEvents(setEvents);

  return (
    <div className={styles.listView} data-testid="listview">
      {events.map((event) => (
        <div key={event._id}>
          <Reservation {...event} />
        </div>
      ))}
    </div>
  );
};

export default ReservationEventListView;
