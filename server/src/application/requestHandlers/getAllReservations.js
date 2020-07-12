const ReservationService = require('../../domain/ReservationService');

const getAllReservations = async (req, res) => {
  const reservations = await ReservationService.getAllReservations();
  res.status(200).jsonp({ items: reservations });
};

module.exports = getAllReservations;
