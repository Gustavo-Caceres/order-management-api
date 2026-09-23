class PushNotification {
    constructor(to, title, message) {
        this.to = to;
        this.title = title;
        this.message = message;
    }

    send() {
        console.log(`Sending push notification to ${this.to}: ${this.title} - ${this.message}`);
        return {channel: 'push', sentAt: new Date()}
    }
}
export default PushNotification;