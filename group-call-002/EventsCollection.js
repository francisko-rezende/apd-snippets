const events = [
  {
    eventName: "Concert",
    eventDate: "2024-05-15",
    quantity: 100,
    eventStatus: "upcoming",
    onlyVIPUsers: true,
  },
  {
    eventName: "Conference",
    eventDate: "2024-06-20",
    quantity: 200,
    eventStatus: "past",
  },
  {
    eventName: "Workshop",
    eventDate: "2024-04-10",
    quantity: 50,
    eventStatus: "past",
    onlyVIPUsers: true,
  },
  {
    eventName: "Festival",
    eventDate: "2024-08-30",
    quantity: 500,
    eventStatus: "upcoming",
  },
];

export const EventsCollection = {
  find() {
    return events;
  },
};
