({
    googleMap : function(component, event, helper) {
        var coords = component.get("v.coords")
        var coordsEvent = $A.get("e.c:childDataTransfer");
        
        var mapContainer = component.find("mapAura").getElement();
        var mapOption = {
            center: new google.maps.LatLng(coords.lat, coords.lon),
            zoom: 15
        };

        var map = new google.maps.Map(mapContainer, mapOption);
        
        var addr = component.get("v.address");
        var input = component.find("searchInput").getElement();
        var searchBox = new google.maps.places.SearchBox(input);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        
        map.addListener("bounds_changed", function() {
            searchBox.setBounds(map.getBounds());
        });

        let markers = [];

        searchBox.addListener("places_changed", function() {
            var places = searchBox.getPlaces();
            
            if (places.length == 0) {
                return ;
            }
            console.log(places)
            
            markers.forEach(marker => {
                marker.setMap(null);
            });

            markers = [];
            
            var bounds = new google.maps.LatLngBounds();

            places.forEach(place => {
                if (!place.geometry || !place.geometry.location) {
                    console.log("Returned place contains no geometry");
                    return ;
                }
                console.log(place.geometry.location.lat())
                
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };
                markers.push(
                    new google.maps.Marker({
                        map, icon, title: place.name, position: place.geometry.location
                    })
                );
                
                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });

            coordsEvent.setParams({
                coords: {
                    lat: markers[0].position.lat(),
                    lon: markers[0].position.lng()
                }
            });
            
            coordsEvent.fire();

            map.fitBounds(bounds);
        });

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

            console.log(fromCoords)
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
            console.log("fire before")
            coordsEvent.fire()
        }
    }
})