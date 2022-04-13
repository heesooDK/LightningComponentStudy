({
    googleMap : function(component, event, helper) {
        var coords = component.get("v.coords")
        var coordsEvent = $A.get("e.c:childDataTransfer");

        var mapContainer = component.find("mapAura").getElement();
        var mapOption = {
            center: new google.maps.LatLng(coords.lat, coords.lon),
            zoom: 15,
        };
        
        var map = new google.maps.Map(mapContainer, mapOption);
        var markerExpose = new google.maps.Marker({
            map,
            position: { lat: coords.lat, lng: coords.lon }
        })
        
        var input = component.find("searchInput").getElement();
        var searchBox = new google.maps.places.SearchBox(input);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        
        map.addListener("bounds_changed", function() {
            searchBox.setBounds(map.getBounds());
        });


        searchBox.addListener("places_changed", function() {
            const places = searchBox.getPlaces();
            const place = places[0];
            
            if (places.length == 0) {
                return;
            }
            
            const bounds = new google.maps.LatLngBounds();
            
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

            markerExpose.setMap(null)
            
            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }

            
            map.fitBounds(bounds);
            
            coordsEvent.setParams({
                coords: {
                    lat: place.geometry.location.lat(),
                    lon: place.geometry.location.lng()
                }
            });
                         
            coordsEvent.fire();
        });
        
        // FROM 과 TO 의 좌표 구하기.

        var fromInput = component.find("fromInput").getElement();
        var fromSearchBox = new google.maps.places.SearchBox(fromInput);
        var toInput = component.find("toInput").getElement();
        var toSearchBox = new google.maps.places.SearchBox(toInput);

        fromSearchBox.addListener("places_changed", function() {
            var places = fromSearchBox.getPlaces()
            
            var fromCoords = {
                lat: places[0].geometry.location.lat(),
                lon: places[0].geometry.location.lng()
            }

            component.set("v.fromCoords", fromCoords);
        });

        toSearchBox.addListener("places_changed", function() {
            var places = toSearchBox.getPlaces()
            
            var toCoords = {
                lat: places[0].geometry.location.lat(),
                lon: places[0].geometry.location.lng()
            }

            component.set("v.toCoords", toCoords);
        });

        // 맵의 경로 탐색 및 마커 추가.
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

        // var googleMap = component.get("c.googleMap");

        // $A.enqueueAction(googleMap);
    }
})