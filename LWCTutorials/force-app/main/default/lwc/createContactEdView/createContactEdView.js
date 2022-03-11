import { LightningElement, track, api } from 'lwc';

export default class CreateContactEdView extends LightningElement {
    @track recordId;
    @track contactName; contactPhone; contactEmail;

    createContact(event) {
        this.recordId = event.detail.id;
    }
}