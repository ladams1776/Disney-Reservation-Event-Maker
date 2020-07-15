import React from 'react';
import ReservationEventListView from './listview/ReservationEventListView';
import AddReservationForm from './form/AddReservationForm';
import styles from './HomePage.module.css';

const HomePage = () => {
  return <div className={styles.page} data-testid="homepage">
    <ReservationEventListView />
    <AddReservationForm />
  </div>
};

export default HomePage;