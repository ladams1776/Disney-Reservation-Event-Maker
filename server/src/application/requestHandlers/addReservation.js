const ReservationService = require('../../domain/ReservationService');

const addReservation = (req, res) => {
    const response = res => (item) => {
        res.status(301).jsonp({ items: item });
    }
    const r = response(res);
    console.log('what is req', req.body);
    ReservationService.addReservation(req.body, r);
};

module.exports = addReservation;