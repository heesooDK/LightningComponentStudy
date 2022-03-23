public with sharing class OpenWeatherController {
    @AuraEnabled
    public static map<string, Object> postOpenWeatherData(String endPointURL) {
        map<string, Object> data = new map<string, Object>();
        
        
        
        String res = null;

        if (string.isNotBlank(endPointURL)) {
            HttpRequest httpRequest = new httpRequest();
            httpRequest.setEndpoint(endPointURL);
            httpRequest.setMethod('GET');

            try {
                Http http = new Http();
                HttpResponse httpRes = http.send(httpRequest);
                if (httpRes.getStatusCode() == 200) {
                    res = httpRes.getBody();
                } else {
                    throw new CalloutException(httpRes.getBody());
                }
            } catch (Exception e) {
                throw e;
            }
        }

        if (String.isNotBlank(res)) {
            data = (map<string, Object>)JSON.deserializeUntyped(res);
            System.debug(data);
        }


        return data;
    }
}
