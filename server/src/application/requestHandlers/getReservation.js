const ReservationService = require('../../domain/ReservationService');

module.exports = async (req, res) => {
    const id = req.query._id;
    const responder = reservation => res.jsonp({ items: reservation });
    const reservation = await ReservationService.getReservation(id, responder);
    res.status(200).jsonp({ items: reservation })
};