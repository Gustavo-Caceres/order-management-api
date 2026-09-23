class StockObserver {
  update(order, previousStatus) {
    if (order.status === 'shipped') {
      console.log(`StockObserver: Order ${order._id} has been shipped. Updating stock levels.`);
      order.items.forEach(item => {
        console.log(`  - Removing ${item.quantity}x "${item.name}" from stock`);
      });
    } else if (order.status === 'cancelled') {
      console.log(`StockObserver: Order ${order._id} has been cancelled. Restocking items.`);
      order.items.forEach(item => {
        console.log(`  - Restocking ${item.quantity}x "${item.name}"`);
      });
    }
  }
}

export default StockObserver;