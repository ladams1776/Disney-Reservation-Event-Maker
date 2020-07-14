import React from 'react';
import styles from './AddReservationForm.module.css';

const AddReservationForm = () => (
  <div className={styles.form}>
    Reservation Form
    <form action="post" data-testid="form">
      <input name="name" type="text" />
      <input name="" type="text" />
    </form>
  </div>
);

export default AddReservationForm;
