//class
export class Payment {
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.recipient} owes $${this.amount} for ${this.details}`;
    }
}
