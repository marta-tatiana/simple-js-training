const http = require('http');
const fs = require('fs');
const fsp = require('fs-promise');

function actualDataProcessing(nobelsObject, eventsArray) {
    console.log('now i do sth with', nobelsObject, eventsArray);
}

function doSthWithData() {
    fs.readFile(__dirname + '/nobel-prizes.json', function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const prizes = JSON.parse(data);
        fs.readFile(__dirname + '/english-historical-events.json', function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            const events = JSON.parse(data);

            actualDataProcessing(prizes, events);
        })
    });
}

function doSthElseWithData() {
    let prizes;
    let events;
    return fsp.readFile(__dirname + '/nobel-prizes.json').then(function(data) {
        prizes = JSON.parse(data);
        return fsp.readFile(__dirname + '/english-historical-events.json');
    }).then(function(data) {
        events = JSON.parse(data);
        actualDataProcessing(prizes, events);
    }).catch(function(error){
        console.log(error);
    });
}


function doSthElseWithDataAndArrowFunctions() {
    let prizes;
    let events;
    return fsp.readFile(__dirname + '/nobel-prizes.json').then(data => {
        prizes = JSON.parse(data);
        return fsp.readFile(__dirname + '/english-historical-events.json');
    }).then(data => {
        events = JSON.parse(data);
        console.log(parsed2);
        actualDataProcessing(prizes, events);
    }).catch(error =>
        console.log(error)
    );
}


function doSthElseWithDataLesSLines() {
    let prizes = fsp.readFile(__dirname + '/nobel-prizes.json').then(JSON.parse);
    let events = fsp.readFile(__dirname + '/english-historical-events.json').then(JSON.parse);
    return Promise.all([prizes, events])
        .then(results => actualDataProcessing(...results))
        .catch(error => console.log(error));
}

doSthElseWithDataLesSLines();