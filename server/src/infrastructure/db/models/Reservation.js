const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  _id: { type: Number, index: true },
  name: {
    type: String,
  },
  url: {
    type: String,
    trim: true,
  },
  partySize: {
    type: Number,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  time: {
    type: String,
  },
});

const Reservation = mongoose.model('reservations', ReservationSchema);

module.exports = Reservation;
