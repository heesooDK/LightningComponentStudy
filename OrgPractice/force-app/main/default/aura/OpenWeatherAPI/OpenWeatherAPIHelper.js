({
    getData : function(component, coords) {
        var action = component.get('c.postOpenWeatherData');
        var actionSec = component.get('c.postOpenWeatherData')
        
        if (coords.fromCoords || coords.toCoords) {
            action.setParams({
                "endPointURL": `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.fromCoords.lat}&lon=${coords.fromCoords.lon}&appid=9b3848eeced0ec3282abafb62cd8bde6`
            });
    
            action.setCallback(this, function(res) {
                var resData = res.getReturnValue();
                var Date = [];
                
                resData.list.forEach(weatherDate => {
                    var month = weatherDate.dt_txt.split(" ")[0].split("-")[1];
                    var day = weatherDate.dt_txt.split(" ")[0].split("-")[2];
                    var hour = weatherDate.dt_txt.split(" ")[1].split(":")[0];
    
                    weatherDate.pop = Math.round(weatherDate.pop*100);
                    weatherDate.main.temp_max = Math.round(weatherDate.main.temp_max-273);
                    weatherDate.main.temp_min = Math.round(weatherDate.main.temp_min-273);

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
                console.log(component.get("v.fromWeatherData"), " :: from")
            });
            $A.enqueueAction(action);

            actionSec.setParams({
                "endPointURL": `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.toCoords.lat}&lon=${coords.toCoords.lon}&appid=9b3848eeced0ec3282abafb62cd8bde6`
            });
    
            actionSec.setCallback(this, function(res) {
                var resData = res.getReturnValue();
                var Date = [];
                
                resData.list.forEach(weatherDate => {
                    var month = weatherDate.dt_txt.split(" ")[0].split("-")[1];
                    var day = weatherDate.dt_txt.split(" ")[0].split("-")[2];
                    var hour = weatherDate.dt_txt.split(" ")[1].split(":")[0];

                    weatherDate.pop = Math.round(weatherDate.pop*100);
                    weatherDate.main.temp_max = Math.round(weatherDate.main.temp_max-273);
                    weatherDate.main.temp_min = Math.round(weatherDate.main.temp_min-273);

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
                component.set("v.toWeatherData", data)
                console.log(component.get("v.toWeatherData"), " :: to")
            });
            
            component.set("v.coords", '')
            $A.enqueueAction(actionSec);
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

                    weatherDate.pop = Math.round(weatherDate.pop*100);
                    weatherDate.main.temp_max = Math.round(weatherDate.main.temp_max-273);
                    weatherDate.main.temp_min = Math.round(weatherDate.main.temp_min-273);
    
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
                component.set("v.weatherData", data)
                console.log(component.get("v.weatherData"), " :: weatherData")
            }); 

            $A.enqueueAction(action);

        }
    }
})
