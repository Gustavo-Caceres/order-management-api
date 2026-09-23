class OrderSubject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }   

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notify(order, previousStatus) {
    this.observers.forEach(observer => observer.update(order, previousStatus));
    }
}

export default OrderSubject;