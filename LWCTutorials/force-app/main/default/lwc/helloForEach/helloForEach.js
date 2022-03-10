import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Amy Talor',
            Title: 'VP of Enginnering'
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales'
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO'
        },
        {
            Id: 4,
            Name: 'Jennifer Anigston',
            Title: 'VP of Marketing'
        },
        {
            Id: 3,
            Name: 'Moon HeeSoo',
            Title: 'CTO'
        }
    ]
}