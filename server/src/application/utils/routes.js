const getAllReservations = require('../requestHandlers/getAllReservations');
const addReservation = require('../requestHandlers/addReservation');

const routes = (app) => {
  app.get('/status', (req, res) => {
    res.status(200).jsonp({ success: true }).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.get('/reservations', getAllReservations);
  app.post('/add-reservations', addReservation);
};

module.exports = routes;
