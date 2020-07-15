import React from 'react';
import DatePicker from 'components/DatePicker';
import styles from './AddReservationForm.module.css';
import TimeSelect from './TimeSelect';

const AddReservationForm = () => <div className={styles.form} data-testid="form">
  <form action="post" className={styles.form}>
    <div className={styles.name}><input name="name" type="text" placeholder="name of reservation" className={styles.input} /><label className={styles.label}>Name</label></div>
    <div className={styles.url}><input name="url" type="text" placeholder="url" className={styles.input} /><label className={styles.label}>Url</label></div>
    <div className={styles.partySize}><input name="partySize" type="number" placeholder="partySize" defaultValue="3" className={styles.input} /><label className={styles.label}>Party Size</label></div>
    <div className={styles.select}><TimeSelect className={styles.input} /><label className={styles.label}>Times</label></div>
    <div className={styles.date}>
      <DatePicker />
      <label className={styles.label}>Dates</label>
    </div>
    <input type="submit" value="Submit" className={styles.submit} />
  </form>
</div>

export default AddReservationForm;