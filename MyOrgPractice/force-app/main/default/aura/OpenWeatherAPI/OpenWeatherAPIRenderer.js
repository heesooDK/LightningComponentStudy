({
// Your renderer method overrides go here
    render: function(component, helper) {
        let returnVal = component.superRender();
        // var coords = event.getParam("coords");

        // // set the handler attributes based on event data
        // console.log(coords, "renderer")
        // cmp.set("v.coords", coords);

        return returnVal;
    }
})
