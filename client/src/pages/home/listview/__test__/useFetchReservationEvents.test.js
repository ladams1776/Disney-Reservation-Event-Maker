import { renderHook, act } from "@testing-library/react-hooks";
import useFetchReservationEvents from "../useFetchReservationEvents";


test("should return 2 events", async () => {
    // Arrange
    const setEvents = jest.fn();
    const { result } = renderHook(() => useFetchReservationEvents(setEvents));
    // Act
    await act(async () => result.current);
    // Assert
    expect(setEvents).toBeCalledWith({});
});
