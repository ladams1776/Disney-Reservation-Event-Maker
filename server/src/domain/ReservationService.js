const ReservationRepository = require('../infrastructure/repositories/ReservationRepository');

const ReservationService = {
  getAllReservations: () => ReservationRepository.getAllReservations(),
  addReservation: (reservation, res) => ReservationRepository.addReservation(reservation, res),
};

module.exports = ReservationService;
