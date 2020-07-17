const Reservation = require('../db/models/Reservation');

const ReservationRepository = {
  getAllReservations: () => Reservation.find({}),
  addReservation: (reservation, response) => {
    const res = new Reservation();
    res.toObject();
    res._id = 100
    console.log(' what is reservation', reservation);
    res.name = reservation.name;
    res.url = reservation.url;
    res.partySize = reservation.partySize;
    res.dates = reservation.dates;
    res.times = reservation.times;
    res.save((err, reserv) => {
      console.log('reserve is: ', reserv);
      if (err) throw err;
      response(reserv);
    });
  }
};

module.exports = ReservationRepository;
