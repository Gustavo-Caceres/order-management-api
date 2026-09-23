class SMSNotification {
    constructor(to, message) {
        this.phoneNumber = to;
        this.message = message;
    }

    send() {
        console.log(`Sending SMS to ${this.phoneNumber}: ${this.message}`);
        return {channel: 'sms', sentAt: new Date()}
    }
}
export default SMSNotification;