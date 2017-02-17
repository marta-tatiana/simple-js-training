var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
     if (request.method == 'GET' && request.url === '/hello') {
        var data = fs.readFile(__dirname + '/nobel-prizes.json', function (err, data) {
            console.log('read nobel prizes');
            if (err) {
                console.log(err);
                return;
            }
            var parsed = JSON.parse(data);

            var data2 = fs.readFile(__dirname + '/english-historical-events.json', function (err, data) {
                console.log('read english historical events');
                if (err) {
                    console.log(err);
                    return;
                }
                var parsed2 = JSON.parse(data);
                console.log(parsed2);
                response.end('Hello team! Data is:' + JSON.stringify(parsed));
            })
        });
    }
}).listen(8000);

// see: http://callbackhell.com/