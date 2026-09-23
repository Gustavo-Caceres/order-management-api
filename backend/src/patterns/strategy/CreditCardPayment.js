import PaymentStrategy from './PaymentStrategy.js';

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying ${amount} using credit card`);
    return {method : 'creditCard', amount: amount, status: 'approved'};    
    }
}

export default CreditCardPayment;