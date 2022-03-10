import { LightningElement, api } from 'lwc';

export default class Bool extends LightningElement {
    @api show = false;

    constructor() {
        super();
        console.log('contructor on the parnet called');
    }

    connectedCallback() {
        console.log('connected callback on the parnet is called');
    }

    renderedCallback() {
        console.log('redered callback on the parnet is called');
    }

    disconnectedCallback() {
        console.log('disconnected callback on the parnet is called');
    }
}