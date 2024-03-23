
const mySubscriptions = SubscriptionsCollection.find({ userId });

const SubscriptionStatuses = {
    ACTIVE: { value: 'ACTIVE', isValid: true },
    PAID: { value: 'ACTIVE', isValid: true },
    PENDING: { value: 'PENDING' },
    CANCELED: { value: 'CANCELED' },
};

const mySubscriptionsStatuses = mySubscriptions.map(({ statusValue }) =>
    Object.values(SubscriptionStatuses).find(({ value }) => value === statusValue)
);

const hasValidSubscription = mySubscriptions.some(({ statusValue }) =>
    SubscriptionStatuses[statusValue].isValid
);
