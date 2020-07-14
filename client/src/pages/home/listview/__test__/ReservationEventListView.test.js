import React from 'react';
import { render } from '@testing-library/react';
import ReservationEventListView from '../ReservationEventListView';

import useFetchReservationEvents from '../useFetchReservationEvents';

jest.mock('../useFetchReservationEvents');

test('should render ReservationEventListView', () => {
  // Arrange
  // Act
  const { getByTestId } = render(<ReservationEventListView />);

  // Assert
  expect(getByTestId('listview')).toBeInTheDocument();
  expect(useFetchReservationEvents).toHaveBeenCalledTimes(1);
});
