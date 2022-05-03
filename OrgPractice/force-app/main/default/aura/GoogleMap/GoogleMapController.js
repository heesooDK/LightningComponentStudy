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

        var fromCoords = component.get("v.fromCoords");
        var toCoords = component.get("v.toCoords");
        
        var fromInput = component.find("fromInput").getElement();
        var fromSearchBox = new google.maps.places.SearchBox(fromInput);
        var toInput = component.find("toInput").getElement();
        var toSearchBox = new google.maps.places.SearchBox(toInput);
        // var fromCoords = component.get("v.fromCoords");
        // var toCoords = component.get("v.toCoords");
        var marker = new google.maps.Marker({
            map,
            position: { lat: coords.lat, lng: coords.lon }
        })

        helper.placeSearch(component, event, map, marker);
        
        fromSearchBox.addListener("places_changed", function() {
            var places = fromSearchBox.getPlaces()
            console.log(places[0], " :: from[0]")
            fromCoords = {
                lat: places[0].geometry.location.lat(),
                lng: places[0].geometry.location.lng()
            }
            
            component.set("v.fromCoords", fromCoords);
        });

        toSearchBox.addListener("places_changed", function() {
            var places = toSearchBox.getPlaces()
            console.log(places[0], " :: to[0]")
            toCoords = {
                lat: places[0].geometry.location.lat(),
                lng: places[0].geometry.location.lng()
            }

            component.set("v.toCoords", toCoords);
        });

        if (Object.keys(fromCoords).length !== 0 && Object.keys(toCoords).length !== 0) {
            marker.setMap(null)
            helper.pathDirection(component, map, directionsRenderer, directionsService);
            directionsRenderer.setMap(map)
        }

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
            var googleMap = component.get("c.googleMap");
    
            $A.enqueueAction(googleMap);
            // coordsEvent.fire()
        }

    }
})