import react, { useEffect, useState } from 'react';
import fetchApiData from '../../../utils/fetchApiData';

const useFetchReservationEvents = (setEvents) => {
    return useEffect(() => {
        fetchApiData('status', { method: 'GET' }, setEvents);
    }, [setEvents]);
};

export default useFetchReservationEvents;