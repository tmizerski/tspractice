//interfaces
import {Payment} from "./classes/payments.js";
import {HasFormatter} from "./interfaces/hasFormatter.js";
import {Invoice} from "./classes/invoice.js";
import {ListTamplate} from "./classes/ListTamplate.js";


//inputs
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const list = document.querySelector(".item-list")! as HTMLUListElement;


form.addEventListener('submit', (e: Event)  => {
    e.preventDefault();

    let values:[string, string, number]= [toFrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    const ul = new ListTamplate(list)

    ul.render(doc, type.value, "start")

})