class EmailObserver {
    update(order, previousStatus) {
        console.log(`notifying customer about order status change`);
    }
}

export default EmailObserver;