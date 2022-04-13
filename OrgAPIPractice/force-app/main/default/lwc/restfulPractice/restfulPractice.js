import { LightningElement, track, api } from 'lwc';

const options = [
    {  
        label: 'KRW',
        value: 'KRW'
    },
    {
        label: 'USD',
        value: 'USD'
    },
    {
        label: 'JPY',
        value: 'JPY'
    }
]

export default class ResfulPractice extends LightningElement {
    @track toCurrencyOptions = options; 
    @track fromCurrencyOptions = options;
    @track fromCurrencyValue; 
    @track toCurrencyValue;
    @track currencyInputValue;
    @track exchangeData;
    
    @api
    get labelContent() {
        if (this.fromCurrencyValue == undefined || this.toCurrencyValue == undefined) {
            return this.currencyInputValue;
        } else {
            return this.fromCurrencyValue;
        }
    }

    @api
    get inputValue() {
        if (this.fromCurrencyValue == undefined || this.toCurrencyValue == undefined) {
            return true;
        } else {
            return false;
        }
    }

    @api
    get buttonBoolean() {
        if (this.currencyInputValue == undefined) {
            return true;
        } else {
            return false;
        }
    }

    handleFromCurrencyChange(event) {
        this.fromCurrencyValue = event.detail.value;
    }

    handleToCurrencyChange(event) {
        this.toCurrencyValue = event.detail.value;
    }

    handleInputValueChange(event) {
        this.currencyInputValue = event.target.value;
    }
    

    handleCurrencyConversion() {
        fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' 
                    + this.fromCurrencyValue + '&to_currency=' + this.toCurrencyValue + 
                    '&apikey=YS9XQNLHRP69PT6Q',
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "OAuth 00D8c000005veil!AQMAQGcft5Wd_MTxYmOSEfzF7.rEr.W.Own215gI2sm.jlFAeqYjUGKI_tAVd8BTAasULjpfvVhz30j4GbwOBCfvdQS34GoZ",
            }
        }).then(res => {
            return res.json();
         }).then(data => {
            console.log('res after : ', data)
            let objData = {
                From_Currency_Name: '',
                To_Currency_Name: '',
                Exchange_Rate: 0,
                Exchange_Calculation: 0,
                Last_Refreshed: '',
            };

            let dataJson = data['Realtime Currency Exchange Rate'];

            console.log(dataJson, "dataJson")

            objData.From_Currency_Name = dataJson['2. From_Currency Name'];
            objData.To_Currency_Name = dataJson['4. To_Currency Name'];
            objData.Exchange_Rate = Number(dataJson['5. Exchange Rate']).toFixed(5);
            objData.Exchange_Calculation = ((this.currencyInputValue) * Number(dataJson['5. Exchange Rate'])).toFixed(2);
            objData.Last_Refreshed = dataJson['6. Last Refreshed'];

            this.exchangeData = objData;

         }).catch(err => {
             console.log(err.body)
             console.log('Error : ' + err)
         })
    }
}