const Reservation = require('../db/models/Reservation');

const ReservationRepository = {
    getAllReservations: () => Reservation.find(),
};

module.exports = ReservationRepository;