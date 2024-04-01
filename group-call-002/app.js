import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const events = [
    {
        eventName: "Concert",
        eventDate: "2024-05-15",
        ticketsQty: 100,
        eventStatus: "upcoming",
        onlyVIPUsers: true
    },
    {
        eventName: "Conference",
        eventDate: "2024-06-20",
        ticketsQty: 200,
        eventStatus: "past"
    },
    {
        eventName: "Workshop",
        eventDate: "2024-04-10",
        ticketsQty: 50,
        eventStatus: "past",
        onlyVIPUsers: true
    },
    {
        eventName: "Festival",
        eventDate: "2024-08-30",
        ticketsQty: 500,
        eventStatus: "upcoming"
    }
];

const users = [
    {
        userId: 1,
        isVIP: true
    },
    {
        userId: 2,
        isVIP: false
    },
    {
        userId: 3,
        isVIP: true
    },
    {
        userId: 4,
        isVIP: false
    }
];


// API that returns events with tickets available for purchases.
//
//  The search in the database needs to consider:
//   Number of tickets available
//  Authenticated user or anon
//  Is the user VIP?
//   Is the event status available?
//   Is it a private event (sub-set of users)?
//
//   The possible inputs are (all are optional):
// User id
// Quantity of tickets
// Event name
// Event date (period)

app.get('/tickets-available', (req, res) => {
    const { userId, qty, eventName, eventDate } = req.query
    const user = users.find((user) => user.userId === userId)

    return res.json(events.filter((event)=> {
        return (
          (!eventName || event.eventName.includes(eventName)) &&
          (!eventDate || event.eventDate === eventDate) &&
          (!qty || event.ticketsQty >= qty) &&
          event.eventStatus === "upcoming" &&
          (user.isVIP || !event.onlyVIPUsers)
        )
    }))
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
