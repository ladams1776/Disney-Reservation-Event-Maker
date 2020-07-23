const ReservationService = require('../../domain/ReservationService');

module.exports = async (req, res) => {
    const resev = await ReservationService.addReservation(req.body);
    res.jsonp({ ok: true, items: resev });
}; 