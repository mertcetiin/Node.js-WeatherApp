require('dotenv').config();
const request = require('request');


module.exports = function (location) {

    const apiKey = process.env.OPENWEATHERMAP_API_KEY;

    return new Promise(function (resolve, reject) {

        const encodedLocation = encodeURIComponent(location);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedLocation},tr&appid=${apiKey}&units=metric`;

        if (!location) {
            return reject('Lokasyon bilgisi alinamadi!!');
        }

        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error) {
                reject('Hava durumu alinamadi!!');
            } else {
                resolve(`${body.name}'da hava sicakligi: ${body.main.temp}`)
            }
        });
    })
}