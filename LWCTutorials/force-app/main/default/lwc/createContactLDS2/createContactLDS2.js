import { LightningElement, track, wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';

const fieldArray = ['Contact.LastName', 'Contact.Phone', 'Contact.Email'];

export default class CreateContactLDS2 extends LightningElement {
    @track contactName; contactPhone; contactEmail;
    @track recordId;

    @wire(getRecord, {recordId: '$recordId', fields: fieldArray}) contactRecord;

    contactNameChangeHandler(event) {
        this.contactName = event.target.value;
    }
    
    contactPhoneChangeHandler(event) {
        this.contactPhone = event.target.value;
    }

    contactEmailChangeHandler(event) {
        this.contactEmail = event.target.value;
    }

    createContact() {
        const fields = { 
            'LastName': this.contactName,
            'Phone': this.contactPhone,
            'Email': this.contactEmail
         };

        const recordInput = {
            apiName: 'Contact', fields
        };

        createRecord(recordInput).then(res => {
            console.log('Contact has been created: ', res.id);
            this.recordId = res.id;
        }).catch(err => {
            console.log('Error in creating contact :', err.body.message);
        });
    }

    get retContactName() {
        if(this.contactRecord.data) {
            return this.contactRecord.data.fields.LastName.value;
        }
        return undefined;
    }

    get retContactPhone() {
        if(this.contactRecord.data) {
            return this.contactRecord.data.fields.Phone.value;
        }
        return undefined;
    }

    get retContactEmail() {
        if(this.contactRecord.data) {
            return this.contactRecord.data.fields.Email.value;
        }
        return undefined;
    }
}