import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    items: [{
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
    }],
    total: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'completed', 'cancelled', 'shipped', 'delivered'],
        default: 'pending'
    },
    payment: {
        type: Object,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}); 

const Order = mongoose.model('Order', orderSchema);
export default Order;