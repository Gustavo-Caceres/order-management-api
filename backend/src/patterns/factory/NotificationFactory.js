import EmailNotification from './EmailNotification.js';
import SMSNotification from './SMSNotification.js';
import PushNotification from './PushNotification.js';

class NotificationFactory {
  static create(type, payload) {
    switch (type) {
      case 'email': {
        const { to, subject, body } = payload;
        return new EmailNotification(to, subject, body);
      }
      case 'sms': {
        const { to, message } = payload;
        return new SMSNotification(to, message);
      }
      case 'push': {
        const { to, title, message } = payload;
        return new PushNotification(to, title, message);
      }
      default:
        throw new Error(`Unknown notification type: ${type}`);
    }
  }
}

export default NotificationFactory;