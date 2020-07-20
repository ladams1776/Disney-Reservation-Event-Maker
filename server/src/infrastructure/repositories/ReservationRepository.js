const { ObjecId } = require('mongoose');
const Reservation = require('../db/models/Reservation');

const ReservationRepository = {
  getAllReservations: () => Reservation.find({}),
  addReservation: reservation => Reservation.create(reservation),
  getReservation: id => Reservation.find({ _id: id })
};

module.exports = ReservationRepository;
