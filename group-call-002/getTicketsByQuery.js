import { UsersCollection } from "./UsersCollection.js";
import { EventsCollection } from "./EventsCollection.js";

const Filters = {
  BY_NAME: {
    execute({ query: { eventName }, event }) {
      return !eventName || event.eventName.includes(eventName);
    },
  },
  BY_DATE: {
    execute({ query: { eventDate }, event }) {
      return !eventDate || event.eventDate === eventDate;
    },
  },
  BY_QUANTITY: {
    execute({ query: { quantity }, event }) {
      return !quantity || event.quantity >= quantity;
    },
  },
  BY_STATUS: {
    execute({ query: { status }, event }) {
      return !status || event.eventStatus === status;
    },
  },
  BY_USER_VIP: {
    execute({ event, user }) {
      return user?.isVIP || !event.onlyVIPUsers;
    },
  },
};

export function getTicketsByQuery(query) {
  const user = UsersCollection.find().find((user) => user.userId === +query.userId);

  return EventsCollection.find().filter((event) => {
    return Object.values(Filters).every(({ execute }) =>
      execute({
        event,
        user,
        query,
      }),
    );
  });
}
