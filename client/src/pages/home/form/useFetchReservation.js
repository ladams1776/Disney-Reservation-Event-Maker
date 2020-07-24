import { useEffect } from 'react';
import fetchApiData from '../../../utils/fetchApiData';

const useFetchReservation = (id, dispatch) => {
  useEffect(() => {
    (() => fetchApiData(`api/reservation?_id=${id}`, {}, dispatch))();
    // eslint-disable-next-line
  }, [id]);
};

export default useFetchReservation;
