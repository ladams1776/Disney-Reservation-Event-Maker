const ReservationRepository = require('../infrastructure/repositories/ReservationRepository');

const ReservationService = {
  getAllReservations: () => ReservationRepository.getAllReservations(),
  getReservation: (id, responder) => ReservationRepository.getReservation(id, responder),
  addReservation: (reservation) => ReservationRepository.addReservation(reservation),
};

module.exports = ReservationService;
