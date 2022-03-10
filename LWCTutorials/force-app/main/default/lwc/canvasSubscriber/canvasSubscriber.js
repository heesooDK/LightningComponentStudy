import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { currentPageReference } from 'lightning/navigation';

export default class CanvasSubscriber extends LightningElement {
    @track color;
    @wire(currentPageReference) pageRef;

    connectedCallback() {
        console.log(this, 'connected this color')
        registerListener('changedColor', this.handleChangedColor, this);
    }

    disconnectedCallback() {
        console.log(this, 'disconnected this color');
        unregisterAllListeners(this);
    }

    handleChangedColor(colorCode) {
        console.log("Color --> ", colorCode);
        this.color = colorCode;
    }
    
    get colorStyle() {
        return `background-color : ${this.color}`;
    }
}