({
    pathDirection : function(component, fromCoords, toCoords,directionsRenderer, directionsService) {
        // directionsService.route({
        //     origin:
        // })
    },
    placeSearch: function(component, event, map) {
        var coordsEvent = $A.get("e.c:childDataTransfer");

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
    }
})
