const request = require('request');


module.exports = function (location, callback) {

    const encodedLocation = encodeURIComponent(location);

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodedLocation + ",tr&appid=33fb53775a5f8109e23b6e58a77223e3&units=metric";

    if (!location) {
        return callback('Lokasyon bilgisi alinamadi!!');
    }

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (error) {
            callback('Hava durumu alinamadi!!');
        } else {
            callback(`${body.name}'da hava sicakligi: ${body.main.temp}`)
        }
    });
}