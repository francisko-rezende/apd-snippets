import { EventsCollection } from './EventsCollection';

test('events collection', () => {
    const events = EventsCollection.find();
    expect(events.length).toBe(4);
})
