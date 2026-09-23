import PaymentStrategy from './PaymentStrategy.js';

class PixPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying ${amount} using PIX`);
        return {method: 'pix', amount: amount, status: 'approved'};
    }
}

export default PixPayment;