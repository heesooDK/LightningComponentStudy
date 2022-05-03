import { LightningElement, track, wire } from 'lwc';
import { coords } from 'c/pubsub'
// import { coords, lat, lng } from 'c/pubsub'

export default class ParentPage extends LightningElement {
    @track placeCoords = coords;
    connectedCallback() {

        // console.log(lat, "lat")
        // console.log(lng, "lng")
        navigator.geolocation.getCurrentPosition((position) => {
            coords.lat = position.coords.latitude;
            coords.lng = position.coords.longitude
            console.log(coords, "coords")
        })
    }
}