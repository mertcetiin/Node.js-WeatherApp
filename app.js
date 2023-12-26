const argv = require('yargs')
    .option('location', {
        alias: 'l',
        demand: false,
        describe: 'Hava durumu için lokasyon bilgisi',
        type: 'string'
    })
    .help('help')
    .argv;


const weather = require('./weather');
const location = require('./location');


if (typeof argv.l === 'string' && argv.l.length > 0) {

    console.log('Lokasyon bilgisi girildi!!!');

    weather(argv.l, function (currentWeather) {
        console.log(currentWeather);
    })
} else {

    console.log('Lokasyon bilgisi girilmedi. Tahmin ediliyor...');

    location(function (location) {
        if (!location) {
            console.log('Lokasyon bilgisi alinamadii!!!')
            return;
        } else {
            weather(location.city, function (currentWeather) {
                console.log(currentWeather);
            })
        }
    })

}