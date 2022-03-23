import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation'
import postOpenWeatherData from '@salesforce/apex/OpenWeatherController.postOpenWeatherData';
// https://niksdeveloper.com/salesforce/get-current-location-in-lwc-lightning-web-component/

const weatherAPIKEY = '9b3848eeced0ec3282abafb62cd8bde6';

export default class LightningMapExample extends LightningElement {
    @track IstMarkers = [];
    @track zoomLevel = "1";

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude; // 37.502976
                let lon = position.coords.longitude; // 127.0480896

                let apiEndPoint = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.502976&lon=127.0480896&appid=9b3848eeced0ec3282abafb62cd8bde6';

                postOpenWeatherData({ endPointURL : apiEndPoint }).then(res => {
                    console.log(res, " non json");
                    console.log(res.json(), " is Json");
                })

                // fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=37.502976&lon=127.0480896&appid=9b3848eeced0ec3282abafb62cd8bde6`, {
                // fetch(`api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=` + weatherAPIKEY, {
                // fetch(`api.weatherapi.com/v1/current.json?key=3193a5fc11e24c878fb64823221803&q=Seoul&aqi=yes`, {
                //     method: "GET",
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Accept': 'application/json'
                //     }
                // }).then(res => {
                //     console.log(res, " :: first res")
                //         return res.json();
                //     }).then(data => {
                //         console.log(data, " :: second res")
                //     }).catch(err => {
                //         console.log(err, " : err")
                //     })
            });
        }
    }

    handleClick() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position.coords.latitude, ' : coords')
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;

                this.IstMarkers = [{
                    location: {
                        Latitude: latitude,
                        Longitude: longitude
                    },
                    title: "You're here"
                }];
                this.zoomLevel = "4";
            });
        }
    }
}