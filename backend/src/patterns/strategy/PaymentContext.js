class PaymentContext {

    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    executePayment(amount) {
        return this.paymentStrategy.pay(amount);
    }
}

export default PaymentContext;