//interfaces
import { Payment } from "./classes/payments.js";
import { Invoice } from "./classes/invoice.js";
import { ListTamplate } from "./classes/ListTamplate.js";
//inputs
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const list = document.querySelector(".item-list");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    const ul = new ListTamplate(list);
    ul.render(doc, type.value, "start");
});
