const Reservation = require('../db/models/Reservation');

const ReservationRepository = {
  getAllReservations: () => Reservation.find({}),
  addReservation: reservation => Reservation.create(reservation),
  updateReservation: (doc, response) => {
    console.log('Repo: ', doc);
    Reservation.findOneAndUpdate({ _id: doc._id }, {
      $set: {
        endDate: doc.endDate,
        name: doc.name,
        partySize: doc.partySize,
        startDate: doc.startDate,
        time: doc.time,
        url: doc.url,
      },
    },
      { new: true, useFindAndModify: false },
      (err, item) => {
        if (err) throw err;
        console.log('item is: ', item);
        response(item)
      });
  },
  getReservation: id => Reservation.find({ _id: id })
};

module.exports = ReservationRepository;


