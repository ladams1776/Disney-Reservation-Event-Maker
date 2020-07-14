import React from "react";
import { render } from "@testing-library/react";
import AddReservationForm from "../AddReservationForm";

test("should render AddReservationForm", () => {
  // Arrange
  const { getByTestId } = render(<AddReservationForm />);

  // Act

  // Assert
  expect(getByTestId("form"));
});
