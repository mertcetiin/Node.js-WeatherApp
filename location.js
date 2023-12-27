const request = require('request');
const url = 'http://ipinfo.io';

module.exports = function () {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error) {
                reject();
            } else {
                resolve(body);
            }
        });
    })
}