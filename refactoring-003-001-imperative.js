







// imperative
function checkStatus() {
  if (subscription.status === 'active') {
      triggerActiveStatusAction();
  }
  if (subscription.status === 'pending') {
      triggerPendingStatusAction();
  }
}

