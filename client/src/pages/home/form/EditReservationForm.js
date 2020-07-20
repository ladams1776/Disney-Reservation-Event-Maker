import React, { useState } from 'react';
import cn from 'classname';
import DateSelect from 'components/DateSelect';
import TimeSelect from './TimeSelect';
import fetchApiData from '../../../utils/fetchApiData';
import useFetchReservation from './useFetchReservation';
import styles from './AddReservationForm.module.css';

const DEFAULT_PARTY_SIZE_FOR_THE_FAM = 3;
const DEFAULT_DINNER_FOR_THE_FAM = '80000714';

const useFormSetup = (_id) => {
  const [id, setId] = useState(_id);
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
        method: 'PUT',
        body: { name, url, partySize, time, startDate, endDate, id },
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

const EditReservationForm = ({ id }) => {
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
  } = useFormSetup(id);

  const setReservation = (reservations) => {
    const reservation = reservations[0];
    setName(reservation.name);
    setUrl(reservation.url);
    setPartySize(reservation.partySize);
    setStartDate(reservation.startDate);
    setEndDate(reservation.endDate);
    setTime(reservation?.time || DEFAULT_DINNER_FOR_THE_FAM);
  };

  useFetchReservation(id, setReservation);

  console.log('EditReservationForm', id);
  console.log('startDate', startDate);
  console.log('endDate', endDate);

  return (
    <div className={styles.form} data-testid="form">
      <h1>Edit Reservation</h1>
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
        <div className={styles.date}>
          <div className={styles.startDate}>
            <DateSelect date={startDate} setDate={setStartDate} />
          </div>
          <div className={styles.endDate}>
            <DateSelect date={endDate} setDate={setEndDate} />
          </div>
        </div>
        <div className={styles.date}>
          <label className={cn(styles.startDate, styles.startLabel)}>
            Start Date
          </label>
          <label className={cn(styles.endDate, styles.endLabel)}>
            End Date
          </label>
        </div>
        <input type="submit" value="Submit" className={styles.submit} />
      </form>
    </div>
  );
};

export default EditReservationForm;
