const request = require('request');

/*
function doWork(data, callback) {
    callback('callback...');
}

function doWorkPromise(data) {
    return new Promise(function (resolve, reject) {
           resolve('Hersey basarili bir sekilde calisti...')
        reject({
            error: 'hata var...'
        })
    })
}

doWorkPromise('some data').then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
})

*/

function getWeather(location) {
    return new Promise(function (resolve, reject) {

        const encodedLocation = encodeURIComponent(location);

        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodedLocation + ",tr&appid=33fb53775a5f8109e23b6e58a77223e3&units=metric";

        if (!location) {
            return reject('Lokasyon bilgisi alinamadi!!');
        }

        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error) {
                resolve('Hava durumu alinamadi!!');
            } else {
                resolve(`${body.name}'da hava sicakligi: ${body.main.temp}`)
            }
        });
    })
}

getWeather('istanbul').then(function (currentWeather) {
    console.log(currentWeather)
}, function (error) {
    console.log(error);
})