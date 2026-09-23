class LogObserver {
    update(order, previousStatus) {
        console.log(`Order ${order._id} status changed from ${previousStatus} to ${order.status}`);
    }
}
export default LogObserver;