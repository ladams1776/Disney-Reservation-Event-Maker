import React, { useState } from 'react';
import styles from './ReservationEventListView.module.css';
import useFetchReservationEvents from './useFetchReservationEvents';

const ReservationEventListView = () => {
    const [events, setEvents] = useState([]);
    useFetchReservationEvents(setEvents);
    console.log('events', events);
    return <div className={styles.listView}>This will be a listview</div>
};

export default ReservationEventListView;
