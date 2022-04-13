({
    kakaoMap : function(component, event, helper) {
        // == var test = document.getElementById("map");
        // var coords = component.get("v.coords");
        // var { kakao } = window;
        // var { daum } = window;
        
        var mapContainer = component.find("mapAura").getElement();
        console.log(kakao)
        // var mapOption = {
        //     center: new kakao.maps.LatLng(37, 125),
        //     // center: new kakao.maps.LatLng(37, 125),
        //     // center: {
        //     //     latitude: 37,
        //     //     longitude: 125
        //     // },
        //     level: 3
        // };

        // var map = new window.kakao.maps.Map(mapContainer, mapOption);
    },
    handleCoordsEvent: function(component, event, helper) {
        var coords = event.getParam("coords");
        
        component.set("v.coords", coords);
    },
    setCoordsButton: function(component, event, helper) {
        console.log("setCoordsButton");
        var coordsEvent = $A.get("e.c:childDataTransfer");
        coordsEvent.setParams({
            coords: {
                lat: 37,
                lon: 125
            }
        });
        coordsEvent.fire();
    }
})