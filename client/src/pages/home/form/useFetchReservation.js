import { useEffect } from "react";
import fetchApiData from "../../../utils/fetchApiData";

const useFetchReservation = (id, dispatch) => {
    useEffect(() => {
        (() => fetchApiData(`api/reservation?_id=${id}`, {}, dispatch))();
    }, [id]);
};


export default useFetchReservation;