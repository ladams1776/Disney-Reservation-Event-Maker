import React, { useState } from 'react';
import TimeSelect from './TimeSelect';
import fetchApiData from '../../../utils/fetchApiData';
import DateFields from './DateFields';
import styles from './ReservationForm.module.css';

const DEFAULT_PARTY_SIZE_FOR_THE_FAM = 3;
const DEFAULT_DINNER_FOR_THE_FAM = '80000714';

const useFormSetup = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [partySize, setPartySize] = useState(DEFAULT_PARTY_SIZE_FOR_THE_FAM);
  const [time, setTime] = useState(DEFAULT_DINNER_FOR_THE_FAM);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const dispatch = () => {
      window.location.reload();
    };

    fetchApiData(
      'api/reservations',
      {
        method: 'POST',
        body: { name, url, partySize, time, startDate, endDate },
      },
      dispatch
    );
  };

  return {
    name,
    setName,
    url,
    setUrl,
    partySize,
    setPartySize,
    time,
    setTime,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    handleSubmit,
  };
};

const AddReservationForm = () => {
  const {
    name,
    setName,
    url,
    setUrl,
    partySize,
    setPartySize,
    time,
    setTime,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    handleSubmit,
  } = useFormSetup();

  return (
    <div className={styles.form} data-testid="form">
      <h1>Add Reservation</h1>
      <form
        action="post"
        className={styles.form}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.name}>
          <input
            name="name"
            type="text"
            placeholder="name of reservation"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className={styles.label}>Name</label>
        </div>
        <div className={styles.url}>
          <input
            name="url"
            type="text"
            placeholder="url"
            className={styles.input}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label className={styles.label}>Url</label>
        </div>
        <div className={styles.partySize}>
          <input
            name="partySize"
            type="number"
            placeholder="partySize"
            className={styles.input}
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
          />
          <label className={styles.label}>Party Size</label>
        </div>
        <div className={styles.select}>
          <TimeSelect
            className={styles.input}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <label className={styles.label}>Times</label>
        </div>
        <DateFields
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          startDate={startDate}
          endDate={endDate}
        />

        <input type="submit" value="Submit" className={styles.submit} />
      </form>
    </div>
  );
};

export default AddReservationForm;
