var http = require('http');

var server = http.createServer(function (response, request) {
    if (request.method == 'GET' && request.url === '/hello') {
        response.end('Hello team!');
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8000);

