import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToastEventExample extends LightningElement {

    handleSuccess() {
        const showSuccess = new ShowToastEvent({
            title: 'Success!!',
            message: 'This is Success Message',
            variant: 'Success'
        });

        this.dispatchEvent(showSuccess); 
    }

    handleError() {
        const showError = new ShowToastEvent({
            title: 'Error!!',
            message: 'This is Error Message',
            variant: 'error'
        });

        this.dispatchEvent(showError); 
    }

    handleWarning() {
        const showWarning = new ShowToastEvent({
            title: 'Warning!!',
            message: 'This is Warning Message',
            variant: 'warning'
        });

        this.dispatchEvent(showWarning); 
    }

    handleInfo() {
        const showInfo = new ShowToastEvent({
            title: 'Info!!',
            message: 'This is Info Message',
            variant: 'info'
        });

        this.dispatchEvent(showInfo); 
    }
}