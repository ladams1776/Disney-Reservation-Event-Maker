import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../HomePage';

test('should render HomePage', () => {
  // Arrange
  // Act
  const { getByTestId } = render(<HomePage />);

  // Assert
  expect(getByTestId('homepage')).toBeInTheDocument();
});
