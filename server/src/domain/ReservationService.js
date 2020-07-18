const ReservationRepository = require('../infrastructure/repositories/ReservationRepository');

const ReservationService = {
  getAllReservations: () => ReservationRepository.getAllReservations(),
  getReservation: id => ReservationRepository.getReservation(id),
  addReservation: (reservation, res) => ReservationRepository.addReservation(reservation, res),
};

module.exports = ReservationService;
