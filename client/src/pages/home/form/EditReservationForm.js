import React, { useState } from 'react';
import cn from 'classname';
import DateSelect from 'components/DateSelect';
import styles from './EditReservationForm.module.css';
import TimeSelect from './TimeSelect';
import fetchApiData from '../../../utils/fetchApiData';

const DEFAULT_PARTY_SIZE_FOR_THE_FAM = 3;

const useFormSetup = id => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [partySize, setPartySize] = useState(DEFAULT_PARTY_SIZE_FOR_THE_FAM);
    const [time, setTime] = useState('80000714');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSubmit = event => {
        event.preventDefault();
        const dispatch = () => { window.location.reload() };
        fetchApiData('api/reservations', { method: 'PUT', body: { name, url, partySize, time, startDate, endDate, id } }, dispatch);
    };

    return { name, setName, url, setUrl, partySize, setPartySize, time, setTime, startDate, setStartDate, endDate, setEndDate, handleSubmit };
};

const EditReservationForm = id => {
    const {
        name, setName,
        url, setUrl,
        partySize, setPartySize,
        time, setTime,
        startDate, setStartDate,
        endDate, setEndDate,
        handleSubmit
    } = useFormSetup(id);

    return (<div className={styles.form} data-testid="form">
        <form action="post" className={styles.form} onSubmit={e => handleSubmit(e)}>
            <div className={styles.name}><input name="name" type="text" placeholder="name of reservation" className={styles.input} value={name} onChange={e => setName(e.target.value)} /><label className={styles.label}>Name</label></div>
            <div className={styles.url}><input name="url" type="text" placeholder="url" className={styles.input} value={url} onChange={e => setUrl(e.target.value)} /><label className={styles.label}>Url</label></div>
            <div className={styles.partySize}><input name="partySize" type="number" placeholder="partySize" className={styles.input} value={partySize} onChange={e => setPartySize(e.target.value)} /><label className={styles.label}>Party Size</label></div>
            <div className={styles.select}><TimeSelect className={styles.input} value={time} onChange={e => setTime(e.target.value)} /><label className={styles.label}>Times</label></div>
            <div className={styles.date}>
                <div className={styles.startDate}>
                    <DateSelect date={startDate} setDate={setStartDate} />
                </div>
                <div className={styles.endDate}>
                    <DateSelect date={endDate} setDate={setEndDate} />
                </div>
            </div>
            <div className={styles.date}>
                <label className={cn(styles.startDate, styles.startLabel)}>Start Date</label>
                <label className={cn(styles.endDate, styles.endLabel)}>End Date</label>
            </div>
            <input type="submit" value="Submit" className={styles.submit} />
        </form>
    </div>);
};

export default EditReservationForm;
