import { getTicketsAvailable } from "./getTicketsAvailable.js";

describe("getTicketsAvailable", () => {
  test("returns empty array when there are no events", () => {
    const events = getTicketsAvailable({ eventName: "Con", quantity: 101 });
    expect(events.length).toBe(0);
  });
  test("returns one event", () => {
    const events = getTicketsAvailable({ userId: 1, eventName: "Con", quantity: 99 });
    expect(events.length).toBe(1);
  });
});
