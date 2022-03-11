import { LightningElement, track } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager2.getContact';

export default class FetchRecordsViaApex2 extends LightningElement {
    @track numberOfRecords;
    @track contacts;

    get responseReceived() {
        if (this.contacts) {
            return true;
        }
        return false;
    }

    numberOfContactChangeHandler(event) {
        this.numberOfRecords = event.target.value;
    }

    getContacts() {
        getAllContacts({numberOfRecords: this.numberOfRecords}).then(res => {
            this.contacts = res;
        }).catch(err => {
            console.log('Error in retrieving contact records : ' , err.body.message);
        });
    }
}