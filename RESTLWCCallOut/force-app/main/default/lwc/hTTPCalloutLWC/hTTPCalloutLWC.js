import { LightningElement, track } from 'lwc';

const options = [
    {
        label: 'USD',
        value: 'USD'
    },
    {
        label: 'EUR',
        value: 'EUR'
    },
    {
        label: 'CAD',
        value: 'CAD'
    },
    {
        label: 'GBP',
        value: 'GBP'
    },
    {
        label: 'INR',
        value: 'INR'
    },
]

export default class HTTPCalloutLWC extends LightningElement {
    @track fromCurrencyValue;
    @track toCurrencyValue;
    @track options = options;
    @track toCurrencyOptions = options;
    @track conversionData;

    handleFromCurrencyChange(event) {
        this.fromCurrencyValue = event.detail.value;
        console.log('fromCurrencyValue : ' + this.fromCurrencyValue);
    }

    handleToCurrencyChange(event) {
        this.toCurrencyValue = event.detail.value;
        console.log('toCurrencyValue : ' + this.toCurrencyValue);
    }

    handleCurrencyConversion() {
        // rest api call
        // check the response
        // display the response
        fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' 
                    + this.fromCurrencyValue + '&to_currency=' + this.toCurrencyValue + '&apikey=YS9XQNLHRP69PT6Q', // End point URL
        {
            // Request type
            method:"GET",
            
            headers:{
                // content type
                "Content-Type": "application/json",
                // adding your access token 
                "Authorization": "OAuth 00D8c000005vdGV!AREAQKBQzkq0O61QHoegg0154pTxYDh_7u48YKqFtBUWQF_PqD0TImZ3Yv0rLtI.5BWICnGPSFEEuNcreYH2XBoG3KR2A9JJ",
            }
        })
        .then((response) => {
            return response.json(); // returning the response in the form of JSON
        })
        .then((jsonResponse) => {

            let objData = {
                From_Currency_Name : '',
                From_Currency_Code : '',
                To_Currency_Name : '',
                To_Currency_Code : '',
                Exchange_Rate : '',
                Last_Refersed : '',
            };

            window.console.log('jsonResponse ===> '+JSON.stringify(jsonResponse));
            // retriving the response data
            let exchangeData = jsonResponse['Realtime Currency Exchange Rate'];

            // adding data object
            objData.From_Currency_Code = exchangeData['1. From_Currency Code'];
            objData.From_Currency_Name = exchangeData['2. From_Currency Name'];
            objData.To_Currency_Code = exchangeData['3. To_Currency Code'];
            objData.To_Currency_Name = exchangeData['4. To_Currency Name'];
            objData.Exchange_Rate = exchangeData['5. Exchange Rate'];
            objData.Last_Refershed = exchangeData['6. Last Refreshed'];

            // adding data object to show in UI
            this.conversionData = objData;

            window.console.log('objData : ', JSON.stringify(objData));
        }).catch(err => {
            window.console.log('callout error : ' + err);
        });
    }
}