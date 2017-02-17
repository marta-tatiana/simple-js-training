var http = require('http');
var fs = require('fs');

// credits to: https://data.nasa.gov/resource/y77d-th95.json

var server = http.createServer(function (request, response) {
    if (request.method == 'GET' && request.url === '/hello') {
        var data = fs.readFileSync(__dirname + '/earth-metheorite-landings.json');
        var parsed = JSON.parse(data);
        response.end('Hello team! Data is:' + JSON.stringify(parsed));
    }
}).listen(8000);
