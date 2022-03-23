({
    handleCoordsEvent : function(cmp, event, helper) {
        var coords = event.getParam("coords");

        // set the handler attributes based on event data
        console.log(coords.lat, "controller lat")
        console.log(coords.lon, "controller lon")
        cmp.set("v.coords", coords);

        helper.getData(cmp, coords.lat, coords.lon);
        
    }
})