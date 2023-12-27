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

    weather(argv.l).then((currentWeather) => {
        console.log(currentWeather)
    }, (error) => {
        console.log(error)
    })
} else {

    console.log('Lokasyon bilgisi girilmedi. Tahmin ediliyor...');

    location().then((location) => {
        return weather(location.city);
    }).then((currentWeather) => {
        console.log(currentWeather);
    }).catch((error) => {
        console.log(error)
    })

}