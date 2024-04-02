import { UsersCollection } from "./UsersCollection.js";
import { EventsCollection } from "./EventsCollection.js";

function filterByName(eventName, event) {
  return !eventName || event.eventName.includes(eventName);
}

function filterByDate(eventDate, event) {
  return !eventDate || event.eventDate === eventDate;
}

function filterByQuantity(quantity, event) {
  return !quantity || event.quantity >= quantity;
}

function filterByUpcoming(event) {
  return event.eventStatus === "upcoming";
}

function filterByVIP(user, event) {
  return user?.isVIP || !event.onlyVIPUsers;
}

function filterAvailableEvents({
  eventName,
  event,
  eventDate,
  quantity,
  user,
}) {
  return (
    filterByName(eventName, event) &&
    filterByDate(eventDate, event) &&
    filterByQuantity(quantity, event) &&
    filterByUpcoming(event) &&
    filterByVIP(user, event)
  );
}

export function getTicketsAvailable({userId, eventName, eventDate, quantity}) {
  const user = UsersCollection.find().find((user) => user.userId === userId);

  return EventsCollection.find().filter((event) => {
    return filterAvailableEvents({
      eventName,
      event,
      eventDate,
      quantity,
      user,
    });
  });
}
