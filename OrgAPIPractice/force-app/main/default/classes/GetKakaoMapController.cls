public with sharing class GetKakaoMapController {

    @AuraEnabled
    public static string getKakaoMap(String url){
        String apiKey = 'a22ae591cdf4a08b6225ac78c4cc479a';
        String result = null;
        try {
            String apiUrl = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=' + apiKey;
            HttpRequest req = new HttpRequest();
            req.setMethod('GET');
            req.setEndpoint(apiUrl);

            Http http = new Http();

            HttpResponse res = http.send(req);
            if (res.getStatusCode() == 200) {
                result = res.getBody();
            }
        } catch (Exception e) {
            System.debug(e.getMessage());
        }

        return result;
    }
}
