import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import ReservationEventListView from './listview/ReservationEventListView';
import AddReservationForm from './form/AddReservationForm';
import styles from './HomePage.module.css';

const HomePage = ({ match }) => {
  const id = match?.params?.id;

  if (id) {
    return <div className={styles.container}>
      <Navbar />
      <div className={styles.page} data-testid="homepage">
        <ReservationEventListView />
        <AddReservationForm />
      </div>
    </div>
  } else {
    return <div className={styles.container}>
      <Navbar />
      <div className={styles.page} data-testid="homepage">
        <ReservationEventListView />
        <AddReservationForm />
      </div>
    </div>
  }

};

export default HomePage;