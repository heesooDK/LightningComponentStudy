({
    pathDirection : function(component, map, directionsRenderer, directionsService) {
        var travelMode = component.get("v.travelMode");
        
        directionsService.route({
            origin: fromCoords,
            // origin: {
            //     lat: 37.484085,
            //     lng: 126.782803
            // },
            // destination: {
            //     lat: 37.5102747,
            //     lng: 127.0438167
            // },
            destination: toCoords,
            travelMode: "TRANSIT"
        }).then(res => {
            console.log(res, " :: res")
            directionsRenderer.setDirections(res)
        }).catch(e => {
            console.log("error : ", e)
        })
    },
    placeSearch: function(component, event, map, marker) {
        var coordsEvent = $A.get("e.c:childDataTransfer");
        
        component.set("v.fromCoords", {});
        component.set("v.toCoords", {});

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

            marker.setMap(null)
            
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
