const http = require('http');
const fsp = require('fs-promise');
const _ = require('lodash');

function actualDataProcessing(nobelsObject, eventsArray) {
    const laureates = _.uniq(_.flatMap(nobelsObject.prizes.map(yearRecord => yearRecord.laureates)).map(object => object.surname)).filter(word => word.length >2);
    const nobelEvents = eventsArray.filter(event => _.intersection(event.description.split(' '), laureates).length > 0);
    console.log(nobelEvents.slice(nobelEvents.length-100));
}

function doSthElseWithDataLesSLines() {
    let prizes = fsp.readFile(__dirname + '/nobel-prizes.json').then(JSON.parse);
    let events = fsp.readFile(__dirname + '/english-historical-events.json').then(JSON.parse);
    return Promise.all([prizes, events])
        .then(results => actualDataProcessing(...results))
        .catch(error => console.log(error));
}

doSthElseWithDataLesSLines();
