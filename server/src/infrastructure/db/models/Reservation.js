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
  dates: {
    type: [String],
  },
  times: {
    type: [String],
  },
});

const Reservation = mongoose.model('reservations', ReservationSchema);

module.exports = Reservation;
