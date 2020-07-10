const ReservationService = require('../../domain/ReservationService');

function getAllReservations(req, res) {
    res.status(200).jsonp({ items: ReservationService.getAllReservations() });
}

module.exports = getAllReservations;