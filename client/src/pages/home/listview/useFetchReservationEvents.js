import { useEffect } from 'react';
import fetchApiData from '../../../utils/fetchApiData';

const useFetchReservationEvents = (setEvents) => {
  return useEffect(() => {
    fetchApiData('api/reservations', { method: 'GET' }, setEvents);
  }, [setEvents]);
};

export default useFetchReservationEvents;
