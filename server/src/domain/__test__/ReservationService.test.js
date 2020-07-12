const ReservationRepository = require('../../infrastructure/repositories/ReservationRepository');
const ReservationService = require('../ReservationService');

jest.mock('../../infrastructure/repositories/ReservationRepository');

describe('server/src/domain/__test__/ReservationService.test.js', () => {
  describe('ReservationService', () => {
    describe('#getAllReservations', () => {
      it('should return what ReservationRepository.getAllReservations() returns', () => {
        // Arrange
        const expected = { id: 1 };
        jest
          .spyOn(ReservationRepository, 'getAllReservations')
          .mockImplementation(() => expected);

        // Act
        const actual = ReservationService.getAllReservations();

        // Assert
        expect(actual).toEqual(expected);
      });
    });
  });
});
