import react, { useEffect } from 'react';
import glob from 'glob';
import fs from 'fs';

const useFetchReservationEvents = (setEvents) => {
    let yeah;

    // return useEffect(() => {
    //     glob('./resources/*.json', {},  (err, files) => {
    //         err && console.log('error, getting any files from resources directory: ', err);
    //         // console.log('files: ', files);
    //         files.forEach(f => {
    //             yeah.push(require(f));
    //         });
    //     });
    //     setEvents(yeah);
    // }, []);
};

export default useFetchReservationEvents;