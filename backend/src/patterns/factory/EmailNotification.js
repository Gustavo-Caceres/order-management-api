class EmailNotification {
    constructor(to, subject, body) {
        this.to = to;
        this.subject = subject;
        this.body = body;
    }

    send() {
        console.log(`Sending email to ${this.to} with subject "${this.subject}" and body "${this.body}"`);
        return {channel: 'email', sentAt: new Date()}
    }
}

export default EmailNotification;