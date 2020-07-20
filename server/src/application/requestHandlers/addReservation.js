const ReservationService = require('../../domain/ReservationService');

module.exports = async (req, res) => {
    const response = (item) => {
        res.status(301).jsonp({ ok: true, items: item });
    }
    const resev = await ReservationService.addReservation(req.body);
    response(resev);
};