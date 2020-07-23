const ReservationService = require('../../domain/ReservationService');

module.exports = async (req, res) => {
    const id = req.query._id;
    const reservation = await ReservationService.getReservation(id);
    res.jsonp({ items: reservation })
};