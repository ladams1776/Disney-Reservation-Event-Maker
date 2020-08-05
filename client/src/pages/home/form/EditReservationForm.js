import React, { useState } from 'react';
import moment from 'moment';
import TimeSelect from './TimeSelect';
import fetchApiData from '../../../utils/fetchApiData';
import useFetchReservation from './useFetchReservation';
import DateFields from './DateFields';
import styles from './ReservationForm.module.css';
import DeleteButton from './DeleteButton';

const DEFAULT_PARTY_SIZE_FOR_THE_FAM = 3;
const DEFAULT_DINNER_FOR_THE_FAM = '80000714';


const newNoteHandler = e => {
  e.preventDefault();
  window.location = "/";
};

const useFormSetup = (_id) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [partySize, setPartySize] = useState(DEFAULT_PARTY_SIZE_FOR_THE_FAM);
  const [time, setTime] = useState(DEFAULT_DINNER_FOR_THE_FAM);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = (event) => {
    console.log('event: ', event);
    event.preventDefault();
    const dispatch = () => {
      window.location.reload();
    };

    const dateString = new Date(startDate);
    const sDate = moment(dateString).format('MM/DD/YYYY');

    const date = new Date(endDate).toDateString();
    const eDate = moment(date).format('MM/DD/YYYY');


    fetchApiData(
      'api/reservations',
      {
        method: 'PUT',
        body: { name, url, partySize, time, startDate: sDate, endDate: eDate, _id },
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
    console.log('reservations: ', reservation);
    setName(reservation.name);
    setUrl(reservation.url);
    setPartySize(reservation.partySize);
    setStartDate(reservation.startDate);
    setEndDate(reservation.endDate);
    setTime(reservation.time);
  };

  useFetchReservation(id, setReservation);

  return (
    <div className={styles.form} data-testid="form">
      <title className={styles.title}>
        <h1>Edit Reservation</h1>
        <button className={styles.newButton} onClick={newNoteHandler}>+</button>
      </title>
      <form action="post" className={styles.form}>
        <div className={styles.name}>
          <input
            name="name"
            type="text"
            placeholder="name of reservation"
            className={styles.input}
            value={name}
            onChange={(e) => {
              console.log('name: ', e.target.value);
              setName(e.target.value);
            }}
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
        <div className={styles.buttons}>
          <DeleteButton id={id} />
          <input
            type="submit"
            value="Submit"
            className={styles.submit}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default EditReservationForm;
