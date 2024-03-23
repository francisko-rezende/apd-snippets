
const mySubscriptions = SubscriptionsCollection.find({ userId });

const SubscriptionStatuses = JSON.parse(
    fs.readFileSync('refactoring-004-002-subscription-dynamic.json')
);

const mySubscriptionsStatuses = mySubscriptions
    .map(({ statusValue }) =>
    Object.values(SubscriptionStatuses)
        .find(({ value }) => value === statusValue)
);

const hasValidSubscription = mySubscriptions
    .some(({ statusValue }) =>
    SubscriptionStatuses[statusValue].isValid
);
