const weather = require('./weather');
const location = require('./location');

weather(function (currentWeather) {
    console.log(currentWeather);
});

location(function (location) {
    if (!location) {
        console.log('Lokasyon bilgisi alinamadii!!!')
        return;

    } else {
        console.log(`Şehir: ${location.city}`);
        console.log(`Long/Lat: ${location.loc}`);
        console.log(`Ülke: ${location.country}`);
    }
})