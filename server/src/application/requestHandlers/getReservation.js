const ReservationService = require('../../domain/ReservationService');

module.export = async (req, res) => {
    const reservation = await ReservationService.getReservation(req.params.id);
    res.status(200).jsonp({ items: reservation });
};