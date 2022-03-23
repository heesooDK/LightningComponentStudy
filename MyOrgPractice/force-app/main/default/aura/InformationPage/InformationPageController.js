({
    doInit : function(cmp, event) {
        // Get the application event by using the
        // e.<namespace>.<event> syntax
        var latEvent = $A.get("e.c:childDataTransfer");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                latEvent.setParams({
                    coords: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    }
                });
                latEvent.fire();
            })
        }
    }
    // initCoordsAction : function(component, event, helper) {
    //     let latEvent = event.getParam("latEvent");
    //     // let coords = component.get("v.coords")
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(function(p) {
                
    //             latEvent.setParams({ "lat": "32" });
    //             latEvent.fire();

    //             // coords.lat = p.coords.latitude;
    //             // coords.lon = p.coords.longitude;

    //             // console.log(component.get("v.coords").lat, 'PARENT')
                
    //             // component.set("v.coords", coords);
    //         })
    //     }
    // },
    // doInit: function(component, event, helper) {
    //     console.log("여기는 인포메이션 페이지 입니다.")
    // }
})
