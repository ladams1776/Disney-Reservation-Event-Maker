const ReservationService = require('../../domain/ReservationService');

module.exports = async (req, res) => {
  const response = (item) => {
    res.jsonp({ ok: true, items: item });
  };
  const resev = await ReservationService.updateReservation(req.body, response);
};
