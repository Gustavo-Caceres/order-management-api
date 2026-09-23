import PaymentStrategy from './PaymentStrategy.js';

class BoletoPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying ${amount} using Boleto`);
        return {method: 'boleto', amount: amount, status: 'approved'};
    }
}

export default BoletoPayment;