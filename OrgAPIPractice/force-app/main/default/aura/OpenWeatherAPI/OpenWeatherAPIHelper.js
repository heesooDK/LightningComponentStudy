({
    getData : function(component, coords) {
        var action = component.get('c.postOpenWeatherData');
        
        if (coords.fromCoords || coords.toCoords) {
            action.setParams({
                "endPointURL": `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.fromCoords.lat}&lon=${coords.toCoords.lon}&appid=9b3848eeced0ec3282abafb62cd8bde6`
            });
    
            action.setCallback(this, function(res) {
                var resData = res.getReturnValue();
                var Date = [];
                
                resData.list.forEach(weatherDate => {
                    var month = weatherDate.dt_txt.split(" ")[0].split("-")[1];
                    var day = weatherDate.dt_txt.split(" ")[0].split("-")[2];
                    var hour = weatherDate.dt_txt.split(" ")[1].split(":")[0];
    
                    Date.push({
                        "month": month,
                        "day": day,
                        "hour": hour
                    });
                });
                
                var data = {
                    "cityName": resData.city.name,
                    "weatherList": resData.list,
                    "Date": Date
                }
                
                component.set("v.fromWeatherData", data)
                if(data) {
                    console.log(data, " : set after")
                }
            });

            $A.enqueueAction(action);
            action = component.get('c.postOpenWeatherData');

            action.setParams({
                "endPointURL": `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.toCoords.lat}&lon=${coords.toCoords.lon}&appid=9b3848eeced0ec3282abafb62cd8bde6`
            });
    
            action.setCallback(this, function(res) {
                console.log("1-2")
                var resData = res.getReturnValue();
                var Date = [];
                
                resData.list.forEach(weatherDate => {
                    var month = weatherDate.dt_txt.split(" ")[0].split("-")[1];
                    var day = weatherDate.dt_txt.split(" ")[0].split("-")[2];
                    var hour = weatherDate.dt_txt.split(" ")[1].split(":")[0];
    
                    Date.push({
                        "month": month,
                        "day": day,
                        "hour": hour
                    });
                });
                
                var data = {
                    "cityName": resData.city.name,
                    "weatherList": resData.list,
                    "Date": Date
                }
                console.log("set before");
                component.set("v.toWeatherData", data)
                if(data) {
                    console.log(data, " : set after")
                }
                console.log("second callback")
            });
            // component.set("v.weatherData", "")
            console.log("옵니까")
        } else {
            action.setParams({
                "endPointURL": `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=9b3848eeced0ec3282abafb62cd8bde6`
            });
    
            action.setCallback(this, function(res) {
                var resData = res.getReturnValue();
                var Date = [];
                
                resData.list.forEach(weatherDate => {
                    var month = weatherDate.dt_txt.split(" ")[0].split("-")[1];
                    var day = weatherDate.dt_txt.split(" ")[0].split("-")[2];
                    var hour = weatherDate.dt_txt.split(" ")[1].split(":")[0];
    
                    Date.push({
                        "month": month,
                        "day": day,
                        "hour": hour
                    });
                });
                
                var data = {
                    "cityName": resData.city.name,
                    "weatherList": resData.list,
                    "Date": Date
                }
                console.log("set before");
                component.set("v.weatherData", data)
                if(data) {
                    console.log(data, " : set after")
                }
            });
        }
        
        $A.enqueueAction(action);
    }
})
