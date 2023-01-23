import {HasFormatter} from "../interfaces/hasFormatter";

//class
export class Payment implements HasFormatter{
    recipient: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.recipient} owes $${this.amount} for ${this.details}`
    }
}