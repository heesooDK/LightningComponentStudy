({
    doInit : function(cmp, event) {
        var coordsEvent = $A.get("e.c:childDataTransfer");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                coordsEvent.setParams({
                    coords: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    }
                });
                coordsEvent.fire();
            })
        }
    }
})
