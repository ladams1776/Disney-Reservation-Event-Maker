const Reservation = require('../../db/models/Reservation');
const ReservationRepository = require('../ReservationRepository');

jest.mock('../../db/models/Reservation');

describe('server/src/infrastructure/repositories/__test__/ReservationRepository.test.js', () => {
  describe('ReservationRepository', () => {
    describe('#getAllReservations', () => {
      it('should return what Reservation.find() returns', () => {
        // Arrange
        const expected = { id: 1 };
        jest
          .spyOn(Reservation, 'find')
          .mockImplementation(() => expected);

        // Act
        const actual = ReservationRepository.getAllReservations();

        // Assert
        expect(actual).toEqual(expected);
      });
    });
  });
});
