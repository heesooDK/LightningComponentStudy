({
    getData : function(component, lat, lon) {
        console.log(lat, " : lat");
        console.log(lon, " : lon");

        var action = component.get('c.postOpenWeatherData');

        action.setParams({
            "endPointURL": `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9b3848eeced0ec3282abafb62cd8bde6`
        });

        action.setCallback(this, function(res) {
            let resData = res.getReturnValue();
            console.log(resData.city, 'city');
            console.log(resData.list, 'list');

            component.set("v.test", resData.city.name);
            component.set("v.weatherList", resData.list);
        });

        $A.enqueueAction(action);
    }
})