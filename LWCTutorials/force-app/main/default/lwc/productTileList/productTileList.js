import { LightningElement, wire, track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import getProducts from '@salesforce/apex/ProductController.getProducts';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubsub';

export default class ProductTileList extends LightningElement {
    @track pageNumber = 1; 
    @track pageSize; 
    @track totlaItemCount = 0;
    @track filters = {};
    @wire(CurrentPageReference) pageRef;
    @wire(getProducts, {filters: '$filters', pageNumber: '$pageNumber'}) products;
    // @api;

    connectedCallback() {
        registerListener('filterChange', this.handleFilterChange, this);
    }

    handleProductSelected(event) {
        fireEvent(this.pageRef, 'productSelected', event.detail);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    handleFilterChange(filters) {
        this.filters = { ...filters };
        this.pageNumber = 1;
    }

    handlePreviousPage() {
        this.pageNumber = this.pageNumber - 1;
    }

    handleNextPage() {
        this.pageNumber = this.pageNumber + 1;
    }
}