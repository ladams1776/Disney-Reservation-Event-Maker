const ReservationRepository = require('../infrastructure/repositories/ReservationRepository');

const ReservationService = {
    getAllReservations: () => ReservationRepository.getAllReservations()
};

module.exports = ReservationService;