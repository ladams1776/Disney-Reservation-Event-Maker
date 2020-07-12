const ReservationService = require('../../../domain/ReservationService');
const getAllReservations = require('../getAllReservations');

jest.mock('../../../domain/ReservationService');

describe('server/src/application/requestHandlers/__test__/getAllReservations.test.js', () => {
  describe('getAllReservations', () => {
    it('should call status 200 and jsonp with reservations', async () => {
      // Arrange
      const req = {};
      const res = {
        status: jest.fn().mockImplementation(() => res),
        jsonp: jest.fn(),
      };

      const expected = { id: 1 };
      jest
        .spyOn(ReservationService, 'getAllReservations')
        .mockImplementation(() => expected);

      // Act
      await getAllReservations(req, res);

      // Assert
      expect(res.status).toBeCalledWith(200);
      expect(res.jsonp).toBeCalledWith({ items: expected });
    });
  });
});
