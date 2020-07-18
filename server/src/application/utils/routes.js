const getAllReservations = require('../requestHandlers/getAllReservations');
const addReservation = require('../requestHandlers/addReservation');
const getReservation = require('../requestHandlers/getReservation');

const routes = (app) => {
  app.get('/api/status', (req, res) => {
    res.status(200).jsonp({ success: true }).end();
  });
  app.head('/api/status', (req, res) => {
    res.status(200).end();
  });

  app.get('/api/reservation', getReservation);
  app.get('/api/reservations', getAllReservations);
  app.post('/api/reservations', addReservation);
};

module.exports = routes;
