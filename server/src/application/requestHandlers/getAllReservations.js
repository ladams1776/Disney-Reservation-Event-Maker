const ReservationService = require('../../domain/ReservationService');

const getAllReservations = async (req, res) => {
  const reservations = await ReservationService.getAllReservations();
  res.jsonp({ items: reservations });
};

module.exports = getAllReservations;
