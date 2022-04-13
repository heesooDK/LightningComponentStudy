import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class HeaderNavigation extends NavigationMixin(LightningElement) {

    handleMapsPageClick() {
        this[NavigationMixin.Navigate]({
            "type": "comm__namedPage",
            "attributes": {
                "name": "Maps__c"
            }
        })
    }
}