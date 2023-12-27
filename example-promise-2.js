// function doWork(fail) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (typeof fail === 'boolean' && fail === true) {
//                 reject('Hata!!!')
//             } else {
//                 resolve('Hersey basarili...');
//             }

//         }, 1000)
//     })
// }

// doWork().then(function (message) {
//     console.log(message)
//     return doWork(true);
// }).then(function () {
//     console.log('Hepsi tamamlandii...');
// }).catch(function (error) {
//     console.log(error);
// })


function getLocation() {
    return new Promise((resolve, reject) => {
        resolve('Istanbul')
    })
}

function getWeather(location) {
    return new Promise((resolve, reject) => {
        resolve(`${location}'da hava bugün 34 derecedir!!!`)
    })
}

getLocation().then((location) => {
    return getWeather(location)
}).then((currentweather) => {
    console.log(currentweather);
}).catch((error) => {
    console.log(error);
})