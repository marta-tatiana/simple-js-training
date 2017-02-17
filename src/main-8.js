// extracted function
// changed vars to lets and consts

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    if (request.method == 'GET' && request.url === '/hello') {
       doSthWithData();
    }
}).listen(8000);


function doSthWithData() {
    const data = fs.readFile(__dirname + '/nobel-prizes.json', function (err, data) {
        console.log('read nobel prizes');
        if (err) {
            console.log(err);
            return;
        }
        let parsed = JSON.parse(data);

        let data2 = fs.readFile(__dirname + '/english-historical-events.json', function (err, data) {
            console.log('read english historical events');
            if (err) {
                console.log(err);
                return;
            }
            let parsed2 = JSON.parse(data);
            console.log(parsed2);
            response.end('Hello team! Data is:' + JSON.stringify(parsed));
        })
    });
}

// see: http://callbackhell.com/