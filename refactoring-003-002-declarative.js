







 // declarative
function checkStatus() {
    const statusEnum = Statuses[subscription.status];
    if (!statusEnum.triggerAction) {
        return;
    }
    statusEnum.triggerAction();
}
