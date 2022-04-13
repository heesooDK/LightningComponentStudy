({
    handleCoordsEvent : function(cmp, event, helper) {
        var coords = event.getParam("coords");
        var directionCoords = event.getParam("directionCoords");
        console.log(directionCoords, " controller")
        
        if (directionCoords) {
            cmp.set("v.coords", "");
            cmp.set("v.directionCoords", directionCoords);
            helper.getData(cmp, directionCoords);
        } else {
            cmp.set("v.coords", coords);
            helper.getData(cmp, coords);
        }
    }
})


