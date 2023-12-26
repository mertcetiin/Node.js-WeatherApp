const request = require('request');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=istanbul,tr&appid=33fb53775a5f8109e23b6e58a77223e3&units=metric';


module.exports = function (callback) {
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