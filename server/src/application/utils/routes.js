const getAllReservations = require('../requestHandlers/getAllReservations');

const routes = (app) => {
    app.get('/status', (req, res) => { res.status(200).jsonp({ success: true }).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });

    app.get('/reservations', getAllReservations);
}


module.exports = routes;