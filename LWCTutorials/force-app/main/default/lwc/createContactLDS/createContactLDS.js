import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateContactLDS extends LightningElement {
    @track contactName; contactEmail; contactPhone;

    contactNameChangeHandler(event) {
        this.contactName = event.target.value;
    }

    contactEmailChangeHandler(event) {
        this.contactEmail = event.target.value;
    }

    contactPhoneChangeHandler(event) {
        this.contactPhone = event.target.value;
    }

    createContact() {
        const fields = {
            'LastName': this.contactName,
            'Phone': this.contactPhone,
            'Email': this.contactEmail
        };

        const recordInput = {
            apiName: 'Contact',
            fields
        };

        createRecord(recordInput).then(res => {
            console.log('Contact has been create successfully ', res.id);
        }).catch(err => {
            console.log('Error in creating contact: ', err.body.message);
        });
    }
}