import {IncomingMessage} from 'http';
import {ServerResponse} from 'http';
var http = require('http');

var server = http.createServer(function (request: IncomingMessage, response: ServerResponse) {
    if (request.method == 'GET' && request.url === '/hello') {
        response.end('Hello team!');
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8000);
