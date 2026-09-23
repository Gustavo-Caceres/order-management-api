import Order from '../../models/Order.js';

class OrderRepository {

    async createOrder(data){
        const order = new Order(data);
        return await order.save();
    }

    async getAllOrders(){
        return await Order.find();
    }

    async getOrderById(id){
        return await Order.findById(id);
    }

    async updateOrder(id, newData){
        return await Order.findByIdAndUpdate(id, newData, { new: true }); 
    }
}

export default new OrderRepository();