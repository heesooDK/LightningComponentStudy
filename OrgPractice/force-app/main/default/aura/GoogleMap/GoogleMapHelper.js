({
    pathDirection : function(component, directionsRenderer, directionsService) {
        var fromInput = component.find("fromInput").getElement();
        var fromSearchBox = new google.maps.places.SearchBox(fromInput);
        var toInput = component.find("toInput").getElement();
        var toSearchBox = new google.maps.places.SearchBox(toInput);
        var travelMode = component.get("v.travelMode");
        var fromCoords;
        var toCoords;

        fromSearchBox.addListener("places_changed", function() {
            var places = fromSearchBox.getPlaces()
            console.log(places[0], " :: from[0]")
            fromCoords = {
                lat: places[0].geometry.location.lat(),
                lon: places[0].geometry.location.lng()
            }

            component.set("v.fromCoords", fromCoords);
        });

        toSearchBox.addListener("places_changed", function() {
            var places = toSearchBox.getPlaces()
            console.log(places[0], " :: to[0]")
            toCoords = {
                lat: places[0].geometry.location.lat(),
                lon: places[0].geometry.location.lng()
            }

            component.set("v.toCoords", toCoords);
        });
        directionsService.route({
            origin: fromCoords,
            destination: toCoords,
            travelMode: travelMode
        }).then(res => {
            console.log(res, " :: res")
            directionsRenderer.setDirections(res)
        }).catch(e => {
            console.log("error : ", e)
        })
    },
    placeSearch: function(component, event, map) {
        var coords = component.get("v.coords")
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
