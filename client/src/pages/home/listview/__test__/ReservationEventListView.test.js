import React from "react";
import { render } from "@testing-library/react";
import ReservationEventListView from "../ReservationEventListView";

test("should render ReservationEventListView", () => {
  // Arrange
  const { container } = render(<ReservationEventListView />);

  // Act

  // Assert
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="listView"
    >
      This will be a listview
    </div>
  `);
});