# Disney-Reservation-Event-Maker

A React/Express/Mongo app that can be used to create "disney reservation events". These events have the essential data required to poll the Disney reservation website's form to see if there are available reservations. These reservations will be used by the `java-disney-go-reservation-app`, to try and request

I originally thought I would just include this in `java-disney-go-reservation-app`, but this will become a maintenance headache to keep together 2 separate applications.

## How to start through docker compose

Pretty basic, go to the root and type `docker-compose build` and `docker-compose up`.

The app is broken up into 3 pieces.

1. The mongodb: will setup the database (`reservations`) and add a disney reservation entry, which can be edited.
2. The server: expressjs being run by nodemon. Will work with mongodb to persist and afford use-cases to the client.
3. The client: React app that will take in the user's input and work with the server to create/manage disney reservation events.
