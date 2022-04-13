({
    googleMap : function(component, event, helper) {
        var coords = component.get("v.coords")

        var mapContainer = component.find("mapAura").getElement();
        var mapOption = {
            center: new google.maps.LatLng(coords.lat, coords.lon),
            zoom: 15,
        };
        
        var map = new google.maps.Map(mapContainer, mapOption);

        var directionsRenderer = new google.maps.DirectionsRenderer();
        var directionsService = new google.maps.DirectionsService();

        helper.placeSearch(component, event, map);
        helper.pathDirection(component, directionsRenderer, directionsService);

        directionsRenderer.setMap(map)
    },
    handleCoordsEvent: function(component, event, helper) {
        var coords = event.getParam("coords");
        
        component.set("v.coords", coords);

        var googleMap = component.get("c.googleMap");

        $A.enqueueAction(googleMap);
    },
    direction: function(component) {
        var coordsEvent = $A.get("e.c:childDataTransfer");
        var fromCoords = component.get("v.fromCoords");
        var toCoords = component.get("v.toCoords");

        if (fromCoords || toCoords) {
            coordsEvent.setParams({
                directionCoords: {
                    fromCoords: fromCoords,
                    toCoords: toCoords
                }
            })
            coordsEvent.fire()
        }

        var googleMap = component.get("c.googleMap");

        $A.enqueueAction(googleMap);
    }
})